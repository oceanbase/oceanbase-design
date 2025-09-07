import React from 'react';
import { Alert, Button, token } from '@oceanbase/design';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Alert style={{ color: token.colorText, background: token.colorTextSecondary, backgroundColor: token.colorTextTertiary, border: `1px solid ${token.colorBorder}`, fontSize: token.fontSize }} />
        <Button style={{ color: token.colorInfo, background: token.colorSuccess, backgroundColor: token.colorWarning, borderColor: token.colorError, fontSize: token.fontSizeSM }}></Button>
      </div>
    );
  }
}

export default Demo;
