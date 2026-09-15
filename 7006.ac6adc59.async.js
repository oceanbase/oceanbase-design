"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7006],{87006:function(n,a,e){e.r(a),e.d(a,{texts:function(){return o}});const o=[{value:"OceanBase Design \u81EA\u5B9A\u4E49\u4E86\u4E00\u5957\u5B8C\u6574\u7684 Design Token\uFF0C\u63D0\u4F9B CSS \u53D8\u91CF\u3001hooks \u548C\u9759\u6001\u5BF9\u8C61\u4E09\u4E2D\u6D88\u8D39\u65B9\u5F0F\uFF0C\u652F\u6301\u5728 CSS\u3001Less\u3001Sass\u3001React \u7EC4\u4EF6\u3001\u975E React \u7EC4\u4EF6\u4E2D\u8FDB\u884C\u4F7F\u7528\u3002",paraId:0},{value:"CSS \u53D8\u91CF\u4F1A\u5728 ",paraId:1,tocIndex:1},{value:"ConfigProvider",paraId:1,tocIndex:1},{value:" \u6E32\u67D3\u65F6\u81EA\u52A8\u6CE8\u5165\uFF0C\u786E\u4FDD\u4F60\u7684\u5E94\u7528\u6839\u7EC4\u4EF6\u4F7F\u7528\u4E86 ",paraId:1,tocIndex:1},{value:"ConfigProvider",paraId:1,tocIndex:1},{value:"\uFF1A",paraId:1,tocIndex:1},{value:`import { ConfigProvider } from '@oceanbase/design';

export default () => {
  return (
    <ConfigProvider>
      {...}
    </ConfigProvider>
  );
};
`,paraId:2,tocIndex:1},{value:"CSS/Less/Sass \u6587\u4EF6",paraId:3,tocIndex:2},{value:"\uFF1A\u4F7F\u7528 CSS \u53D8\u91CF ",paraId:3,tocIndex:2},{value:"var(--ob-*)",paraId:3,tocIndex:2},{value:"React \u7EC4\u4EF6",paraId:3,tocIndex:2},{value:"\uFF1A\u4F7F\u7528 ",paraId:3,tocIndex:2},{value:"obToken",paraId:3,tocIndex:2},{value:" \u5BF9\u8C61\uFF0C\u652F\u6301 hooks \u548C\u9759\u6001\u5BF9\u8C61\u4E24\u79CD\u65B9\u5F0F\u3002",paraId:3,tocIndex:2},{value:"\u5728 CSS \u4E2D\u4F7F\u7528\uFF1A",paraId:4,tocIndex:3},{value:`.my-button {
  background-color: var(--ob-color-bg-selected);
  color: var(--ob-color-text-selected);
  border-radius: var(--ob-radius-sm);
}
`,paraId:5,tocIndex:3},{value:"\u5728 React \u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF08Hooks \u65B9\u5F0F\uFF09\uFF1A",paraId:6,tocIndex:3},{value:`import { useToken } from '@oceanbase/design';

