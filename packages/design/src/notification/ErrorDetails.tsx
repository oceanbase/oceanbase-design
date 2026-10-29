import React, { useContext, useMemo, useState } from 'react';
import copy from 'copy-to-clipboard';
import ConfigProvider from '../config-provider';
import { message } from '../static-function';
import type { ErrorDetailItem } from './interface';

export interface ErrorDetailsProps {
  items: ErrorDetailItem[];
  prefixCls: string;
}

const formatMarkdown = (items: ErrorDetailItem[]) =>
  items.map(item => `- ${item.label}: ${item.value}`).join('\n');

const ErrorDetails: React.FC<ErrorDetailsProps> = ({ items, prefixCls }) => {
  const [expanded, setExpanded] = useState(false);
  const { locale } = useContext(ConfigProvider.ConfigContext);
  const notificationLocale = locale?.Notification;

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
      message.success(notificationLocale?.copied ?? 'Copied');
      return;
    }
    message.error(notificationLocale?.copyFailed ?? 'Copy failed');
  };

  const showExpand = !expanded && items.length > 0;
  const firstLine = items[0] ? `${items[0].label}: ${items[0].value}` : '';

  return (
    <div className={`${prefixCls}-error-details`}>
      {expanded ? lines : <div className={`${prefixCls}-error-details-collapsed`}>{firstLine}</div>}
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
          {notificationLocale?.copy ?? 'Copy'}
        </span>
      </div>
    </div>
  );
};

export default ErrorDetails;
