import antdZhTW from 'antd/es/locale/zh_TW';
import BasicLayout from '../BasicLayout/locale/zh-TW';
import BatchOperationBar from '../BatchOperationBar/locale/zh-TW';
import Dialog from '../Dialog/locale/zh-TW';
import DocDialog from '../DocDialog/locale/zh-TW';
import GraphToolbar from '../GraphToolbar/locale/zh-TW';
import Login from '../Login/locale/zh-TW';
import PageContainer from '../PageContainer/locale/zh-TW';
import { default as Boundary, default as Password } from '../Password/locale/zh-TW';
import Ranger from '../Ranger/locale/zh-TW';
import TaskGraph from '../TaskGraph/locale/zh-TW';
import Welcome from '../Welcome/locale/zh-TW';
import type { Locale } from './index';

export default {
  ...antdZhTW,
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
  DocDialog,
  BatchOperationBar,
} as Locale;
