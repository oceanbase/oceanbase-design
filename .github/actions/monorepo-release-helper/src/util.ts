import { exec } from '@actions/exec';

export const parseLernaTag = (tag: string) => {
  const match1 = tag.match(/(\S+)@(\S+)/);
  const packageName = (match1 && match1[1]) as string;
  const version = (match1 && match1[2]) as string;
  const match2 = tag.match(/^@(\S+)\/(\S+)@(\S+)/);
  const shortPackageName = (match2 && match2[2]) as string;
  return {
    packageName,
    shortPackageName,
    version,
  };
};

// message example: "Publish\n\n - @oceanbase/charts@0.2.15\n - @oceanbase/codemod@0.2.7\n - @oceanbase/design@0.2.24\n - @oceanbase/icons@0.2.9\n - @oceanbase/ui@0.2.25\n - @oceanbase/util@0.2.11"
export const parseLernaCommit = (message: string) => {
  const tagList = message.split('\n - ').filter(item => item.startsWith('@'));
  return {
    tagList,
  };
};

export const getChangelog = (content: string, version: string, prettier: boolean): string[] => {
  const lines = content.split('\n');
  const changeLog = [];
  const changeLogPre = [];
  const startPattern = new RegExp(`^## ${version}`);
  const stopPattern = /^## /; // 前一个版本
  const skipPattern = /^`/; // 日期
  let begin = false;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (begin && stopPattern.test(line)) {
      break;
    }
    if (begin && line && !skipPattern.test(line)) {
      let l = line;
      if (prettier) {
        if (line.startsWith('-')) l = `${line.replace('-', '◆')}\n`;
        if (line.startsWith('  -')) l = `${line.replace('  -', '\xa0\xa0\xa0\xa0◇')}\n`;
        l = `${l}\n`;
        l = l.replace(/`/g, '');
      }
      changeLogPre.push(l);
      changeLog.push(line);
    }
    if (!begin) {
      begin = startPattern.test(line);
    }
  }
  return [changeLog.join('\n'), changeLogPre.join('\n')];
};

export const execOutput = async (command: string) => {
  let myOutput: string = '';
  const options = {
    listeners: {
      stdout: (stdoutData: Buffer) => {
        myOutput += stdoutData.toString();
      },
    },
  };
  await exec(command, [], options);
  return myOutput;
};
