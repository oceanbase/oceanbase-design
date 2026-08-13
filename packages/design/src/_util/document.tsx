import React from 'react';
import { Space, Divider, Tooltip } from 'antd';

export type DocumentType = string | React.MouseEventHandler<HTMLAnchorElement> | React.ReactNode;

export const DocumentIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_61186_2038)">
        <path
          d="M7.99992 4.66667C7.99992 3.95942 7.71897 3.28115 7.21887 2.78105C6.71877 2.28095 6.0405 2 5.33325 2H1.33325V12H5.99992C6.53035 12 7.03906 12.2107 7.41413 12.5858C7.78921 12.9609 7.99992 13.4696 7.99992 14M7.99992 4.66667V14M7.99992 4.66667C7.99992 3.95942 8.28087 3.28115 8.78097 2.78105C9.28106 2.28095 9.95934 2 10.6666 2H14.6666V12H9.99992C9.46949 12 8.96078 12.2107 8.5857 12.5858C8.21063 12.9609 7.99992 13.4696 7.99992 14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_61186_2038">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export interface DocumentProps {
  document: DocumentType;
  prefixCls: string;
  viewDocument?: string;
}

export const Document: React.FC<DocumentProps> = ({ document, prefixCls, viewDocument }) => {
  if (!document) {
    return null;
  }

  const documentLink = typeof document === 'string' ? document : undefined;
  const documentClick = typeof document === 'function' ? document : undefined;

  return (
    <Space size="small">
      <Divider type="vertical" className={`${prefixCls}-document-divider`} />
      <Tooltip title={viewDocument}>
        <a
          href={documentLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={documentClick}
          className={`${prefixCls}-document-icon`}
        >
          {documentLink || documentClick ? (
            <DocumentIcon className={`${prefixCls}-document-default-icon`} />
          ) : (
            (document as React.ReactNode)
          )}
        </a>
      </Tooltip>
    </Space>
  );
};
