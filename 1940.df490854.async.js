"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1940],{41940:function(n,e,a){a.r(e),a.d(e,{texts:function(){return o}});const o=[{value:"OceanBase Design provides a complete set of custom Design Tokens with three consumption methods: CSS variables, hooks, and static objects. They can be used in CSS, Less, Sass, React components, and non-React contexts.",paraId:0},{value:"CSS variables are automatically injected when ",paraId:1,tocIndex:1},{value:"ConfigProvider",paraId:1,tocIndex:1},{value:" renders. Ensure your app root uses ",paraId:1,tocIndex:1},{value:"ConfigProvider",paraId:1,tocIndex:1},{value:":",paraId:1,tocIndex:1},{value:`import { ConfigProvider } from '@oceanbase/design';

export default () => {
  return (
    <ConfigProvider>
      {...}
    </ConfigProvider>
  );
};
`,paraId:2,tocIndex:1},{value:"CSS/Less/Sass files",paraId:3,tocIndex:2},{value:": Use CSS variables ",paraId:3,tocIndex:2},{value:"var(--ob-*)",paraId:3,tocIndex:2},{value:"React components",paraId:3,tocIndex:2},{value:": Use ",paraId:3,tocIndex:2},{value:"obToken",paraId:3,tocIndex:2},{value:" object, supporting both hooks and static import.",paraId:3,tocIndex:2},{value:"In CSS:",paraId:4,tocIndex:3},{value:`.my-button {
  background-color: var(--ob-color-bg-selected);
  color: var(--ob-color-text-selected);
  border-radius: var(--ob-radius-sm);
}
`,paraId:5,tocIndex:3},{value:"In React function components (Hooks):",paraId:6,tocIndex:3},{value:`import { useToken } from '@oceanbase/design';

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
`,paraId:7,tocIndex:3},{value:"In React class components (Static import):",paraId:8,tocIndex:3},{value:`import { obToken } from '@oceanbase/design';
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
`,paraId:9,tocIndex:3},{value:"CSS variables with the ",paraId:10,tocIndex:5},{value:"--ob-",paraId:10,tocIndex:5},{value:" prefix are automatically injected into ",paraId:10,tocIndex:5},{value:":root",paraId:10,tocIndex:5},{value:" when ",paraId:10,tocIndex:5},{value:"ConfigProvider",paraId:10,tocIndex:5},{value:" renders. ",paraId:10,tocIndex:5},{value:"No CSS variable mode configuration required",paraId:10,tocIndex:5},{value:" \u2014 they work as soon as your app includes ",paraId:10,tocIndex:5},{value:"ConfigProvider",paraId:10,tocIndex:5},{value:".",paraId:10,tocIndex:5},{value:"Feature",paraId:11,tocIndex:6},{value:"OceanBase CSS Variables (",paraId:11,tocIndex:6},{value:"--ob-*",paraId:11,tocIndex:6},{value:")",paraId:11,tocIndex:6},{value:"Ant Design CSS Variables",paraId:11,tocIndex:6},{value:" (",paraId:11,tocIndex:6},{value:"--ant-*",paraId:11,tocIndex:6},{value:")",paraId:11,tocIndex:6},{value:"Enable",paraId:11,tocIndex:6},{value:"Auto-injected, out of the box",paraId:11,tocIndex:6},{value:"Requires ",paraId:11,tocIndex:6},{value:"theme.cssVar",paraId:11,tocIndex:6},{value:" config",paraId:11,tocIndex:6},{value:"Naming",paraId:11,tocIndex:6},{value:"Concise, semantic",paraId:11,tocIndex:6},{value:"One-to-one with Token names",paraId:11,tocIndex:6},{value:"Purpose",paraId:11,tocIndex:6},{value:"Quick adoption in business layer",paraId:11,tocIndex:6},{value:"Full exposure of all Tokens",paraId:11,tocIndex:6},{value:"Count",paraId:11,tocIndex:6},{value:"Curated common variables",paraId:11,tocIndex:6},{value:"All Design Tokens",paraId:11,tocIndex:6},{value:"Scenario",paraId:12,tocIndex:8},{value:"Recommended",paraId:12,tocIndex:8},{value:"Reason",paraId:12,tocIndex:8},{value:"CSS/Less/Sass files",paraId:12,tocIndex:8},{value:"CSS variables (",paraId:12,tocIndex:8},{value:"var(--ob-*)",paraId:12,tocIndex:8},{value:")",paraId:12,tocIndex:8},{value:"Native support, no JavaScript",paraId:12,tocIndex:8},{value:"React function components",paraId:12,tocIndex:8},{value:"obToken",paraId:12,tocIndex:8},{value:" (useToken)",paraId:12,tocIndex:8},{value:"Theme-aware, type-safe",paraId:12,tocIndex:8},{value:"React class components",paraId:12,tocIndex:8},{value:"obToken",paraId:12,tocIndex:8},{value:" (static import)",paraId:12,tocIndex:8},{value:"Class components cannot use hooks",paraId:12,tocIndex:8},{value:"Non-React context",paraId:12,tocIndex:8},{value:"obToken",paraId:12,tocIndex:8},{value:" (static import)",paraId:12,tocIndex:8},{value:"Utils, config objects, etc.",paraId:12,tocIndex:8},{value:`.my-button {
  background-color: var(--ob-color-bg-selected);
  color: var(--ob-color-text-selected);
  border-radius: var(--ob-radius-sm);
  padding: var(--ob-space-200) var(--ob-space-300);
}
`,paraId:13,tocIndex:10},{value:`.my-card {
  background-color: var(--ob-color-bg-default);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  box-shadow: var(--ob-shadow-2);
}
`,paraId:14,tocIndex:11},{value:`.my-card {
  background-color: var(--ob-color-bg-default);
  border: 1px solid var(--ob-color-border-default);
  border-radius: var(--ob-radius-md);
  box-shadow: var(--ob-shadow-2);
}
`,paraId:15,tocIndex:12},{value:`<div
  style={{
    backgroundColor: 'var(--ob-color-info-fill)',
    color: 'var(--ob-color-info-text)',
    padding: 'var(--ob-space-400)',
  }}
