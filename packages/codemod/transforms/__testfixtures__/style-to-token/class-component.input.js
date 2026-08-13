import React from 'react';
import { Alert, Button } from '@oceanbase/design';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Alert style={{ color: 'rgba(0, 0, 0, 0.85)', background: 'rgba(0, 0, 0,0.65)', backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid #d9d9d9', fontSize: 14 }} />
        <Button style={{ color: '#1890ff', background: '#52c41a', backgroundColor: '#faad14', borderColor: '#ff4D4F', fontSize: '12px' }}></Button>
      </div>
    );
  }
}

export default Demo;
