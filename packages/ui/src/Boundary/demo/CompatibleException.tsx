import React from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  return (
    <Boundary.Exception isNotCompatible={true}>
      <div>Compatibility fallback</div>
    </Boundary.Exception>
  );
};
