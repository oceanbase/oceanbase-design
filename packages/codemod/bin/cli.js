/* eslint no-console: 0 */

const path = require('path');
const fs = require('fs');
const os = require('os');

const _ = require('lodash');
const chalk = require('chalk');
const isGitClean = require('is-git-clean');
const updateCheck = require('update-check');
const semver = require('semver');
const { run: jscodeshift } = require('jscodeshift/src/Runner');
const execa = require('execa');
const isDirectory = require('is-directory');
const commandExistsSync = require('command-exists').sync;

const pkg = require('../package.json');
const pkgUpgradeList = require('./upgrade-list');
const { getDependencies } = require('../transforms/utils/marker');
const { lessToToken } = require('../transforms/less-to-token');
const { lessToCssvar } = require('../transforms/less-to-cssvar');

// jscodeshift codemod scripts dir
const transformersDir = path.join(__dirname, '../transforms');

// jscodeshift bin#--ignore-config
const ignoreConfig = path.join(__dirname, './codemod.ignore');

const transformers = [
  'antd-and-ob-charts-to-oceanbase-charts',
  'antd-to-oceanbase-design',
  'obui-to-oceanbase-design-and-ui',
  'obutil-to-oceanbase-util',
  'techui-and-pro-components-to-oceanbase-ui',
  'style-to-token',
  'less-to-token',
];

// Transformers that must be explicitly specified via --transformer option
// These are not run by default
const explicitTransformers = ['less-to-cssvar'];

// All available transformers
const allTransformers = [...transformers, ...explicitTransformers];

const dependencyProperties = [
  'dependencies',
  'devDependencies',
  'clientDependencies',
  'isomorphicDependencies',
  'buildDependencies',
];

async function ensureGitClean() {
  let clean = false;
  try {
    clean = await isGitClean();
  } catch (err) {
    if (err && err.stderr && err.stderr.toLowerCase().includes('not a git repository')) {
      clean = true;
    }
  }

  if (!clean) {
    console.log(chalk.yellow('Sorry that there are still some git changes'));
    console.log('\n you must commit or stash them firstly');
    process.exit(1);
  }
}

async function checkUpdates() {
  let update;
  try {
    update = await updateCheck(pkg);
  } catch (err) {
    console.log(chalk.yellow(`Failed to check for updates: ${err}`));
  }

  if (update) {
    console.log(chalk.blue(`Latest version is ${update.latest}. Please update firstly`));
    process.exit(1);
  }
}

function getMaxWorkers(options = {}) {
  // limit usage for cpus
  return options.cpus || Math.max(2, Math.ceil(os.cpus().length / 3));
}

function getRunnerArgs(transformerPath, parser = 'babylon', options = {}) {
  const args = {
    verbose: 2,
    // limit usage for cpus
    cpus: getMaxWorkers(options),
    parser,
    // https://github.com/facebook/jscodeshift/blob/master/src/Runner.js#L255
    // https://github.com/facebook/jscodeshift/blob/master/src/Worker.js#L50
    babel: false,
    // override default babylon parser config to enable `decorator-legacy`
    // https://github.com/facebook/jscodeshift/blob/master/parser/babylon.js
    parserConfig: require('./babylon.config.json'),
    extensions: ['js', 'jsx', 'ts', 'tsx'].join(','),
    transform: transformerPath,
    ignorePattern: '**/node_modules',
    ignoreConfig: options.ignoreConfig || ignoreConfig,
  };

  return args;
}

async function run(filePath, args = {}) {
  // When --transformer is specified, filter against all available transformers
  // Otherwise, use default transformers only (excluding explicit-only ones like less-to-cssvar)
  const targetTransformers = args.transformer
    ? args.transformer.split(',').filter(transformer => allTransformers.includes(transformer))
    : transformers;
  for (const transformer of targetTransformers) {
    await transform(transformer, 'babylon', filePath, args);
  }
}

