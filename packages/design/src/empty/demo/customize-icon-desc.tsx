import React from 'react';
import { Empty } from '@oceanbase/design';
import { GithubOutlined } from '@oceanbase/icons';
export default () => {
  return <Empty size="small" image={<GithubOutlined />} description="这是一段描述文字" />;
};
