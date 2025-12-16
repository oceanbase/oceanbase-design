import { Modal as AntModal } from 'antd';
import type { ModalFuncProps, ModalProps as AntModalProps } from 'antd/es/modal';
import {
  ExclamationCircleOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from '@oceanbase/icons';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import Space from '../space';
import { modal } from '../static-function';
import useStyle from './style';

export interface ModalProps extends AntModalProps {
  extra?: React.ReactNode;
}

const Modal = ({
  extra,
  footer,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}: ModalProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('modal', customizePrefixCls);
  const [wrapCSSVar] = useStyle(prefixCls);
  const modalCls = classNames(className);

  return wrapCSSVar(
    <AntModal
      destroyOnClose={true}
      // convert false to null to hide .ant-modal-footer dom
      // ref: https://github.com/ant-design/ant-design/blob/master/components/modal/Modal.tsx#L105
      footer={
        footer === false
          ? null
          : extra
            ? originNode => (
                <div className={`${prefixCls}-footer-content`}>
                  <div className={`${prefixCls}-footer-extra`}>{extra}</div>
                  <Space>{originNode}</Space>
                </div>
              )
            : footer
      }
      prefixCls={customizePrefixCls}
      className={modalCls}
      {...restProps}
    />
  );
};

// 替换 Modal 上的静态方法，支持消费 ConfigProvider 配置
// 注意: 不能使用 Modal.info = modal.info 进行属性赋值，需要新建函数赋值，否则仍然无法消费 ConfigProvider 配置
Modal.info = (props: ModalFuncProps) =>
  modal.info({
    // use outlined icon
    icon: <InfoCircleOutlined />,
    ...props,
  });
Modal.success = (props: ModalFuncProps) =>
  modal.success({
    icon: <CheckCircleOutlined />,
    ...props,
  });
Modal.error = (props: ModalFuncProps) =>
  modal.error({
    icon: <CloseCircleOutlined />,
    ...props,
  });
Modal.warning = (props: ModalFuncProps) =>
  modal.warning({
    icon: <ExclamationCircleOutlined />,
    ...props,
  });
Modal.warn = (props: ModalFuncProps) =>
  modal.warning({
    icon: <ExclamationCircleOutlined />,
    ...props,
  });
Modal.confirm = (props: ModalFuncProps) =>
  modal.confirm({
    icon: <ExclamationCircleOutlined />,
    ...props,
  });
Modal.useModal = AntModal.useModal;
Modal.destroyAll = AntModal.destroyAll;
Modal.config = AntModal.config;

Modal._InternalPanelDoNotUseOrYouWillBeFired = AntModal._InternalPanelDoNotUseOrYouWillBeFired;

if (process.env.NODE_ENV !== 'production') {
  Modal.displayName = AntModal.displayName;
}

export default Modal;
