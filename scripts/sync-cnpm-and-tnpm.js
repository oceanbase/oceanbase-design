const execa = require('execa');
const { join } = require('path');
const getPackages = require('./utils/getPackages');

process.setMaxListeners(Infinity);

module.exports = publishPkgList => {
  const pkgList = (publishPkgList || getPackages()).map(name => {
    return require(join(__dirname, '../packages', name, 'package.json')).name;
  });
  const commands = pkgList.map(pkg => {
    const subprocess = execa('cnpm', ['sync', pkg]);
    subprocess.stdout.pipe(process.stdout);
    return subprocess;
  });

  const commands2 = pkgList.map(pkg => {
    const subprocess = execa('tnpm', ['sync', pkg]);
    subprocess.stdout.pipe(process.stdout);
    return subprocess;
  });
  Promise.all([...commands, ...commands2]);
};
