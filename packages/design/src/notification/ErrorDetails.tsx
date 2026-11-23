import React, { useContext, useMemo, useState } from 'react';
import { useTimeout } from 'ahooks';
import copy from 'copy-to-clipboard';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import { message } from '../static-function';
import type { ErrorDetailItem } from './interface';

export interface ErrorDetailsProps {
  items: ErrorDetailItem[];
  prefixCls: string;
  /** Whether to show a divider between the details and the description above */
  withDivider?: boolean;
}

/** How long the copy action label (e.g. "Copied") stays before reverting to "Copy" */
const COPIED_RESET_DELAY = 2000;

const formatMarkdown = (items: ErrorDetailItem[]) =>
  items.map(item => `- ${item.label}: ${item.value}`).join('\n');

const ErrorDetails: React.FC<ErrorDetailsProps> = ({ items, prefixCls, withDivider }) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const { locale } = useContext(ConfigProvider.ConfigContext);
  const notificationLocale = locale?.Notification;

  // Revert the copy feedback after a short delay so the action can be triggered again
  useTimeout(() => setCopied(false), copied ? COPIED_RESET_DELAY : undefined);

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
    // `navigator.clipboard` only works in secure contexts, while `copy-to-clipboard`
    // falls back to `execCommand` and also works on plain HTTP pages
    if (copy(formatMarkdown(copyableItems))) {
      // Successful copies are acknowledged by the action label instead of a success message
      setCopied(true);
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
        className={classNames(`${prefixCls}-error-details-action`, {
          [`${prefixCls}-error-details-action-copied`]: copied,
        })}
        role="button"
        aria-disabled={copied || undefined}
        tabIndex={copied ? -1 : 0}
        onClick={copied ? undefined : handleCopy}
        onKeyDown={
          copied
            ? undefined
            : e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCopy();
                }
              }
        }
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
        // Collapsed: keep the action buttons on the same row as the first detail line
        <div className={`${prefixCls}-error-details-collapsed-row`}>
          <span className={`${prefixCls}-error-details-collapsed`}>{firstLine}</span>
          {actions}
        </div>
      )}
    </div>
  );
};

export default ErrorDetails;
