import enUS from 'antd/es/locale/en_US';
import type { Locale } from '.';

export default {
  ...enUS,
  Drawer: {
    okText: 'OK',
    cancelText: 'Cancel',
  },
  Input: {
    placeholder: 'Please enter',
  },
  Table: {
    ...enUS.Table,
    batchOperationBar: {
      selected: 'Selected',
      object: 'Objects',
      cancel: 'Cancel',
      collapse: 'Collapse',
      open: 'Open',
    },
  },
} as Locale;
