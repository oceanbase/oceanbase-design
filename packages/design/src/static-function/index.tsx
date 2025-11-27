import React, { useContext } from 'react';
import {
  App,
  message as antMessage,
  Modal as AntModal,
  notification as antNotification,
} from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';
import formatToken from 'antd/lib/theme/util/alias';
import ConfigProvider from '../config-provider';
import useModalStyle from '../modal/style';
import theme from '../theme';
import defaultTheme from '../theme/default';

const { defaultAlgorithm, defaultSeed, useToken } = theme;

// set default token
const mapToken = {
  ...defaultAlgorithm(defaultSeed),
  ...defaultTheme.token,
  // need to override some Alias Token values
  override: {
    boxShadow: defaultTheme.token?.boxShadow,
    boxShadowSecondary: defaultTheme.token?.boxShadowSecondary,
    boxShadowTertiary: defaultTheme.token?.boxShadowTertiary,
  },
};
let token = formatToken(mapToken);

let message: MessageInstance & {
  useMessage: typeof antMessage.useMessage;
} = antMessage;
let notification: NotificationInstance & {
  useNotification: typeof antNotification.useNotification;
} = antNotification;
let modal: Omit<ModalStaticFunctions, 'warn'> & {
  useModal: typeof AntModal.useModal;
} = AntModal;

export default () => {
  // automatically inject useToken, avoid declaring it every time
  token = useToken().token;

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('modal');

  // register Modal style, ensure static function can also apply style
  useModalStyle(prefixCls);

  const staticFunction = App.useApp();
  // replace antd's static methods, support consuming ConfigProvider configuration
  message = {
    ...staticFunction.message,
    useMessage: antMessage.useMessage,
  };
  notification = {
    ...staticFunction.notification,
    useNotification: antNotification.useNotification,
  };
  modal = {
    ...staticFunction.modal,
    useModal: AntModal.useModal,
  };

  return null;
};

export { token, message, notification, modal };