async function transform(transformer, parser, filePath, options) {
  console.log(chalk.bgGreen.bold('Transform'), transformer);
  const transformerPath = path.join(transformersDir, `${transformer}.js`);

  const args = getRunnerArgs(transformerPath, parser, {
    ...options,
  });

  try {
    if (transformer === 'less-to-token') {
      await lessToToken(filePath);
    } else if (transformer === 'less-to-cssvar') {
      // less-to-cssvar options:
      // --prefix: CSS variable prefix (default: 'ant')
      // --rename-to-css: Whether to rename .less to .css (default: true)
      // --add-module: Whether to add .module suffix when renaming (default: true)
      //   - true (default): auto-detect based on import style (CSS Module vs global)
      //   - false: skip detection, never add .module
      const addModuleValue = options['add-module'] ?? options.addModule;
      // Default is true (auto-detect), false means skip detection
      const addModuleOption = addModuleValue !== false && addModuleValue !== 'false';

      const lessToCssvarOptions = {
        prefix: options.prefix || 'ant',
        // Support both --rename-to-css and --renameToCss formats
        // Default is true, use --rename-to-css=false or --no-rename-to-css to disable
        renameToCss: options['rename-to-css'] !== false && options.renameToCss !== false,
        addModule: addModuleOption,
      };
      await lessToCssvar(filePath, lessToCssvarOptions);
    } else {
      if (process.env.NODE_ENV === 'local') {
        console.log(`Running jscodeshift with: ${JSON.stringify(args)}`);
      }
      // js part
      await jscodeshift(transformerPath, [filePath], args);
    }
    console.log();
  } catch (err) {
    console.error(err);
    if (process.env.NODE_ENV === 'local') {
      const errorLogFile = path.join(__dirname, './error.log');
      fs.appendFileSync(errorLogFile, err);
      fs.appendFileSync(errorLogFile, '\n');
    }
  }
}

async function upgradeDetect(targetDir, needOBCharts, needObUtil) {
  const result = [];
  const cwd = path.join(process.cwd(), targetDir);
  const { readPackageUp } = await import('read-pkg-up');
  let closetPkgJson;
  try {
    closetPkgJson = await readPackageUp({ cwd });
  } catch (err) {
    // 处理无效的 package.json 文件（如版本格式错误）
    console.log(chalk.yellow(`Warning: Failed to read package.json: ${err.message}`));
    closetPkgJson = null;
  }

  let pkgJsonPath;
  if (!closetPkgJson) {
    pkgJsonPath = "we didn't find your package.json";
    // unknown dependency property
    result.push(['install', '@oceanbase/design', pkgUpgradeList['@oceanbase/design'].version]);
    result.push(['install', '@oceanbase/ui', pkgUpgradeList['@oceanbase/ui'].version]);
    if (needOBCharts) {
      result.push(['install', '@oceanbase/charts', pkgUpgradeList['@oceanbase/charts'].version]);
    }

    if (needObUtil) {
      result.push(['install', '@oceanbase/util', pkgUpgradeList['@oceanbase/util'].version]);
    }
  } else {
    const { packageJson } = closetPkgJson;
    pkgJsonPath = closetPkgJson.path;

    // dependencies must be installed or upgraded with correct version
    const mustInstallOrUpgradeDeps = ['@oceanbase/design', '@oceanbase/ui'];
    if (needOBCharts) {
      mustInstallOrUpgradeDeps.push('@oceanbase/charts');
    }
    if (needObUtil) {
      mustInstallOrUpgradeDeps.push('@oceanbase/util');
    }

    // handle mustInstallOrUpgradeDeps
    mustInstallOrUpgradeDeps.forEach(depName => {
      let hasDependency = false;
      const expectVersion = pkgUpgradeList[depName].version;
      // const upgradePkgDescription = pkgUpgradeList[depName].description;
      dependencyProperties.forEach(property => {
        const versionRange = _.get(packageJson, `${property}.${depName}`);
        // mark dependency installment state
        hasDependency = hasDependency || !!versionRange;
        // no dependency or improper version dependency
        if (versionRange && !semver.satisfies(semver.minVersion(versionRange), expectVersion)) {
          result.push(['update', depName, expectVersion, property]);
        }
      });
      if (!hasDependency) {
        // unknown dependency property
        result.push(['install', depName, pkgUpgradeList[depName].version]);
      }
    });

    // dependencies must be upgraded to correct version
    const mustUpgradeDeps = _.without(Object.keys(pkgUpgradeList), ...mustInstallOrUpgradeDeps);
    mustUpgradeDeps.forEach(depName => {
      dependencyProperties.forEach(property => {
        const expectVersion = pkgUpgradeList[depName].version;
        const versionRange = _.get(packageJson, `${property}.${depName}`);
        /**
         * we may have dependencies in `package.json`
         * make sure that they can `work well` with `oceanbase design system`
         * so we check dependency's version here
         */
        if (versionRange && !semver.satisfies(semver.minVersion(versionRange), expectVersion)) {
          result.push(['update', depName, expectVersion, property]);
        }
      });
    });
  }

  if (!result.length) {
    console.log(chalk.green('Checking passed'));
    return;
  }

  console.log(
    chalk.yellow(
      'It will install or upgrade these dependencies to ensure working well with oceanbase design system\n'
    )
  );
  console.log(`> Update package.json file: ${pkgJsonPath} \n`);
  const npmCommand = commandExistsSync('tnpm') ? 'tnpm' : 'npm';

  // install dependencies
  console.log(`New package installing...\n`);
  const dependencies = result.map(([operateType, depName, expectVersion, dependencyProperty]) =>
    [
      _.capitalize(operateType),
      `${depName}${expectVersion}`,
      dependencyProperty ? `in ${dependencyProperty}` : '',
    ].join(' ')
  );
  console.log(dependencies.map(n => `* ${n}`).join('\n'));
  console.log('\n');
  const installDependencies = result.map(([_, depName, expectVersion]) =>
    expectVersion ? `${depName}@${expectVersion}` : depName
  );
  await execa(npmCommand, ['install', ...installDependencies, '--save'], {
    stdio: 'inherit',
  });
  console.log(`\nNew package installed!\n`);

  // uninstall dependencies
  const deprecatedPackages = ['@alipay/ob-ui', '@alipay/ob-util', '@alipay/ob-charts'];
  const uninstallDependencies = [];

  if (closetPkgJson) {
    const { packageJson } = closetPkgJson;
    deprecatedPackages.forEach(depName => {
      dependencyProperties.forEach(property => {
        const versionRange = _.get(packageJson, `${property}.${depName}`);
        if (versionRange && !uninstallDependencies.includes(depName)) {
          uninstallDependencies.push(depName);
        }
      });
    });
  }
  // 如果没有找到 package.json，跳过卸载操作（无法确定包是否存在）

  if (uninstallDependencies.length > 0) {
    console.log(`Deprecated package uninstalling...\n`);
    console.log(uninstallDependencies.map(n => `* ${n}`).join('\n'));
    console.log('\n');
    await execa(npmCommand, ['uninstall', ...uninstallDependencies, '--save'], {
      stdio: 'inherit',
    });
    console.log(`\nDeprecated package uninstalled!\n`);
  }
}

