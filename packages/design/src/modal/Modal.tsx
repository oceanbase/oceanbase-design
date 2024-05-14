import { Modal as AntModal } from 'antd';
import type { ModalProps } from 'antd/es/modal';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import { modal } from '../static-function';
import useStyle from './style';

const Modal = ({ footer, prefixCls: customizePrefixCls, className, ...restProps }: ModalProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('modal', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const modalCls = classNames(className);

  return wrapSSR(
    <AntModal
      destroyOnClose={true}
      // convert false to null to hide .ant-modal-footer dom
      // ref: https://github.com/ant-design/ant-design/blob/master/components/modal/Modal.tsx#L105
      footer={footer === false ? null : footer}
      prefixCls={customizePrefixCls}
      className={modalCls}
      {...restProps}
    />
  );
};

// 替换 Modal 上的静态方法，支持消费 ConfigProvider 配置
// 注意: 不能使用 Modal.info = modal.info 进行属性赋值，需要新建函数赋值，否则仍然无法消费 ConfigProvider 配置
Modal.info = props => modal.info(props);
Modal.success = props => modal.success(props);
Modal.error = props => modal.error(props);
Modal.warning = props => modal.warning(props);
Modal.warn = props => modal.warning(props);
Modal.confirm = props => modal.confirm(props);

Modal.useModal = AntModal.useModal;
Modal.destroyAll = AntModal.destroyAll;
Modal.config = AntModal.config;

Modal._InternalPanelDoNotUseOrYouWillBeFired = AntModal._InternalPanelDoNotUseOrYouWillBeFired;

if (process.env.NODE_ENV !== 'production') {
  Modal.displayName = AntModal.displayName;
}

export default Modal;
