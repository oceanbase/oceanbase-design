//@ts-nocheck
import { Button } from '@oceanbase/design';
import { useState } from 'react';
import LocaleWrapper from '../../locale/LocaleWrapper';
import zhCN from '../locale/zh-CN';

const Text = ({ locale }) => {
  const [textObject, setTextObject] = useState<any>(locale.normal);

  return (
    <div style={{ textAlign: 'center' }}>
      {textObject}
      <br />
      <Button type="primary" onClick={() => setTextObject({ key: '崩溃' })}>
        {locale.test}
      </Button>
    </div>
  );
};

export default LocaleWrapper({
  componentName: 'Boundary',
  defaultLocale: zhCN,
})(Text);
