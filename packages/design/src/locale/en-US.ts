import enUS from 'antd/es/locale/en_US';
import type { Locale } from '.';

export default {
  ...enUS,
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
  Drawer: {
    okText: 'OK',
    cancelText: 'Cancel',
  },
} as Locale;
