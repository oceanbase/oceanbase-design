import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';
import { dealStringToArr } from 'actions-util';
import axios from 'axios';
import { parseLernaCommit, parseLernaTag, getChangelog } from './util';

async function main(): Promise<void> {
  try {
    // Github token, defined in action.yml
    // default value is ${{ github.token }}
    const token = core.getInput('token');
    const octokit = new Octokit({ auth: `token ${token}` });

    const branch = core.getInput('branch');
    const changelogs = core.getInput('changelogs');
    const dingdingChangelogs = core.getInput('dingding-changelogs');
    const dingdingToken = core.getInput('dingding-token');
    const prettier = core.getInput('dingding-message-prettier');
    const commitSha = core.getInput('commit-sha');

    const changelogPathArr = dealStringToArr(changelogs);
    const dingdingChangelogPathArr = dealStringToArr(dingdingChangelogs);

    const { info, error } = core;

    const { owner, repo } = github.context.repo;
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}`;
    info(`owner: ${owner}, repo: ${repo}`);
    info(`url: ${url}`);

    let message = github.context.payload.head_commit?.message as string | undefined;
    if (commitSha) {
      info(`Fetching commit message from ${commitSha}`);
      const { data } = await octokit.repos.getCommit({
        owner,
        repo,
        ref: commitSha,
      });
      message = data.commit.message;
    }

    if (!message || !message.startsWith('Publish')) {
      error('Invalid commit! Commit format should start `Publish` like lerna.');
      return;
    }

    const { tagList } = parseLernaCommit(message);
    const dingdingChangelogArr: { tag: string; changelog: string }[] = [];

    for (const tag of tagList) {
      const { shortPackageName, version } = parseLernaTag(tag);

      const releaseArr = [];
      const dingdingArr = [];

      for (let i = 0; i < changelogPathArr.length; i += 1) {
        const changelogPath = changelogPathArr[i];
        // match changelog path by shortPackageName
        if (changelogPath.includes(shortPackageName)) {
          const changelogUrl = `${url}/${changelogPathArr[i]}`;
          info(`${tag} changelog url: ${changelogUrl}`);

          const { data } = await axios.get(changelogUrl);
          const [changelog, changelogPre] = getChangelog(data, version, prettier !== '');

          if (changelog) {
            info(`\n${tag} changelog:\n`);
            info(changelog);
            releaseArr.push(changelog);
          }

          // only push changelog for dingding
          if (changelogPre && dingdingChangelogPathArr.includes(changelogPath)) {
            info(`\n${tag} changelog for dingding:\n`);
            info(changelogPre);
            dingdingArr.push(changelogPre);
          }
        }
      }
      if (dingdingArr.length > 0) {
        dingdingChangelogArr.push({
          tag,
          changelog: dingdingArr.join(''),
        });
      }

      const release = core.getInput('release');
      if (release !== 'false') {
        try {
          await octokit.repos.createRelease({
            owner,
            repo,
            tag_name: tag,
            name: tag,
            body: releaseArr.join('\n---\n'),
            draft: false,
            prerelease: false,
            make_latest: 'true',
          });
          info(`[Actions] Success release ${tag}`);
        } catch (e: any) {
          // Idempotent backfill: skip if release already exists
          if (e.status === 422) {
            info(`[Actions] Release ${tag} already exists, skip`);
          } else {
            throw e;
          }
        }
      } else {
        info(`[Actions] Skip release ${tag}`);
      }
    }

    if (dingdingToken) {
      let log = dingdingChangelogArr
        .map(item => {
          return `## ${item.tag}\n\n${item.changelog}`;
        })
        .join('\n\n\n\n');
      const messageTitle = core.getInput('dingding-message-title');
      const messagePoster = core.getInput('dingding-message-poster');
      const messageFooter = core.getInput('dingding-message-footer');

      if (messagePoster) {
        log = `![](${messagePoster})\n\n${log}`;
      }
      if (messageTitle) {
        log = `${messageTitle}\n\n${log}`;
      }
      if (messageFooter) {
        log += `\n\n\n\n${messageFooter}`;
      }

      info(`log: ${log}`);

      const time = core.getInput('dingding-delay-minute') || 0;
      const delayMs = +time * 1000 * 60;
      info(`[Actions] [time] ${time} start: ${new Date().toISOString()} `);

      if (delayMs > 0) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
      info(`[Actions][time] ${time} go: ${new Date().toISOString()} `);

      const dingdingTokenArr = dingdingToken.split(' ');
      for (const dingdingTokenKey of dingdingTokenArr) {
        if (dingdingTokenKey) {
          await axios.post(
            `https://oapi.dingtalk.com/robot/send?access_token=${dingdingTokenKey}`,
            {
              msgtype: 'markdown',
              markdown: {
                title: messageTitle,
                text: log,
              },
            }
          );
        }
      }

      info('[Actions] Success post dingding message for all release packages.');
    }
  } catch (e: any) {
    core.setFailed(`[Actions] Error: ${e.message}`);
  }
}

main();