>
  Info Card
</div>
`,paraId:16,tocIndex:13},{value:"Besides CSS variables, OceanBase Design provides the ",paraId:17,tocIndex:14},{value:"obToken",paraId:17,tocIndex:14},{value:" object \u2014 the JavaScript representation of all CSS variables. It can be used directly in React components for better type support and DX.",paraId:17,tocIndex:14},{value:"Two ways to get ",paraId:18,tocIndex:15},{value:"obToken",paraId:18,tocIndex:15},{value:":",paraId:18,tocIndex:15},{value:"Hooks",paraId:19,tocIndex:15},{value:" (recommended): Via ",paraId:19,tocIndex:15},{value:"useToken",paraId:19,tocIndex:15},{value:" hook, updates with theme",paraId:19,tocIndex:15},{value:"Static import",paraId:19,tocIndex:15},{value:": Import the static ",paraId:19,tocIndex:15},{value:"obToken",paraId:19,tocIndex:15},{value:" object \u2014 only for React class components and non-React contexts",paraId:19,tocIndex:15},{value:"Get ",paraId:20,tocIndex:16},{value:"obToken",paraId:20,tocIndex:16},{value:" via ",paraId:20,tocIndex:16},{value:"useToken",paraId:20,tocIndex:16},{value:"; it updates with ",paraId:20,tocIndex:16},{value:"ConfigProvider",paraId:20,tocIndex:16},{value:" theme:",paraId:20,tocIndex:16},{value:`import { useToken } from '@oceanbase/design';
import React from 'react';

const MyComponent: React.FC = () => {
  const { obToken } = useToken();

  return (
    <div
      style={{
        backgroundColor: obToken.colorInfoFill,
        color: obToken.colorInfoText,
        padding: obToken.space400,
        borderRadius: obToken.radiusSm,
      }}
    >
      Info Card
    </div>
  );
};
`,paraId:21,tocIndex:16},{value:"Import the static ",paraId:22,tocIndex:17},{value:"obToken",paraId:22,tocIndex:17},{value:" object \u2014 ",paraId:22,tocIndex:17},{value:"only for React class components and non-React contexts",paraId:22,tocIndex:17},{value:":",paraId:22,tocIndex:17},{value:"In React class components:",paraId:23,tocIndex:17},{value:`import { obToken } from '@oceanbase/design';
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
`,paraId:24,tocIndex:17},{value:"In non-React contexts:",paraId:25,tocIndex:17},{value:`import { obToken } from '@oceanbase/design';

