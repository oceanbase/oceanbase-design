import enUS from '@oceanbase/design/locale/en-US';
import BasicLayout from '../BasicLayout/locale/en-US';
import BatchOperationBar from '../BatchOperationBar/locale/en-US';
import Boundary from '../Boundary/locale/en-US';
import Dialog from '../Dialog/locale/en-US';
import DocDialog from '../DocDialog/locale/en-US';
import FullscreenBox from '../FullscreenBox/locale/en-US';
import GraphToolbar from '../GraphToolbar/locale/en-US';
import Login from '../Login/locale/en-US';
import PageContainer from '../PageContainer/locale/en-US';
import Ranger from '../Ranger/locale/en-US';
import SideTip from '../SideTip/locale/en-US';
import TaskGraph from '../TaskGraph/locale/en-US';
import Welcome from '../Welcome/locale/en-US';
import type { Locale } from './index';

export default {
  ...enUS,
  // 业务组件
  BasicLayout,
  PageContainer,
  Login,
  Welcome,
  GraphToolbar,
  TaskGraph,
  Ranger,
  Boundary,
  Dialog,
  SideTip,
  DocDialog,
  FullscreenBox,
  BatchOperationBar,
} as Locale;
