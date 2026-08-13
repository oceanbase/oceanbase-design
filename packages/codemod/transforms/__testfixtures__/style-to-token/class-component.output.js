import React from 'react';
import { Alert, Button, obToken } from '@oceanbase/design';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Alert style={{ color: obToken.colorTextDefault, background: obToken.colorBgSecondary, backgroundColor: obToken.colorBgHoverSecondary, border: `1px solid ${obToken.colorBorderDefault}`, fontSize: obToken.fontSize325 }} />
        <Button style={{ color: obToken.colorTextLink, background: obToken.colorTextSuccess, backgroundColor: obToken.colorTextWarning, borderColor: obToken.colorTextError, fontSize: obToken.fontSize300 }}></Button>
      </div>
    );
  }
}

export default Demo;
