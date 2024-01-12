import React from 'react';
import { Empty } from '@oceanbase/design';
import { GithubOutlined } from '@oceanbase/icons';
export default () => {
  return (
    <Empty
      image={<GithubOutlined style={{ fontSize: '100px' }} />}
      description="这是一段描述文字"
    />
  );
};
