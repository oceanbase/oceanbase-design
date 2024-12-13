import { QuestionCircleOutlined } from '@oceanbase/icons';
import { ConfigProvider, Space, Tooltip } from '@oceanbase/design';
import type { TooltipProps } from '@oceanbase/design';
import classNames from 'classnames';
import React, { useContext, isValidElement } from 'react';
import useStyle from './style';

export interface ContentWithQuestionProps
  extends Omit<React.HTMLProps<HTMLSpanElement>, 'content'> {
  content?: React.ReactNode;
  tooltip?: TooltipProps;
  prefixIcon?: React.ReactNode | boolean;
  suffixIcon?: React.ReactNode | boolean;
  prefixCls?: string;
}

const ContentWithQuestion: React.FC<ContentWithQuestionProps> = ({
  content,
  tooltip,
  prefixIcon = null,
  suffixIcon = true,
  prefixCls: customizePrefixCls,
  className,
  children,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('content-with-question', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const getIcon = (iconConfig: React.ReactNode) => {
    return iconConfig ? (
      <Tooltip {...tooltip}>
        {isValidElement(iconConfig) ? (
          iconConfig
        ) : (
          <QuestionCircleOutlined className={`${prefixCls}-help`} />
        )}
      </Tooltip>
    ) : null;
  };

  return wrapSSR(
    <span className={classNames(`${prefixCls}-item`, className)} {...restProps}>
      <Space>
        {getIcon(prefixIcon)}
        <span data-testid="content">{content ?? children}</span>
        {getIcon(suffixIcon)}
      </Space>
    </span>
  );
};

export default ContentWithQuestion;