const MyComponent = () => {
  const { obToken } = useToken();

  return (
    <div
      style={{
        backgroundColor: obToken.colorBgDefault,
        color: obToken.colorTextDefault,
        borderRadius: obToken.radiusSm,
      }}
    >
      {...}
    </div>
  );
};
`,paraId:7,tocIndex:3},{value:"\u5728 React \u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF08\u9759\u6001\u5BFC\u5165\uFF09\uFF1A",paraId:8,tocIndex:3},{value:`import { obToken } from '@oceanbase/design';
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: obToken.colorBgDefault,
          color: obToken.colorTextDefault,
          borderRadius: obToken.radiusSm,
        }}
      >
        {...}
      </div>
    );
  }
}
`,paraId:9,tocIndex:3},{value:"\u5E26 ",paraId:10,tocIndex:5},{value:"--ob-",paraId:10,tocIndex:5},{value:" \u524D\u7F00\u7684 CSS \u53D8\u91CF\u4F1A\u5728 ",paraId:10,tocIndex:5},{value:"ConfigProvider",paraId:10,tocIndex:5},{value:" \u6E32\u67D3\u65F6\u81EA\u52A8\u6CE8\u5165\u5230 ",paraId:10,tocIndex:5},{value:":root",paraId:10,tocIndex:5},{value:"\uFF0C",paraId:10,tocIndex:5},{value:"\u65E0\u9700\u5F00\u542F CSS \u53D8\u91CF\u6A21\u5F0F",paraId:10,tocIndex:5},{value:"\u5373\u53EF\u76F4\u63A5\u4F7F\u7528\u3002\u53EA\u8981\u5E94\u7528\u4E2D\u5305\u542B ",paraId:10,tocIndex:5},{value:"ConfigProvider",paraId:10,tocIndex:5},{value:" \u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u5C31\u4F1A\u81EA\u52A8\u751F\u6548\u3002",paraId:10,tocIndex:5},{value:"\u7279\u6027",paraId:11,tocIndex:6},{value:"OceanBase CSS \u53D8\u91CF (",paraId:11,tocIndex:6},{value:"--ob-*",paraId:11,tocIndex:6},{value:")",paraId:11,tocIndex:6},{value:"Ant Design CSS \u53D8\u91CF",paraId:11,tocIndex:6},{value:" (",paraId:11,tocIndex:6},{value:"--ant-*",paraId:11,tocIndex:6},{value:")",paraId:11,tocIndex:6},{value:"\u542F\u7528\u65B9\u5F0F",paraId:11,tocIndex:6},{value:"\u81EA\u52A8\u6CE8\u5165\uFF0C\u5F00\u7BB1\u5373\u7528",paraId:11,tocIndex:6},{value:"\u9700\u8981\u914D\u7F6E ",paraId:11,tocIndex:6},{value:"theme.cssVar",paraId:11,tocIndex:6},{value:" \u5F00\u542F",paraId:11,tocIndex:6},{value:"\u547D\u540D\u98CE\u683C",paraId:11,tocIndex:6},{value:"\u7CBE\u7B80\u3001\u8BED\u4E49\u5316\u547D\u540D",paraId:11,tocIndex:6},{value:"\u4E0E Token \u540D\u79F0\u4E00\u4E00\u5BF9\u5E94",paraId:11,tocIndex:6},{value:"\u8BBE\u8BA1\u76EE\u7684",paraId:11,tocIndex:6},{value:"\u4FBF\u4E8E\u4E1A\u52A1\u5C42\u5FEB\u901F\u4F7F\u7528",paraId:11,tocIndex:6},{value:"\u5B8C\u6574\u66B4\u9732\u6240\u6709 Token",paraId:11,tocIndex:6},{value:"\u53D8\u91CF\u6570\u91CF",paraId:11,tocIndex:6},{value:"\u7CBE\u9009\u5E38\u7528\u53D8\u91CF",paraId:11,tocIndex:6},{value:"\u8986\u76D6\u6240\u6709 Design Token",paraId:11,tocIndex:6},{value:"\u573A\u666F",paraId:12,tocIndex:8},{value:"\u63A8\u8350\u65B9\u5F0F",paraId:12,tocIndex:8},{value:"\u539F\u56E0",paraId:12,tocIndex:8},{value:"CSS/Less/Sass \u6837\u5F0F\u6587\u4EF6",paraId:12,tocIndex:8},{value:"CSS \u53D8\u91CF (",paraId:12,tocIndex:8},{value:"var(--ob-*)",paraId:12,tocIndex:8},{value:")",paraId:12,tocIndex:8},{value:"\u539F\u751F\u652F\u6301\uFF0C\u65E0\u9700 JavaScript",paraId:12,tocIndex:8},{value:"React \u51FD\u6570\u7EC4\u4EF6",paraId:12,tocIndex:8},{value:"obToken",paraId:12,tocIndex:8},{value:"\uFF08useToken\uFF09",paraId:12,tocIndex:8},{value:"\u54CD\u5E94\u4E3B\u9898\u53D8\u5316\uFF0C\u7C7B\u578B\u5B89\u5168",paraId:12,tocIndex:8},{value:"React \u7C7B\u7EC4\u4EF6",paraId:12,tocIndex:8},{value:"obToken",paraId:12,tocIndex:8},{value:"\uFF08\u9759\u6001\u5BFC\u5165\uFF09",paraId:12,tocIndex:8},{value:"\u7C7B\u7EC4\u4EF6\u65E0\u6CD5\u4F7F\u7528 hooks",paraId:12,tocIndex:8},{value:"\u975E React \u4E0A\u4E0B\u6587",paraId:12,tocIndex:8},{value:"obToken",paraId:12,tocIndex:8},{value:"\uFF08\u9759\u6001\u5BFC\u5165\uFF09",paraId:12,tocIndex:8},{value:"\u5DE5\u5177\u51FD\u6570\u3001\u914D\u7F6E\u5BF9\u8C61\u7B49",paraId:12,tocIndex:8},{value:`.my-button {
  background-color: var(--ob-color-bg-selected);
  color: var(--ob-color-text-selected);
  border-radius: var(--ob-radius-sm);
  padding: var(--ob-space-200) var(--ob-space-300);
}
`,paraId:13,tocIndex:10},{value:".my-title { font: var(--ob-font-h1); color: var(--ob-color-text-default); }",paraId:14,tocIndex:10},{value:`
### Less

