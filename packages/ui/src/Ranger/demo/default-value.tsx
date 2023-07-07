import { Ranger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => (
  <Ranger
    defaultValue={[dayjs('2019/05/20'), dayjs('2019/06/20')]}
    selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
  />
);
