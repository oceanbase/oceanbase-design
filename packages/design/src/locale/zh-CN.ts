import zhCN from 'antd/es/locale/zh_CN';
import type { Locale } from '.';

export default {
  ...zhCN,
  Table: {
    ...zhCN.Table,
    batchOperationBar: {
      selected: '已选',
      object: '个对象',
      cancel: '取消',
      collapse: '收起',
      open: '展开',
    },
  },
  Drawer: {
    okText: '确定',
    cancelText: '取消',
  },
} as Locale;
