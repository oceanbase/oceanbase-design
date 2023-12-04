import React, { useState } from 'react';
import { Button, Radio } from '@oceanbase/design';
import { Boundary } from '@oceanbase/ui';

const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <div>
      <Button danger onClick={onClick}>
        Click me to throw a error
      </Button>
    </div>
  );
};

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
      showError:
      <Radio.Group onChange={onErrorChange} value={showError}>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
      <br />
      hasButton:
      <Radio.Group onChange={onButtonChange} value={hasButton}>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
      <Boundary.Exception showError={showError} hasButton={hasButton}>
        <ThrowError />
      </Boundary.Exception>
    </div>
  );
};
