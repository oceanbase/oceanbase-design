import zhTW from 'antd/es/locale/zh_TW';
import type { Locale } from '.';

export default {
  ...zhTW,
  Drawer: {
    okText: '确定',
    cancelText: '取消',
  },
  Input: {
    placeholder: '請輸入',
  },
  Table: {
    ...zhTW.Table,
    batchOperationBar: {
      selected: '已選',
      object: '個對象',
      cancel: '取消',
      collapse: '收起',
      open: '展開',
    },
  },
} as Locale;
