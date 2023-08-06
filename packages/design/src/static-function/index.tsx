import React from 'react';
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
import theme from '../theme';
import defaultThemeToken from '../theme/default';

const { defaultAlgorithm, defaultSeed, useToken } = theme;

// 设置默认 token
const mapToken = {
  ...defaultAlgorithm(defaultSeed),
  ...defaultThemeToken,
  override: {},
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
  // 自动注入 useToken，避免每次使用都要声明一遍，比较繁琐
  token = useToken().token;

  const staticFunction = App.useApp();
  // 替换 antd 的静态方法，支持消费 ConfigProvider 配置
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
