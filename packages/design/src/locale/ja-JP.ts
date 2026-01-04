import jaJP from 'antd/es/locale/ja_JP';
import type { Locale } from '.';

export default {
  ...jaJP,
  global: {
    ...jaJP.global,
    inputPlaceholder: '入力してください',
    viewDocument: 'ドキュメントを見る',
  },
  Pagination: {
    ...jaJP.Pagination,
    total: '合計 ${total} 件',
  },
  Drawer: {
    okText: 'OK',
    cancelText: 'キャンセル',
  },
  Table: {
    ...jaJP.Table,
    batchOperationBar: {
      selected: '選択中',
      object: '件',
      cancel: 'キャンセル',
      collapse: '折りたたむ',
      open: '展開',
    },
  },
  Filter: {
    pleaseSelect: '選択してください',
    open: '開く',
    filters: 'フィルター',
  },
} as Locale;