// Use in utils, config objects, etc.
const styleConfig = {
  backgroundColor: obToken.colorBgDefault,
  color: obToken.colorTextDefault,
  padding: obToken.space400,
  borderRadius: obToken.radiusSm,
};
`,paraId:26,tocIndex:17},{value:"obToken",paraId:27,tocIndex:18},{value:" keys map 1:1 to CSS variable names, but drop the ",paraId:27,tocIndex:18},{value:"--ob-",paraId:27,tocIndex:18},{value:" prefix and use camelCase:",paraId:27,tocIndex:18},{value:"CSS Variable",paraId:28,tocIndex:18},{value:"obToken Key",paraId:28,tocIndex:18},{value:"Description",paraId:28,tocIndex:18},{value:"--ob-color-bg-default",paraId:28,tocIndex:18},{value:"colorBgDefault",paraId:28,tocIndex:18},{value:"Default background",paraId:28,tocIndex:18},{value:"--ob-color-text-default",paraId:28,tocIndex:18},{value:"colorTextDefault",paraId:28,tocIndex:18},{value:"Default text",paraId:28,tocIndex:18},{value:"--ob-color-border-default",paraId:28,tocIndex:18},{value:"colorBorderDefault",paraId:28,tocIndex:18},{value:"Default border",paraId:28,tocIndex:18},{value:"--ob-space-400",paraId:28,tocIndex:18},{value:"space400",paraId:28,tocIndex:18},{value:"Space 400",paraId:28,tocIndex:18},{value:"--ob-radius-sm",paraId:28,tocIndex:18},{value:"radiusSm",paraId:28,tocIndex:18},{value:"Small radius",paraId:28,tocIndex:18},{value:"--ob-font-h1",paraId:28,tocIndex:18},{value:"fontH1",paraId:28,tocIndex:18},{value:"H1 font",paraId:28,tocIndex:18},{value:`import { useToken, Button } from '@oceanbase/design';
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
      Custom Button
    </Button>
  );
};
`,paraId:29,tocIndex:19},{value:"Use semantic variable names instead of raw color values:",paraId:30,tocIndex:21},{value:`// \u2705 Recommended: semantic variables
backgroundColor: obToken.colorBgDefault;
color: obToken.colorTextDefault;

// \u274C Not recommended: base colors
backgroundColor: obToken.blue1;
color: obToken.blue6;
`,paraId:31,tocIndex:21},{value:"Use the same Tokens across the project for visual consistency:",paraId:32,tocIndex:22},{value:`// \u2705 Recommended: same spacing variables
padding: obToken.space400;
margin: obToken.space400;

// \u274C Not recommended: mixed values
padding: '16px';
margin: obToken.space400;
`,paraId:33,tocIndex:22},{value:"In TypeScript, rely on ",paraId:34,tocIndex:23},{value:"obToken",paraId:34,tocIndex:23},{value:" type hints to avoid typos:",paraId:34,tocIndex:23},{value:`import { obToken } from '@oceanbase/design';

// \u2705 TypeScript provides autocomplete and type checking
const color = obToken.colorBgDefault;

// \u274C Strings are error-prone and unchecked
const color = 'var(--ob-color-bg-default)';
`,paraId:35,tocIndex:23},{value:"In React function components, use ",paraId:36,tocIndex:24},{value:"useToken",paraId:36,tocIndex:24},{value:" to get ",paraId:36,tocIndex:24},{value:"obToken",paraId:36,tocIndex:24},{value:":",paraId:36,tocIndex:24},{value:`// \u2705 Recommended: hooks in function components, theme-aware
import { useToken } from '@oceanbase/design';

const MyComponent = () => {
  const { obToken } = useToken();
  return <div style={{ backgroundColor: obToken.colorBgDefault }}>Content</div>;
};

// \u26A0\uFE0F Use static import only in class components or non-React contexts
import { obToken } from '@oceanbase/design';

// React class component
class MyClassComponent extends React.Component {
  render() {
    return <div style={{ backgroundColor: obToken.colorBgDefault }}>Content</div>;
  }
}

// Non-React context (utils, config, etc.)
const config = { backgroundColor: obToken.colorBgDefault };
`,paraId:37,tocIndex:24},{value:"Combine CSS variables with media queries for responsive layouts:",paraId:38,tocIndex:25},{value:`.my-container {
  padding: var(--ob-space-200);
}

