import { DateRanger } from '@oceanbase/ui';

export default () => {
  return (
    <DateRanger
      styles={{ pickerPanel: { width: '430px' } }}
      tip={<div>通过定制右侧 Panel 的样式，让文字能在一行内展示完全</div>}
    />
  );
};
