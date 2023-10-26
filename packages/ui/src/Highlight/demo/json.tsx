/**
 * title: JSON 格式
 */
import React from 'react';
import { Highlight } from '@oceanbase/ui';

export default () => (
  <Highlight
    language="json"
    onCopyChange={value => {
      console.log('value', value);
    }}
  >
    {{
      name: 'OceanBase Design',
      description: 'The Design System of OceanBase',
      versions: ['1.0.0', '2.0.0', '2.5.1'],
    }}
  </Highlight>
);