@media (min-width: 768px) {
  .my-container {
    padding: var(--ob-space-400);
  }
}
`,paraId:39,tocIndex:25},{value:"--ob-*",paraId:40,tocIndex:26},{value:" variables are injected at runtime by ",paraId:40,tocIndex:26},{value:"ConfigProvider",paraId:40,tocIndex:26},{value:", and no stylesheet in the source declares them, so editors do not suggest them inside ",paraId:40,tocIndex:26},{value:"var(--ob-*)",paraId:40,tocIndex:26},{value:" by default. ",paraId:40,tocIndex:26},{value:"@oceanbase/design",paraId:40,tocIndex:26},{value:" ships two ",paraId:40,tocIndex:26},{value:"tool-agnostic",paraId:40,tocIndex:26},{value:" artifacts, resolved from the default theme (identical to runtime injection). They are for editor hints only \u2014 ",paraId:40,tocIndex:26},{value:"do not reference them in runtime styles",paraId:40,tocIndex:26},{value:":",paraId:40,tocIndex:26},{value:"Artifact",paraId:41,tocIndex:26},{value:"Path",paraId:41,tocIndex:26},{value:"Purpose",paraId:41,tocIndex:26},{value:"CSS variable declarations",paraId:41,tocIndex:26},{value:"@oceanbase/design/tokens/ob-css-vars.reference.css",paraId:41,tocIndex:26},{value:"Plain ",paraId:41,tocIndex:26},{value:":root { --ob-*: \u2026 }",paraId:41,tocIndex:26},{value:" declarations, consumable by any tool that scans or indexes CSS variables",paraId:41,tocIndex:26},{value:"CSS custom data",paraId:41,tocIndex:26},{value:"@oceanbase/design/tokens/ob-css-vars.css-data.json",paraId:41,tocIndex:26},{value:"VS Code custom data (schema v1.1) for ",paraId:41,tocIndex:26},{value:"css.customData",paraId:41,tocIndex:26},{value:" and its ecosystem",paraId:41,tocIndex:26},{value:"Each tool is only a consumer of these artifacts \u2014 point it at the one it understands, no regeneration needed.",paraId:42,tocIndex:26},{value:"ob-design setup",paraId:43,tocIndex:27},{value:" writes the VS Code-family config, and the file is meant to be committed so the whole team gets hints after ",paraId:43,tocIndex:27},{value:"git clone",paraId:43,tocIndex:27},{value:". Cursor reads ",paraId:43,tocIndex:27},{value:".vscode/",paraId:43,tocIndex:27},{value:" too.",paraId:43,tocIndex:27},{value:`ob-design setup                  # MCP + AGENTS.md + .vscode/settings.json (client: all)
ob-design setup --client vscode  # editor hints only
`,paraId:44,tocIndex:27},{value:"It merges ",paraId:45,tocIndex:27},{value:'"css.customData": ["node_modules/@oceanbase/design/tokens/ob-css-vars.css-data.json"]',paraId:45,tocIndex:27},{value:" into ",paraId:45,tocIndex:27},{value:".vscode/settings.json",paraId:45,tocIndex:27},{value:" without touching your other keys. If ",paraId:45,tocIndex:27},{value:"@oceanbase/design",paraId:45,tocIndex:27},{value:" is not installed yet, or the file already contains comments (JSONC), setup skips it and prints the entry to add by hand.",paraId:45,tocIndex:27},{value:"It also adds an ",paraId:46,tocIndex:27},{value:"optional",paraId:46,tocIndex:27},{value:" ",paraId:46,tocIndex:27},{value:"vunguyentuan.vscode-css-variables",paraId:46,tocIndex:27},{value:" entry to ",paraId:46,tocIndex:27},{value:".vscode/extensions.json",paraId:46,tocIndex:27},{value:" \u2014 that family of extensions is what completes ",paraId:46,tocIndex:27},{value:"var()",paraId:46,tocIndex:27},{value:" arguments. This is a prompt, not a dependency: VS Code only asks whether to install it, and you can delete the entry or replace it with another workspace-scanning tool. A commented (JSONC) ",paraId:46,tocIndex:27},{value:"extensions.json",paraId:46,tocIndex:27},{value:" is skipped the same way.",paraId:46,tocIndex:27},{value:"Setup",paraId:47,tocIndex:28},{value:"How to wire it",paraId:47,tocIndex:28},{value:"VS Code / Cursor ",paraId:47,tocIndex:28},{value:"css.customData",paraId:47,tocIndex:28},{value:"Written by ",paraId:47,tocIndex:28},{value:"ob-design setup",paraId:47,tocIndex:28},{value:", or add the JSON path by hand. Applies to CSS, SCSS and Less documents; enhances property names and hover on ",paraId:47,tocIndex:28},{value:"--ob-*",paraId:47,tocIndex:28},{value:" declarations",paraId:47,tocIndex:28},{value:"Workspace-scanning CSS variable extensions (e.g. CSS Variable Autocomplete)",paraId:47,tocIndex:28},{value:"Recommended by ",paraId:47,tocIndex:28},{value:"ob-design setup",paraId:47,tocIndex:28},{value:" in ",paraId:47,tocIndex:28},{value:".vscode/extensions.json",paraId:47,tocIndex:28},{value:" (optional, safe to remove). Point ",paraId:47,tocIndex:28},{value:"cssVariables.themeFiles",paraId:47,tocIndex:28},{value:" at the packaged ",paraId:47,tocIndex:28},{value:"ob-css-vars.reference.css",paraId:47,tocIndex:28},{value:", or drop the file into your project. Whether a given tool indexes ",paraId:47,tocIndex:28},{value:"node_modules",paraId:47,tocIndex:28},{value:" differs, so verify it in your tool",paraId:47,tocIndex:28},{value:"WebStorm / IntelliJ",paraId:47,tocIndex:28},{value:"Put reference.css inside the project and confirm that ",paraId:47,tocIndex:28},{value:":root",paraId:47,tocIndex:28},{value:" declarations are picked up \u2014 the IDE does not index ",paraId:47,tocIndex:28},{value:"node_modules",paraId:47,tocIndex:28},{value:" by default",paraId:47,tocIndex:28},{value:"React inline ",paraId:47,tocIndex:28},{value:"style={{}}",paraId:47,tocIndex:28},{value:"Plain strings have no CSS semantics and cannot be completed; prefer ",paraId:47,tocIndex:28},{value:"obToken",paraId:47,tocIndex:28},{value:", which is typed",paraId:47,tocIndex:28},{value:"The built-in language service completes ",paraId:48,tocIndex:29},{value:"var()",paraId:48,tocIndex:29},{value:" arguments only from ",paraId:48,tocIndex:29},{value:"--x:",paraId:48,tocIndex:29},{value:" declarations in the ",paraId:48,tocIndex:29},{value:"same document",paraId:48,tocIndex:29},{value:": it does not scan the workspace and does not merge variables from ",paraId:48,tocIndex:29},{value:"@import",paraId:48,tocIndex:29},{value:"ed files (Sass/Less variable navigation is likewise same-file). So a package cannot make ",paraId:48,tocIndex:29},{value:"var(--ob-*)",paraId:48,tocIndex:29},{value:" complete on its own \u2014 set up ",paraId:48,tocIndex:29},{value:"css.customData",paraId:48,tocIndex:29},{value:" for property names and hover, and a workspace-scanning extension for ",paraId:48,tocIndex:29},{value:"var()",paraId:48,tocIndex:29},{value:" arguments.",paraId:48,tocIndex:29},{value:"For a guarantee that needs no editor config at all, validate in CI. ",paraId:49,tocIndex:29},{value:"ob-design lint",paraId:49,tocIndex:29},{value:" reports unknown ",paraId:49,tocIndex:29},{value:"var(--ob-*)",paraId:49,tocIndex:29},{value:" names, ",paraId:49,tocIndex:29},{value:"--ob-padding-*",paraId:49,tocIndex:29},{value:" misuse and antd variables in ",paraId:49,tocIndex:29},{value:".css",paraId:49,tocIndex:29},{value:"/",paraId:49,tocIndex:29},{value:".less",paraId:49,tocIndex:29},{value:"/",paraId:49,tocIndex:29},{value:".scss",paraId:49,tocIndex:29},{value:" plus inline strings such as ",paraId:49,tocIndex:29},{value:"<div style={{ color: 'var(--ob-x)' }} />",paraId:49,tocIndex:29},{value:", and suggests the correct token:",paraId:49,tocIndex:29},{value:`"scripts": { "lint:ob": "ob-design lint ./src" }
`,paraId:50,tocIndex:29},{value:"ob-design lint",paraId:51,tocIndex:29},{value:" accepts one target path, so call it once with your source root rather than from a per-file glob.",paraId:51,tocIndex:29},{value:"Suggestions cover documented variables only; deprecated compatibility variables are excluded. Artifacts are generated by ",paraId:52,tocIndex:29},{value:"pnpm run generate:ide-tokens",paraId:52,tocIndex:29},{value:" and kept in sync by a test.",paraId:52,tocIndex:29}]}}]);
