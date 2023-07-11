import { join } from 'path';
import fs from 'fs-extra';
import runScript from 'runscript';

// 设置结果保存文件
const filePath = join(process.cwd(), '.dumi/theme/locales/useless-locale.txt');
fs.createFileSync(filePath);
fs.writeFileSync(filePath, '');

const localeList = [
  {
    locale: 'zh-CN',
    path: join(process.cwd(), '.dumi/theme/locales/zh-CN.json'),
  },
  {
    locale: 'en-US',
    path: join(process.cwd(), '.dumi/theme/locales/en-US.json'),
  },
];

// keys not to check
const excludeKeys = [
  'app.docs.components.icon.category.direction',
  'app.docs.components.icon.category.suggestion',
  'app.docs.components.icon.category.editor',
  'app.docs.components.icon.category.data',
  'app.docs.components.icon.category.other',
  'app.docs.components.icon.category.logo',
];

async function execute() {
  for (const localeItem of localeList) {
    const localeData = JSON.parse(fs.readFileSync(localeItem.path));
    for (const key in localeData) {
      const text = localeData[key];
      if (!excludeKeys.includes(key)) {
        try {
          await runScript(`grep -qr ${key} .dumi --exclude-dir=locales --exclude-dir=tmp`);
        } catch (err) {
          // If no result macthes, should throw `RunScriptError`
          if (err.name === 'RunScriptError') {
            delete localeData[key];
            fs.appendFileSync(filePath, `${key}: ${text}\n`);
          }
        }
      }
    }
    fs.writeFileSync(localeItem.path, JSON.stringify(localeData, null, 2));
  }
}

execute();
