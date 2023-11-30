import { QuestionCircleOutlined } from '@oceanbase/icons';
import { ConfigProvider, Space, Tooltip, TooltipProps } from '@oceanbase/design';
import classNames from 'classnames';
import React, { useContext, isValidElement } from 'react';
import useStyle from './style';

export interface ContentWithQuestionProps {
  content?: React.ReactNode;
  tooltip?: TooltipProps;
  prefixIcon?: React.ReactNode | boolean;
  suffixIcon?: React.ReactNode | boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.SyntheticEvent) => void;
}

const ContentWithQuestion: React.FC<ContentWithQuestionProps> = ({
  prefixCls: customizePrefixCls,
  content,
  tooltip,
  prefixIcon = null,
  suffixIcon = true,
  className,
  children,
  ...restProps
}: any) => {
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
    <span
      className={classNames({
        [`${prefixCls}-item`]: true,
        [className]: !!className,
      })}
      {...restProps}
    >
      <Space>
        {getIcon(
          prefixIcon === true ? (
            <QuestionCircleOutlined
              className={`${prefixCls}-help`}
              style={{
                marginRight: 4,
              }}
            />
          ) : (
            prefixIcon
          )
        )}
        <span data-testid="content">{content ?? children}</span>
        {getIcon(suffixIcon)}
      </Space>
    </span>
  );
};

export default ContentWithQuestion;
