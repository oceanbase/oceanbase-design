---
title: Dialog
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/DialogDemo.tsx" title="Basic" description="Click Help button to open Dialog."></code>
<code src="./demo/EmbdedDialogDemo.tsx" title="Embedded" description="Click Help button to open embedded Dialog."></code>
<code src="./demo/EmbdedDialogAndNormalDemo.tsx" title="Dynamic switch" description="Click Help button to switch between embedded and normal Dialog."></code>

## API

### Dialog

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| className | Component className | string | - | - |
| visible | Whether visible | boolean | false | - |
| min | Min resize limit [width, height] | [number, number] | - | - |
| max | Max resize limit [width, height] | [number, number] | - | - |
| width | Default width | number | 520 | - |
| height | Default height | number | 600 | - |
| left | Default position | number | - | - |
| top | Default position | number | - | - |
| title | Title | string | Help Document | - |
| extLink | External link | [IDialogExtLink](dialog#IDialogExtLink) | - | - |
| onClose | Close button callback | () => void | - | - |
| clientWidth | Window width (required) | number | - | - |
| clientHeight | Window height (required) | number | - | - |
| resizable | Enable resize | boolean | true | - |
| draggable | Enable drag | boolean | true | - |
| enableMaximization | Enable maximize | boolean | true | - |
| setRootWidth | Set outer container width | (params: string) => void; | - | - |
| isEmbed | Enable embedded mode | boolean | false | - |

### IDialogExtLink

| Property | Description        | Type   | Default | Version |
| :------- | :----------------- | :----- | :------ | :------ |
| text     | External link text | string | ''      | -       |
| link     | External link URL  | string | ''      | -       |
