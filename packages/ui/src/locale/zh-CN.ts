import zhCN from '@oceanbase/design/es/locale/zh-CN';
import BasicLayout from '../BasicLayout/locale/zh-CN';
import BatchOperationBar from '../BatchOperationBar/locale/zh-CN';
import Dialog from '../Dialog/locale/zh-CN';
import DocDialog from '../DocDialog/locale/zh-CN';
import FullscreenBox from '../FullscreenBox/locale/zh-CN';
import GraphToolbar from '../GraphToolbar/locale/zh-CN';
import Highlight from '../Highlight/locale/zh-CN';
import Login from '../Login/locale/zh-CN';
import PageContainer from '../PageContainer/locale/zh-CN';
import { default as Boundary, default as Password } from '../Password/locale/zh-CN';
import Ranger from '../Ranger/locale/zh-CN';
import SideTip from '../SideTip/locale/zh-CN';
import TaskGraph from '../TaskGraph/locale/zh-CN';
import Welcome from '../Welcome/locale/zh-CN';
import type { Locale } from './index';

export default {
  ...zhCN,
  // 业务组件
  BasicLayout,
  PageContainer,
  Login,
  Welcome,
  GraphToolbar,
  TaskGraph,
  Ranger,
  Password,
  Boundary,
  Dialog,
  SideTip,
  DocDialog,
  Highlight,
  FullscreenBox,
  BatchOperationBar,
} as Locale;