/**
 * options
 * --force               // force skip git checking (dangerously)
 * --cpus=1              // specify cpus cores to use
 * --disablePrettier     // disable prettier
 * --transformer=t1,t2   // specify target transformer
 * --ignore-config       // ignore config file
 *
 * less-to-cssvar specific options:
 * --prefix=ant          // CSS variable prefix (default: 'ant'), e.g. var(--ant-color-primary)
 * --rename-to-css       // rename .less files to .css (default: true), use --rename-to-css=false to disable
 * --add-module          // add .module suffix when renaming (default: true)
 *                       // true: auto-detect based on import style (CSS Module vs global)
 *                       // false: skip detection, never add .module
 */

async function bootstrap() {
  const dir = process.argv[2];

  // eslint-disable-next-line global-require
  const args = require('yargs-parser')(process.argv.slice(3));
  if (process.env.NODE_ENV !== 'local') {
    // check for updates
    await checkUpdates();
    // check for git status
    if (!args.force) {
      await ensureGitClean();
    } else {
      console.log(
        Array(3)
          .fill(1)
          .map(() =>
            chalk.yellow('WARNING: You are trying to skip git status checking, please be careful')
          )
          .join('\n')
      );
    }
  }

  // check for `path`
  if (!dir || !fs.existsSync(dir)) {
    console.log(chalk.yellow('Invalid dir:', dir, ', please pass a valid dir'));
    process.exit(1);
  }

  await run(dir, args);

  if (!args.disablePrettier) {
    console.log('----------- Prettier Format -----------\n');
    console.log('[Prettier] format files running...');
    try {
      const isDir = isDirectory.sync(dir);
      const targetPath = isDir ? path.join(dir, '**/*.{js,jsx,ts,tsx}') : dir;
      const npxCommand = commandExistsSync('tnpx') ? 'tnpx' : 'npx';
      await execa(npxCommand, ['prettier', '--write', targetPath], { stdio: 'inherit' });
      console.log('\n[Prettier] format files completed!\n');
    } catch (err) {
      console.log('\n[Prettier] format files failed, please format it by yourself.\n', err);
    }
  }

  try {
    console.log('----------- Dependencies Alert -----------\n');
    const depsList = await getDependencies();
    await upgradeDetect(
      dir,
      depsList.includes('@oceanbase/charts'),
      depsList.includes('@oceanbase/util')
    );
  } catch (err) {
    console.log('skip summary due to', err);
  } finally {
    console.log(`\n----------- Thanks for using @oceanbase/codemod ${pkg.version} -----------`);
  }
}

module.exports = {
  bootstrap,
  ensureGitClean,
  transform,
  run,
  getRunnerArgs,
  checkUpdates,
};
