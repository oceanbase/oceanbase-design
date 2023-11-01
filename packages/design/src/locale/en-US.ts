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
  Input: {
    // ...enUS.Input,
    Password: {
      lengthRuleMessage: '8 to 32 characters',
      charRuleMessage:
        'Contains only letters, numbers and symbols including ~!@#%^&*_-+=|(){}[]:;,.?/`$"<>\\',
      strengthRuleMessage:
        'Containes at least 2 characters for each of uppercase letters, lowercase letters, numbers and symbols',
      placeholder: 'Please enter the password',
      generatePlaceholder: 'Enter or randomly generate',
      randomlyGenerate: 'Randomly generate',
      pleaseKeepYourPasswordIn: 'lease keep your password in mind.',
      copySuccessfully: 'Copied',
      copyPassword: ' copy password ',
      andKeepItProperly: 'and keep it properly',
    },
  },
} as Locale;