\`\`\`less
.my-card {
  background-color: var(--ob-color-bg-default);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  box-shadow: var(--ob-shadow-2);
}
`,paraId:15,tocIndex:10},{value:`.my-card {
  background-color: var(--ob-color-bg-default);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  box-shadow: var(--ob-shadow-2);
}
`,paraId:16,tocIndex:11},{value:`<div
  style={{
    backgroundColor: 'var(--ob-color-bg-info)',
    color: 'var(--ob-color-text-link)',
    padding: 'var(--ob-space-400)',
  }}
>
  Info Card
</div>
`,paraId:17,tocIndex:12},{value:"\u9664\u4E86 CSS \u53D8\u91CF\uFF0COceanBase Design \u8FD8\u63D0\u4F9B\u4E86 ",paraId:18,tocIndex:13},{value:"obToken",paraId:18,tocIndex:13},{value:" \u5BF9\u8C61\uFF0C\u5B83\u662F\u6240\u6709 CSS \u53D8\u91CF\u7684 JavaScript \u8868\u793A\uFF0C\u53EF\u4EE5\u5728 React \u7EC4\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u7C7B\u578B\u652F\u6301\u548C\u5F00\u53D1\u4F53\u9A8C\u3002",paraId:18,tocIndex:13},{value:"\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u83B7\u53D6 ",paraId:19,tocIndex:14},{value:"obToken",paraId:19,tocIndex:14},{value:"\uFF1A",paraId:19,tocIndex:14},{value:"Hooks \u65B9\u5F0F",paraId:20,tocIndex:14},{value:"\uFF08\u63A8\u8350\uFF09\uFF1A\u901A\u8FC7 ",paraId:20,tocIndex:14},{value:"useToken",paraId:20,tocIndex:14},{value:" hooks \u83B7\u53D6\uFF0C\u4F1A\u6839\u636E\u5F53\u524D\u4E3B\u9898\u52A8\u6001\u66F4\u65B0",paraId:20,tocIndex:14},{value:"\u9759\u6001\u5BFC\u5165",paraId:20,tocIndex:14},{value:"\uFF1A\u76F4\u63A5\u5BFC\u5165\u9759\u6001 ",paraId:20,tocIndex:14},{value:"obToken",paraId:20,tocIndex:14},{value:" \u5BF9\u8C61\uFF0C\u4EC5\u63A8\u8350\u5728 React \u7C7B\u7EC4\u4EF6\u548C\u975E React \u4E0A\u4E0B\u6587\u4E2D\u4F7F\u7528",paraId:20,tocIndex:14},{value:"\u901A\u8FC7 ",paraId:21,tocIndex:15},{value:"useToken",paraId:21,tocIndex:15},{value:" hooks \u83B7\u53D6 ",paraId:21,tocIndex:15},{value:"obToken",paraId:21,tocIndex:15},{value:"\uFF0C\u4F1A\u6839\u636E\u5F53\u524D ",paraId:21,tocIndex:15},{value:"ConfigProvider",paraId:21,tocIndex:15},{value:" \u7684\u4E3B\u9898\u914D\u7F6E\u52A8\u6001\u66F4\u65B0\uFF1A",paraId:21,tocIndex:15},{value:`import { useToken } from '@oceanbase/design';
import React from 'react';

const MyComponent: React.FC = () => {
  const { obToken } = useToken();

  return (
    <div
      style={{
        backgroundColor: obToken.colorBgInfo,
        color: obToken.colorLink,
        padding: obToken.space400,
        borderRadius: obToken.radiusSm,
      }}
    >
      Info Card
    </div>
  );
};
`,paraId:22,tocIndex:15},{value:"\u76F4\u63A5\u5BFC\u5165\u9759\u6001 ",paraId:23,tocIndex:16},{value:"obToken",paraId:23,tocIndex:16},{value:" \u5BF9\u8C61\uFF0C",paraId:23,tocIndex:16},{value:"\u4EC5\u63A8\u8350\u5728 React \u7C7B\u7EC4\u4EF6\u548C\u975E React \u4E0A\u4E0B\u6587\u4E2D\u4F7F\u7528",paraId:23,tocIndex:16},{value:"\uFF1A",paraId:23,tocIndex:16},{value:"React \u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF1A",paraId:24,tocIndex:16},{value:`import { obToken } from '@oceanbase/design';
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: obToken.colorBgDefault,
          color: obToken.colorTextDefault,
          padding: obToken.space400,
          borderRadius: obToken.radiusSm,
        }}
      >
        My Component
      </div>
    );
  }
}
`,paraId:25,tocIndex:16},{value:"\u975E React \u4E0A\u4E0B\u6587\u4E2D\u4F7F\u7528\uFF1A",paraId:26,tocIndex:16},{value:`import { obToken } from '@oceanbase/design';

// \u5728\u5DE5\u5177\u51FD\u6570\u3001\u914D\u7F6E\u5BF9\u8C61\u7B49\u975E React \u4E0A\u4E0B\u6587\u4E2D\u4F7F\u7528
const styleConfig = {
  backgroundColor: obToken.colorBgDefault,
  color: obToken.colorTextDefault,
  padding: obToken.space400,
  borderRadius: obToken.radiusSm,
};
`,paraId:27,tocIndex:16},{value:"obToken",paraId:28,tocIndex:17},{value:" \u4E2D\u7684\u952E\u540D\u4E0E CSS \u53D8\u91CF\u540D\u4E00\u4E00\u5BF9\u5E94\uFF0C\u4F46\u53BB\u6389\u4E86 ",paraId:28,tocIndex:17},{value:"--ob-",paraId:28,tocIndex:17},{value:" \u524D\u7F00\uFF0C\u5E76\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\uFF1A",paraId:28,tocIndex:17},{value:"CSS \u53D8\u91CF",paraId:29,tocIndex:17},{value:"obToken \u952E\u540D",paraId:29,tocIndex:17},{value:"\u8BF4\u660E",paraId:29,tocIndex:17},{value:"--ob-color-bg-default",paraId:29,tocIndex:17},{value:"colorBgDefault",paraId:29,tocIndex:17},{value:"\u9ED8\u8BA4\u80CC\u666F\u8272",paraId:29,tocIndex:17},{value:"--ob-color-text-default",paraId:29,tocIndex:17},{value:"colorTextDefault",paraId:29,tocIndex:17},{value:"\u9ED8\u8BA4\u6587\u672C\u8272",paraId:29,tocIndex:17},{value:"--ob-color-border-default",paraId:29,tocIndex:17},{value:"colorBorderDefault",paraId:29,tocIndex:17},{value:"\u9ED8\u8BA4\u8FB9\u6846\u8272",paraId:29,tocIndex:17},{value:"--ob-space-400",paraId:29,tocIndex:17},{value:"space400",paraId:29,tocIndex:17},{value:"\u95F4\u8DDD 400",paraId:29,tocIndex:17},{value:"--ob-radius-sm",paraId:29,tocIndex:17},{value:"radiusSm",paraId:29,tocIndex:17},{value:"\u5C0F\u5706\u89D2",paraId:29,tocIndex:17},{value:"--ob-font-h1",paraId:29,tocIndex:17},{value:"fontH1",paraId:29,tocIndex:17},{value:"H1 \u5B57\u4F53\u6837\u5F0F",paraId:29,tocIndex:17},{value:`import { useToken, Button } from '@oceanbase/design';
import React from 'react';

const CustomButton: React.FC = () => {
  const { obToken } = useToken();

  return (
    <Button
      style={{
        backgroundColor: obToken.colorBgSelected,
        color: obToken.colorTextSelected,
        borderColor: obToken.colorBorderFocus,
      }}
    >
      \u81EA\u5B9A\u4E49\u6309\u94AE
    </Button>
  );
};
`,paraId:30,tocIndex:18},{value:"\u63A8\u8350\u4F7F\u7528\u8BED\u4E49\u5316\u7684\u53D8\u91CF\u540D\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\u989C\u8272\u503C\uFF1A",paraId:31,tocIndex:20},{value:`// \u2705 \u63A8\u8350\uFF1A\u4F7F\u7528\u8BED\u4E49\u5316\u53D8\u91CF
backgroundColor: obToken.colorBgDefault;
color: obToken.colorTextDefault;

// \u274C \u4E0D\u63A8\u8350\uFF1A\u76F4\u63A5\u4F7F\u7528\u57FA\u7840\u989C\u8272
backgroundColor: obToken.blue1;
color: obToken.blue6;
`,paraId:32,tocIndex:20},{value:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\uFF0C\u5C3D\u91CF\u4F7F\u7528\u76F8\u540C\u7684 Token \u6765\u4FDD\u6301\u89C6\u89C9\u4E00\u81F4\u6027\uFF1A",paraId:33,tocIndex:21},{value:`// \u2705 \u63A8\u8350\uFF1A\u7EDF\u4E00\u4F7F\u7528\u76F8\u540C\u7684\u95F4\u8DDD\u53D8\u91CF
padding: obToken.space400;
margin: obToken.space400;

// \u274C \u4E0D\u63A8\u8350\uFF1A\u6DF7\u7528\u4E0D\u540C\u7684\u95F4\u8DDD\u503C
padding: '16px';
margin: obToken.space400;
`,paraId:34,tocIndex:21},{value:"\u5728 TypeScript \u9879\u76EE\u4E2D\uFF0C\u5145\u5206\u5229\u7528 ",paraId:35,tocIndex:22},{value:"obToken",paraId:35,tocIndex:22},{value:" \u7684\u7C7B\u578B\u63D0\u793A\u529F\u80FD\uFF0C\u907F\u514D\u62FC\u5199\u9519\u8BEF\uFF1A",paraId:35,tocIndex:22},{value:`import { obToken } from '@oceanbase/design';

// \u2705 TypeScript \u4F1A\u63D0\u4F9B\u81EA\u52A8\u8865\u5168\u548C\u7C7B\u578B\u68C0\u67E5
const color = obToken.colorBgDefault;

// \u274C \u5B57\u7B26\u4E32\u5BB9\u6613\u62FC\u5199\u9519\u8BEF\uFF0C\u4E14\u6CA1\u6709\u7C7B\u578B\u68C0\u67E5
const color = 'var(--ob-color-bg-default)';
`,paraId:36,tocIndex:22},{value:"useToken",paraId:37},{value:"\u5728 React \u51FD\u6570\u7EC4\u4EF6\u4E2D\uFF0C\u63A8\u8350\u4F7F\u7528 ",paraId:38,tocIndex:23},{value:"useToken",paraId:38,tocIndex:23},{value:" hooks \u83B7\u53D6 ",paraId:38,tocIndex:23},{value:"obToken",paraId:38,tocIndex:23},{value:"\uFF1A",paraId:38,tocIndex:23},{value:`// \u2705 \u63A8\u8350\uFF1AReact \u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528 hooks\uFF0C\u54CD\u5E94\u4E3B\u9898\u53D8\u5316
import { useToken } from '@oceanbase/design';

const MyComponent = () => {
  const { obToken } = useToken();
  return <div style={{ backgroundColor: obToken.colorBgDefault }}>Content</div>;
};

// \u26A0\uFE0F \u4EC5\u5728 React \u7C7B\u7EC4\u4EF6\u6216\u975E React \u4E0A\u4E0B\u6587\u4E2D\u4F7F\u7528\u9759\u6001\u5BFC\u5165
import { obToken } from '@oceanbase/design';

// React \u7C7B\u7EC4\u4EF6
class MyClassComponent extends React.Component {
  render() {
    return <div style={{ backgroundColor: obToken.colorBgDefault }}>Content</div>;
  }
}

// \u975E React \u4E0A\u4E0B\u6587\uFF08\u5DE5\u5177\u51FD\u6570\u3001\u914D\u7F6E\u5BF9\u8C61\u7B49\uFF09
const config = { backgroundColor: obToken.colorBgDefault };
`,paraId:39,tocIndex:23},{value:"\u7ED3\u5408 CSS \u53D8\u91CF\u548C\u5A92\u4F53\u67E5\u8BE2\uFF0C\u5B9E\u73B0\u54CD\u5E94\u5F0F\u8BBE\u8BA1\uFF1A",paraId:40,tocIndex:24},{value:`.my-container {
  padding: var(--ob-space-200);
}

@media (min-width: 768px) {
  .my-container {
    padding: var(--ob-space-400);
  }
}
`,paraId:41,tocIndex:24},{value:"--ob-*",paraId:42,tocIndex:25},{value:" \u7531 ",paraId:42,tocIndex:25},{value:"ConfigProvider",paraId:42,tocIndex:25},{value:" \u5728\u8FD0\u884C\u65F6\u6CE8\u5165\uFF0C\u6E90\u7801\u91CC\u6CA1\u6709\u53EF\u9759\u6001\u626B\u63CF\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u6240\u4EE5\u7F16\u8F91\u5668\u9ED8\u8BA4\u4E0D\u4F1A\u5BF9 ",paraId:42,tocIndex:25},{value:"var(--ob-*)",paraId:42,tocIndex:25},{value:" \u7ED9\u51FA\u8865\u5168\u3002",paraId:42,tocIndex:25},{value:"@oceanbase/design",paraId:42,tocIndex:25},{value:" \u5305\u5185\u63D0\u4F9B\u4E86\u4E24\u4EFD",paraId:42,tocIndex:25},{value:"\u5DE5\u5177\u65E0\u5173",paraId:42,tocIndex:25},{value:"\u7684\u4EA7\u7269\uFF0C\u503C\u53D6\u9ED8\u8BA4\u4E3B\u9898\uFF08\u4E0E\u8FD0\u884C\u65F6\u6CE8\u5165\u4E00\u81F4\uFF09\uFF0C\u4EC5\u4F9B\u7F16\u8F91\u5668\u63D0\u793A\uFF0C",paraId:42,tocIndex:25},{value:"\u8BF7\u52FF\u5728\u8FD0\u884C\u65F6\u6837\u5F0F\u4E2D\u5F15\u7528",paraId:42,tocIndex:25},{value:"\uFF1A",paraId:42,tocIndex:25},{value:"\u4EA7\u7269",paraId:43,tocIndex:25},{value:"\u8DEF\u5F84",paraId:43,tocIndex:25},{value:"\u7528\u9014",paraId:43,tocIndex:25},{value:"CSS \u53D8\u91CF\u58F0\u660E\u6587\u4EF6",paraId:43,tocIndex:25},{value:"@oceanbase/design/tokens/ob-css-vars.reference.css",paraId:43,tocIndex:25},{value:"\u6807\u51C6 ",paraId:43,tocIndex:25},{value:":root { --ob-*: \u2026 }",paraId:43,tocIndex:25},{value:" \u58F0\u660E\uFF0C\u4EFB\u4F55\u80FD\u626B\u63CF\u6216\u7D22\u5F15 CSS \u53D8\u91CF\u7684\u5DE5\u5177\u90FD\u53EF\u6D88\u8D39",paraId:43,tocIndex:25},{value:"CSS custom data",paraId:43,tocIndex:25},{value:"@oceanbase/design/tokens/ob-css-vars.css-data.json",paraId:43,tocIndex:25},{value:"VS Code custom data\uFF08schema v1.1\uFF09\uFF0C\u4F9B ",paraId:43,tocIndex:25},{value:"css.customData",paraId:43,tocIndex:25},{value:" \u53CA\u5176\u751F\u6001\u6D88\u8D39",paraId:43,tocIndex:25},{value:"\u4E0D\u540C\u5DE5\u5177\u53EA\u662F\u8FD9\u4E24\u4EFD\u4EA7\u7269\u7684\u6D88\u8D39\u8005\uFF0C\u6309\u6240\u7528\u5DE5\u5177\u63A5\u5165\u5373\u53EF\uFF0C\u65E0\u9700\u6539\u52A8\u4EA7\u7269\u3002",paraId:44,tocIndex:25},{value:"ob-design setup",paraId:45,tocIndex:26},{value:" \u4F1A\u5199\u597D VS Code \u7CFB\u5217\u7684\u914D\u7F6E\uFF0C\u8BE5\u6587\u4EF6\u5EFA\u8BAE\u63D0\u4EA4\u5230\u4ED3\u5E93\uFF0C\u56E2\u961F\u6210\u5458 ",paraId:45,tocIndex:26},{value:"git clone",paraId:45,tocIndex:26},{value:" \u540E\u5373\u751F\u6548\uFF08Cursor \u540C\u6837\u8BFB\u53D6 ",paraId:45,tocIndex:26},{value:".vscode/",paraId:45,tocIndex:26},{value:"\uFF09\uFF1A",paraId:45,tocIndex:26},{value:`ob-design setup                  # MCP + AGENTS.md + .vscode/settings.json\uFF08client \u4E3A all\uFF09
ob-design setup --client vscode  # \u53EA\u5199\u7F16\u8F91\u5668\u63D0\u793A\u914D\u7F6E
`,paraId:46,tocIndex:26},{value:"\u5B83\u4F1A\u628A ",paraId:47,tocIndex:26},{value:'"css.customData": ["node_modules/@oceanbase/design/tokens/ob-css-vars.css-data.json"]',paraId:47,tocIndex:26},{value:" \u5408\u5E76\u8FDB ",paraId:47,tocIndex:26},{value:".vscode/settings.json",paraId:47,tocIndex:26},{value:"\uFF0C\u4E0D\u52A8\u4F60\u7684\u5176\u5B83\u914D\u7F6E\u9879\u3002\u82E5\u5C1A\u672A\u5B89\u88C5 ",paraId:47,tocIndex:26},{value:"@oceanbase/design",paraId:47,tocIndex:26},{value:"\uFF0C\u6216\u8BE5\u6587\u4EF6\u91CC\u5DF2\u6709\u6CE8\u91CA\uFF08JSONC\uFF09\uFF0Csetup \u4F1A\u8DF3\u8FC7\u5E76\u6253\u5370\u9700\u8981\u624B\u52A8\u6DFB\u52A0\u7684\u5185\u5BB9\u3002",paraId:47,tocIndex:26},{value:"\u5B83\u8FD8\u4F1A\u5F80 ",paraId:48,tocIndex:26},{value:".vscode/extensions.json",paraId:48,tocIndex:26},{value:" \u5199\u4E00\u6761",paraId:48,tocIndex:26},{value:"\u53EF\u9009",paraId:48,tocIndex:26},{value:"\u63A8\u8350 ",paraId:48,tocIndex:26},{value:"vunguyentuan.vscode-css-variables",paraId:48,tocIndex:26},{value:"\u2014\u2014\u80FD\u8865\u5168 ",paraId:48,tocIndex:26},{value:"var()",paraId:48,tocIndex:26},{value:" \u53C2\u6570\u7684\u6B63\u662F\u8FD9\u7C7B\u6269\u5C55\u3002\u8FD9\u53EA\u662F\u63D0\u793A\u800C\u975E\u4F9D\u8D56\uFF1AVS Code \u53EA\u4F1A\u8BE2\u95EE\u662F\u5426\u5B89\u88C5\uFF0C\u8BE5\u6761\u76EE\u53EF\u4EE5\u5220\u9664\uFF0C\u4E5F\u53EF\u4EE5\u6362\u6210\u5176\u5B83\u626B\u63CF\u5DE5\u4F5C\u533A\u7684\u5DE5\u5177\u3002\u82E5 ",paraId:48,tocIndex:26},{value:"extensions.json",paraId:48,tocIndex:26},{value:" \u91CC\u5DF2\u6709\u6CE8\u91CA\uFF08JSONC\uFF09\uFF0Csetup \u540C\u6837\u4F1A\u8DF3\u8FC7\u3002",paraId:48,tocIndex:26},{value:"\u65B9\u6848",paraId:49,tocIndex:27},{value:"\u63A5\u5165\u65B9\u5F0F",paraId:49,tocIndex:27},{value:"VS Code / Cursor ",paraId:49,tocIndex:27},{value:"css.customData",paraId:49,tocIndex:27},{value:"\u7531 ",paraId:49,tocIndex:27},{value:"ob-design setup",paraId:49,tocIndex:27},{value:" \u5199\u5165\uFF0C\u6216\u624B\u52A8\u6DFB\u52A0 JSON \u8DEF\u5F84\u3002\u5BF9 CSS / SCSS / Less \u6587\u6863\u90FD\u751F\u6548\uFF0C\u589E\u5F3A\u5C5E\u6027\u540D\u8865\u5168\u548C ",paraId:49,tocIndex:27},{value:"--ob-*",paraId:49,tocIndex:27},{value:" \u58F0\u660E\u4E0A\u7684 hover",paraId:49,tocIndex:27},{value:"\u626B\u63CF\u5DE5\u4F5C\u533A\u7684 CSS \u53D8\u91CF\u8865\u5168\u6269\u5C55\uFF08\u5982 CSS Variable Autocomplete\uFF09",paraId:49,tocIndex:27},{value:"\u7531 ",paraId:49,tocIndex:27},{value:"ob-design setup",paraId:49,tocIndex:27},{value:" \u5199\u5165 ",paraId:49,tocIndex:27},{value:".vscode/extensions.json",paraId:49,tocIndex:27},{value:" \u7684\u53EF\u9009\u63A8\u8350\uFF08\u53EF\u5B89\u5168\u5220\u9664\uFF09\u3002\u518D\u628A ",paraId:49,tocIndex:27},{value:"cssVariables.themeFiles",paraId:49,tocIndex:27},{value:" \u6307\u5411\u5305\u5185 ",paraId:49,tocIndex:27},{value:"ob-css-vars.reference.css",paraId:49,tocIndex:27},{value:"\uFF0C\u6216\u628A\u8BE5\u6587\u4EF6\u653E\u8FDB\u5DE5\u7A0B\u3002\u4E0D\u540C\u5DE5\u5177\u662F\u5426\u7D22\u5F15 ",paraId:49,tocIndex:27},{value:"node_modules",paraId:49,tocIndex:27},{value:" \u4E0D\u4E00\u81F4\uFF0C\u8BF7\u4EE5\u5B9E\u9645\u5DE5\u5177\u4E3A\u51C6",paraId:49,tocIndex:27},{value:"WebStorm / IntelliJ",paraId:49,tocIndex:27},{value:"\u628A reference.css \u653E\u8FDB\u5DE5\u7A0B\uFF0C\u5E76\u786E\u8BA4 IDE \u80FD\u8BC6\u522B ",paraId:49,tocIndex:27},{value:":root",paraId:49,tocIndex:27},{value:" \u58F0\u660E\u2014\u2014IDE \u9ED8\u8BA4\u4E0D\u7D22\u5F15 ",paraId:49,tocIndex:27},{value:"node_modules",paraId:49,tocIndex:27},{value:"React \u5185\u8054 ",paraId:49,tocIndex:27},{value:"style={{}}",paraId:49,tocIndex:27},{value:"\u5B57\u7B26\u4E32\u6CA1\u6709 CSS \u8BED\u4E49\uFF0C\u65E0\u6CD5\u8865\u5168\uFF0C\u5EFA\u8BAE\u6539\u7528 ",paraId:49,tocIndex:27},{value:"obToken",paraId:49,tocIndex:27},{value:"\uFF08\u81EA\u5E26\u7C7B\u578B\u63D0\u793A\uFF09",paraId:49,tocIndex:27},{value:"\u5185\u7F6E\u8BED\u8A00\u670D\u52A1\u7684 ",paraId:50,tocIndex:28},{value:"var()",paraId:50,tocIndex:28},{value:" \u53C2\u6570\u8865\u5168\u53EA\u8BFB\u53D6",paraId:50,tocIndex:28},{value:"\u5F53\u524D\u540C\u4E00\u4EFD\u6587\u6863",paraId:50,tocIndex:28},{value:"\u91CC\u7684 ",paraId:50,tocIndex:28},{value:"--x:",paraId:50,tocIndex:28},{value:" \u58F0\u660E\uFF1A\u5B83\u4E0D\u626B\u63CF\u5DE5\u4F5C\u533A\uFF0C\u4E5F\u4E0D\u4F1A\u5408\u5E76 ",paraId:50,tocIndex:28},{value:"@import",paraId:50,tocIndex:28},{value:" \u8FDB\u6765\u7684\u6587\u4EF6\uFF08Sass/Less \u53D8\u91CF\u8DF3\u8F6C\u540C\u6837\u662F\u540C\u6587\u4EF6\u8303\u56F4\uFF09\u3002\u56E0\u6B64\u5355\u9760\u4E00\u4E2A npm \u5305\u65E0\u6CD5\u8BA9 ",paraId:50,tocIndex:28},{value:"var(--ob-*)",paraId:50,tocIndex:28},{value:" \u51FA\u73B0\u4E0B\u62C9\u2014\u2014\u5C5E\u6027\u540D\u548C hover \u9760 ",paraId:50,tocIndex:28},{value:"css.customData",paraId:50,tocIndex:28},{value:"\uFF0C",paraId:50,tocIndex:28},{value:"var()",paraId:50,tocIndex:28},{value:" \u53C2\u6570\u8865\u5168\u5FC5\u987B\u9760\u4F1A\u626B\u63CF\u5DE5\u4F5C\u533A\u7684\u6269\u5C55\u3002",paraId:50,tocIndex:28},{value:"\u82E5\u8981\u5B8C\u5168\u4E0D\u4F9D\u8D56\u7F16\u8F91\u5668\u914D\u7F6E\uFF0C\u5C31\u5728 CI \u91CC\u6821\u9A8C\u3002",paraId:51,tocIndex:28},{value:"ob-design lint",paraId:51,tocIndex:28},{value:" \u80FD\u67E5\u51FA ",paraId:51,tocIndex:28},{value:".css",paraId:51,tocIndex:28},{value:"/",paraId:51,tocIndex:28},{value:".less",paraId:51,tocIndex:28},{value:"/",paraId:51,tocIndex:28},{value:".scss",paraId:51,tocIndex:28},{value:" \u4EE5\u53CA\u5185\u8054\u5B57\u7B26\u4E32\uFF08\u5982 ",paraId:51,tocIndex:28},{value:"<div style={{ color: 'var(--ob-x)' }} />",paraId:51,tocIndex:28},{value:"\uFF09\u4E2D\u7684\u975E\u6CD5 ",paraId:51,tocIndex:28},{value:"var(--ob-*)",paraId:51,tocIndex:28},{value:" \u540D\u3001",paraId:51,tocIndex:28},{value:"--ob-padding-*",paraId:51,tocIndex:28},{value:" \u8BEF\u7528\u548C antd \u53D8\u91CF\uFF0C\u5E76\u7ED9\u51FA\u6B63\u786E token\uFF1A",paraId:51,tocIndex:28},{value:`"scripts": { "lint:ob": "ob-design lint ./src" }
`,paraId:52,tocIndex:28},{value:"ob-design lint",paraId:53,tocIndex:28},{value:" \u53EA\u63A5\u53D7\u4E00\u4E2A\u76EE\u6807\u8DEF\u5F84\uFF0C\u8BF7\u7528\u6E90\u7801\u6839\u76EE\u5F55\u8C03\u7528\u4E00\u6B21\uFF0C\u4E0D\u8981\u6302\u5728\u9010\u6587\u4EF6\u7684 glob \u94A9\u5B50\u4E0A\u3002",paraId:53,tocIndex:28},{value:"\u8865\u5168\u5217\u8868\u53EA\u5305\u542B\u6587\u6863\u6536\u5F55\u7684\u63A8\u8350\u53D8\u91CF\uFF0C\u5DF2\u5E9F\u5F03\u7684\u517C\u5BB9\u53D8\u91CF\u4E0D\u4F1A\u51FA\u73B0\u3002\u4EA7\u7269\u7531 ",paraId:54,tocIndex:28},{value:"pnpm run generate:ide-tokens",paraId:54,tocIndex:28},{value:" \u751F\u6210\uFF0C\u5E76\u6709\u6D4B\u8BD5\u4FDD\u8BC1\u4E0E\u6E90\u7801\u540C\u6B65\u3002",paraId:54,tocIndex:28}]}}]);
