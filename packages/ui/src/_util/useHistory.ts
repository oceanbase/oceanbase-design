import {
  // react-router-dom v5
  // @ts-ignore
  useHistory,
  // react-router-dom v6
  // @ts-ignore
  useNavigate,
} from 'react-router-dom';
import { directTo } from '@oceanbase/util';

export default () => {
  return {
    push: useHistory
      ? useHistory().push
      : useNavigate
      ? useNavigate()
      : (path: string) => {
          directTo(path, false);
        },
  };
};
