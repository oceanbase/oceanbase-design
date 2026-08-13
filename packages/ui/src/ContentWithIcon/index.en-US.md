---
title: ContentWithIcon
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic" description="Icon is after text by default; no need to pass suffixIcon if using default icon."></code>
<code src="./demo/prefix.tsx" title="Icon before text" description="Set suffixIcon to null and pass true to prefixIcon for default icon."></code>
<code src="./demo/tipWithLink.tsx" title="Tip with link" description="Uses tooltip by default; omit tooltipWithLink if not needed."></code>
<code src="./demo/customIcon.tsx" title="Info type tip" description="Set textHidden to false for inline display; default true hides text. Only for iconType info, supports custom icon color."></code>
<code src="./demo/exclamation.tsx" title="Exclamation type tip" description="Exclamation type supports custom icon color."></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| content | Text content | String | - | - |
| tooltip | Tooltip config | TooltipProps | - | - |
| prefixIcon | Icon config before text | IconProps | null | - |
| suffixIcon | Icon config after text | IconProps | { type: 'question-circle', spin: false, pointable: true, style: { marginRight: 4 } } | - |
| tooltipWithLink | Tip text with link | PopoverProps | false | - |
| textHidden | Tip text display mode | Boolean | true | - |
| size | Text and icon size | Number | 14 | - |
| infoColor | Info icon color | String | 333333 | - |
| exclamationColor | Exclamation icon color | String | FAAD14 | - |
| className | Component className | String | - | - |
| style | Component style | React.CSSProperties | - | - |
