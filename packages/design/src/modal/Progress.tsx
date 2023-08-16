import React, { useContext } from 'react';
import { Progress as AntProgress } from 'antd';
import type { ModalProps } from 'antd/es/modal';
import type { ProgressProps } from 'antd/es/progress';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Modal from './Modal';

export interface ModalProgressProps extends ModalProps {
  progress?: ProgressProps;
  description?: React.ReactNode;
}

const Progress = ({
  prefixCls: customizePrefixCls,
  className,
  width = 480,
  maskClosable = false,
  progress,
  description,
  footer = null,
  ...restProps
}: ModalProgressProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('modal', customizePrefixCls);
  const progressModalCls = classNames(`${prefixCls}-progress`, className);

  return (
    <Modal
      prefixCls={customizePrefixCls}
      className={progressModalCls}
      width={width}
      maskClosable={maskClosable}
      footer={footer}
      {...restProps}
    >
      <>
        <AntProgress type="circle" size={200} {...progress} />
        <div className={`${prefixCls}-description`}>{description}</div>
      </>
    </Modal>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Modal.displayName = 'Modal.Progress';
}

export default Progress;
