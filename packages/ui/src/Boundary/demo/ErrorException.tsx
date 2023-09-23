import React, { useState } from 'react';
import { Radio } from '@oceanbase/design';
import { Boundary } from '@oceanbase/ui';
import Text from './Text';

export default () => {
  const [showError, setShowError] = useState(false);
  const [hasButton, setHasButton] = useState(true);
  const onErrorChange = e => {
    setShowError(e.target.value);
  };
  const onButtonChange = e => {
    setHasButton(e.target.value);
  };

  return (
    <div>
      showError: (默认：false){' '}
      <Radio.Group onChange={onErrorChange} value={showError}>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
      <br />
      hasButton : (默认：true){' '}
      <Radio.Group onChange={onButtonChange} value={hasButton}>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
      <Boundary.Exception showError={showError} hasButton={hasButton}>
        <Text locale={undefined} />
      </Boundary.Exception>
    </div>
  );
};
