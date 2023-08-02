import { directTo } from '@oceanbase/util';

export default () => {
  return {
    push: (path: string) => {
      directTo(path, false);
    },
  };
};
