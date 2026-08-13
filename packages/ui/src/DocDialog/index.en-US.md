---
title: DocDialog
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/DocDialogDemo.tsx" title="Basic" description="Click Help button to open Dialog."></code>

## API

### Dialog

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| className | Component className | string |  | - |
| visible | Whether visible | boolean | false | - |
| title | Title | string | Help Document | - |
| defaultTop | Distance from top of screen | number | - | - |
| embedConfig | Embedded mode config | [IDialogConfig](doc-dialog#IDialogConfig) | {} | - |
| normalConfig | Normal mode config | [IDialogConfig](doc-dialog#IDialogConfig) | {} | - |
| onClose | Close button callback | () => void | - | - |
| setRootWidth | Set outer container width | (params: string) => void; | - | - |

### IDialogConfig

| Property | Description                      | Type             | Default | Version |
| :------- | :------------------------------- | :--------------- | :------ | :------ |
| min      | Min resize limit [width, height] | [number, number] | -       | -       |
| max      | Max resize limit [width, height] | [number, number] | -       | -       |
| width    | Default width                    | number           | 520     | -       |
| height   | Default height                   | number           | 600     | -       |
| left     | Default position                 | number           | -       | -       |
| top      | Default position                 | number           | -       | -       |
