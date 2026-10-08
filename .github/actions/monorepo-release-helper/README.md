# 🌈 Release Helper

[![](https://img.shields.io/badge/marketplace-monorepo--release--helper-blueviolet?style=flat-square)](https://github.com/marketplace/actions/monorepo-release-helper) [![](https://img.shields.io/github/v/release/dengfuping/monorepo-release-helper?style=flat-square&color=orange)](https://github.com/dengfuping/monorepo-release-helper/releases) ![](https://img.shields.io/github/actions/workflow/status/dengfuping/monorepo-release-helper/CI?style=flat-square)

🤖 A GitHub Action that help you publish monorepo release. Inspired by [actions-cool/release-helper](https://github.com/actions-cool/release-helper).

> Mainly used by [oceanbase/oceanbase-design](https://github.com/oceanbase/oceanbase-design). Suggest [**changelog**](https://github.com/oceanbase/oceanbase-design/blob/master/docs/design/design-CHANGELOG.md) use the same format.

## 🚀 Usage

### Example

```yml
name: 🤖 Auto Make Release

on:
  push:
    branches:
      - 'master'

jobs:
  release-helper:
    runs-on: ubuntu-latest
    steps:
      - name: make release
        if: github.event.ref_type == 'tag'
        uses: dengfuping/monorepo-release-helper@v2
        with:
          branch: 'master'
          changelogs: 'CHANGELOG.en-US.md, CHANGELOG.zh-CN.md'
          dingding-changelogs: 'CHANGELOG.zh-CN.md',
          dingding-token: ${{ secrets.DINGDING_BOT_TOKEN }}
          dingding-message-title: '# 🎉 OceanBase Design Release 🎉'
          dingding-message-poster: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ'
          dingding-message-footer: '\n💬 Welcome to [**OceanBase Design Releases**](https://github.com/oceanbase/oceanbase-design/releases) to view more changelog'
          dingding-message-prettier: true

```

### Inputs

| Name | Desc | Type | Required |
| --- | --- | --- | --- |
| branch | The changelog file branch | string | ✔ |
| changelogs | The changelog file path | string | ✔ |
| dingding-changelogs | The changelog file path for DingTalk | string | ✖ |
| dingding-token | DingTalk token, support multiple token | string | ✖ |
| dingding-delay-minute | DingTalk delay time for posting message | string | ✖ |
| dingding-message-title | DingTalk message title | string | ✖ |
| dingding-message-poster | DingTalk poster url | string | ✖ |
| dingding-message-footer | DingTalk message footer | string | ✖ |
| dingding-message-prettier | whether to prettier DingTalk message | boolean | ✖ |
| token | Github token, default value is `${{ github.token }}` | string | ✖ |

- [Integrate with dingding bot](https://developers.dingtalk.com/document/robots/custom-robot-access)
- Recommond to prettier dingding message for better nested list style.
- You can set multiple dingding token:
  - `dingding-token: ${{ secrets.TOKEN1 }} ${{ secrets.TOKEN2 }}`

### Workflow

- `lerna publish`
- git push commit message like below 👇🏻 when publish is success:

```bash
Publish

 - @oceanbase/charts@0.2.15
 - @oceanbase/codemod@0.2.7
 - @oceanbase/design@0.2.24
 - @oceanbase/icons@0.2.9
 - @oceanbase/ui@0.2.25
 - @oceanbase/util@0.2.11
```

- New commit on target branch will trigger action
- Auto release with changelog and post to dingding

## ⚡ Feedback

You are very welcome to try it out and put forward your comments. You can use the following methods:

- Report bugs or consult with [Issue](https://github.com/dengfuping/monorepo-release-helper/issues)
- Submit [Pull Request](https://github.com/dengfuping/monorepo-release-helper/pulls) to improve the code of `monorepo-release-helper`

## LICENSE

[MIT](./LICENSE)
