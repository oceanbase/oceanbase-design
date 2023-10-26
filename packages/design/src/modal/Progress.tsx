import React, { useContext } from 'react';
import { Progress as AntProgress } from 'antd';
import type { ModalProps } from 'antd/es/modal';
import type { ProgressProps } from 'antd/es/progress';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Modal from './Modal';
import { LoadingOutlined } from '@oceanbase/icons';

export interface ModalProgressProps extends ModalProps {
  loading?: boolean;
  progress?: ProgressProps;
  description?: React.ReactNode;
}

const Progress = ({
  prefixCls: customizePrefixCls,
  className,
  width = 567,
  maskClosable = false,
  loading,
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
        {loading ? (
          <LoadingOutlined className={`${prefixCls}-progress-loading`} />
        ) : (
          <AntProgress type="circle" size={200} {...progress} />
        )}
        {description && <div className={`${prefixCls}-progress-description`}>{description}</div>}
      </>
    </Modal>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Modal.displayName = 'Modal.Progress';
}

export default Progress;
