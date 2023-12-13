import { DownOutlined, UpOutlined } from '@oceanbase/icons';
import { Space } from '@oceanbase/design';
import classnames from 'classnames';
import { cloneDeep, isEmpty, isEqual, pullAllWith } from 'lodash';
import type { ReactNode } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import './index.less';
import zhCN from './locale/zh-CN';

export interface AlertRenderParams {
  selectedRows: any[];
  setSelectedRows: (selectedRows: any[]) => void;
  cleanSelectedRows: (cleanSelectdRows?: any[]) => void;
}

export type RenderFun = ((props: AlertRenderParams) => ReactNode) | false;
export type Vertical = 'top' | 'bottom';
export type Horizontal = 'left' | 'right';

export interface BatchOperationBarProps extends LocaleWrapperProps {
  width?: number | string;
  title?: ReactNode;
  selectedRows?: any[];
  open?: boolean;
  alertRender?: ((selectedRows: any[]) => ReactNode | JSX.Element) | false;
  alertOptionRender?: RenderFun;
  content?: ReactNode | RenderFun;
  cancelText?: ReactNode;
  openText?: ReactNode;
  openIcon?: ReactNode;
  hiddenText?: ReactNode;
  hiddenIcon?: ReactNode;
  showCancelBtn?: boolean;
  showOpenBtn?: boolean;
  className?: string;
  position?: [Vertical, Horizontal];
  barStyle?: React.CSSProperties;
}

const prefix = 'ob-batch-operation-bar';

const BatchOperationBar = (props: BatchOperationBarProps) => {
  const locale = props?.locale;
  const {
    title,
    open = false,
    width,
    alertOptionRender,
    selectedRows = [],
    content,
    alertRender,
    className = '',
    cancelText = locale?.cancelText,
    openText = locale?.openText,
    openIcon = <DownOutlined />,
    hiddenText = locale?.hiddenText,
    hiddenIcon = <UpOutlined />,
    showCancelBtn = true,
    showOpenBtn = true,
    position = ['bottom', 'right'],
    barStyle = {},
  } = props;
  const [selectedData, setSelectedData] = useState<any[]>(selectedRows);
  const [isOpen, setIsOpen] = useState(!!open);

  const style = useMemo(() => {
    const obj: any = {};
    if (width || width === 0) obj.width = width;
    if (!isEmpty(position)) {
      if (!Array.isArray(position))
        throw new Error('The type passed in by position should be [Vertical, Horizontal]');
      obj[position?.[0]] = 0;
      obj[position?.[1]] = 0;
    }
    return {
      ...obj,
      ...barStyle,
    };
  }, [width, position]);

  const cleanSelectedRows = (cleanSelectdRows?: any[]) => {
    if (isEmpty(cleanSelectdRows)) {
      setSelectedData([]);
      return;
    }
    const currentData = cloneDeep(selectedData);
    pullAllWith(currentData, cleanSelectdRows, isEqual);
    setSelectedData(currentData);
  };

  const setSelectedRows = (rows: any[]) => {
    setSelectedData(rows);
  };

  const disPlayBtnRender = () => {
    if (!showOpenBtn) return null;
    return (
      <div
        className={classnames({
          [`${prefix}-open-btn`]: isOpen,
          [`${prefix}-close-btn`]: !isOpen,
          [`${prefix}-display-btn`]: true,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={classnames({
            [`${prefix}-display-text`]: true,
          })}
        >
          {isOpen ? hiddenText : openText}
        </span>
        {isOpen ? hiddenIcon : openIcon}
      </div>
    );
  };
  useEffect(() => {
    if (isEmpty(selectedRows) || !selectedRows) setSelectedData([]);
    else setSelectedData(selectedRows);
  }, [selectedRows]);

  return (
    <div
      className={classnames({
        [className]: !!className,
        [prefix]: true,
      })}
      style={style}
    >
      <div className={`${prefix}-header`}>
        <Space>
          {!!alertRender ? (
            alertRender?.(selectedData)
          ) : (
            <Space>
              {title && <span className={`${prefix}-title`}>{title}</span>}
              <span>{locale?.alertText?.replace?.(/\$\{\}/, selectedData?.length || 0)}</span>
            </Space>
          )}
          {!!showCancelBtn && (
            <span
              className={classnames({
                [`${prefix}-cancel`]: true,
              })}
              onClick={() => cleanSelectedRows()}
            >
              {cancelText}
            </span>
          )}
          {disPlayBtnRender()}
        </Space>
        {!!alertOptionRender && (
          <div>
            {alertOptionRender?.({
              selectedRows: selectedData,
              setSelectedRows,
              cleanSelectedRows,
            })}
          </div>
        )}
      </div>
      <div
        className={classnames({
          [`${prefix}-content`]: true,
          [`${prefix}-content-active`]: !!isOpen,
          [`${prefix}-content-hidden`]: !isOpen,
        })}
      >
        {typeof content === 'function'
          ? content?.({ selectedRows: selectedData, setSelectedRows, cleanSelectedRows })
          : content}
      </div>
    </div>
  );
};

export default LocaleWrapper({
  componentName: 'BatchOperationBar',
  defaultLocale: zhCN,
})(BatchOperationBar);
