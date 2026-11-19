import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { message } from '../static-function';
import type { ErrorDetailItem } from './interface';

export interface ErrorDetailsProps {
  items: ErrorDetailItem[];
  prefixCls: string;
  /** 与描述内容之间是否展示分割线 */
  withDivider?: boolean;
}

/** 复制成功后，操作文案（如「已复制」）恢复到「复制」的时长 */
const COPIED_RESET_DELAY = 2000;

const formatMarkdown = (items: ErrorDetailItem[]) =>
  items.map(item => `- ${item.label}: ${item.value}`).join('\n');

const ErrorDetails: React.FC<ErrorDetailsProps> = ({ items, prefixCls, withDivider }) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const copiedTimerRef = useRef<number>();
  const { locale } = useContext(ConfigProvider.ConfigContext);
  const notificationLocale = locale?.Notification;

  useEffect(() => {
    return () => {
      window.clearTimeout(copiedTimerRef.current);
    };
  }, []);

  const lines = useMemo(
    () =>
      items.map(item => (
        <span key={`${item.label}:${item.value}`} className={`${prefixCls}-error-details-line`}>
          {item.label}: {item.value}
        </span>
      )),
    [items, prefixCls]
  );

  const handleCopy = () => {
    const copyableItems = items.filter(item => item.copyable !== false);
    // `navigator.clipboard` 只在安全上下文可用，`copy-to-clipboard` 内部走 execCommand，
    // 在 HTTP 页面同样可以复制
    if (copy(formatMarkdown(copyableItems))) {
      // 复制成功直接通过操作文案反馈，不再额外弹出成功通知
      setCopied(true);
      window.clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = window.setTimeout(() => {
        setCopied(false);
      }, COPIED_RESET_DELAY);
      return;
    }
    message.error(notificationLocale?.copyFailed ?? 'Copy failed');
  };

  const showExpand = !expanded && items.length > 0;
  const firstLine = items[0] ? `${items[0].label}: ${items[0].value}` : '';
  const copiedLabel = notificationLocale?.copied ?? 'Copied';

  const actions = (
    <div className={`${prefixCls}-error-details-actions`}>
      {showExpand && (
        <span
          className={`${prefixCls}-error-details-action`}
          onClick={() => setExpanded(true)}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              setExpanded(true);
            }
          }}
        >
          {notificationLocale?.showMore ?? 'Show more'}
        </span>
      )}
      <span
        className={`${prefixCls}-error-details-action`}
        onClick={handleCopy}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleCopy();
          }
        }}
      >
        {copied ? copiedLabel : (notificationLocale?.copy ?? 'Copy')}
      </span>
    </div>
  );

  return (
    <div
      className={classNames(`${prefixCls}-error-details`, {
        [`${prefixCls}-error-details-with-divider`]: withDivider,
      })}
    >
      {expanded ? (
        <>
          <div className={`${prefixCls}-error-details-lines`}>{lines}</div>
          {actions}
        </>
      ) : (
        // 未展开时，操作按钮与折叠后的首行明细放在同一行
        <div className={`${prefixCls}-error-details-collapsed-row`}>
          <span className={`${prefixCls}-error-details-collapsed`}>{firstLine}</span>
          {actions}
        </div>
      )}
    </div>
  );
};

export default ErrorDetails;
