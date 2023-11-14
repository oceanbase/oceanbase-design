import { QuestionCircleOutlined } from '@oceanbase/icons';
import { ConfigProvider, Space, Tooltip } from '@oceanbase/design';
import classNames from 'classnames';
import React, { useContext, isValidElement } from 'react';
import { getPrefix } from '../_util';
import useStyle from './style';

export interface ContentWithQuestionProps {
  content?: React.ReactNode;
  tooltip?: any;
  prefixIcon?: React.ReactNode | boolean;
  suffixIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.SyntheticEvent) => void;
}

const prefix = getPrefix('content-with-question');

const ContentWithQuestion: React.FC<ContentWithQuestionProps> = ({
  prefixCls: customizePrefixCls,
  content,
  tooltip,
  prefixIcon = null,
  suffixIcon = <QuestionCircleOutlined className={`${prefix}-help`} />,
  className,
  children,
  ...restProps
}: any) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('content-with-question', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  // FIXME: antd 已经废弃 icon type 的用法，该组件也需要做相应处理，后面将会是传入 Icon 的形式而非 type
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
      // eslint-disable-next-line react/no-unknown-property
      prefixCls={customizePrefixCls}
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
