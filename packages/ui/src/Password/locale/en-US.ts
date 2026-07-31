import { CLOUD_PASSWORD_SPECIAL_CHARS_DISPLAY_SPACED } from '../Content';

export default {
  lengthRuleMessage: 'Should be 8 to 20 characters in length',
  charRuleMessage: `Can only contain letters, numbers, and special characters (${CLOUD_PASSWORD_SPECIAL_CHARS_DISPLAY_SPACED})`,
  strengthRuleMessage: 'Must include at least 3 of the following: uppercase',
  strengthRuleMessageLine2: 'letters, lowercase letters, numbers, special characters',
  placeholder: 'Please enter the password',
  generatePlaceholder: 'Enter or randomly generate',
  randomlyGenerate: 'Randomly generate',
  pleaseRememberYourPassword: 'Please remember and keep your password',
  copySuccessfully: 'Copied',
  copyPassword: 'Copy Password',
  passwordStrengthRules: 'Password strength rules',
  emptyMessage: 'Please enter your password',
  forbiddenCharsMessage: 'Cannot contain spaces, emojis, tab characters, or Chinese characters',
  genericFailMessage: 'The password does not meet the requirements. Please follow the rules',
  confirmMismatchMessage:
    'The password you entered here does not match the password you entered above',
};
