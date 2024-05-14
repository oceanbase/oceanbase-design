import enUS from 'antd/es/locale/en_US';
import type { Locale } from '.';

export default {
  ...enUS,
  global: {
    ...enUS.global,
    inputPlaceholder: 'Please enter',
  },
  Pagination: {
    ...enUS.Pagination,
    total: '${total} in Total',
  },
  Drawer: {
    okText: 'OK',
    cancelText: 'Cancel',
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
