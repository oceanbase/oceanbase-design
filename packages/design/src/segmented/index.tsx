import React, { useCallback, useContext } from 'react';
import { Segmented as AntSegmented, Flex } from 'antd';
import type {
  SegmentedProps as AntSegmentedProps,
  SegmentedLabeledOption as AntSegmentedLabeledOption,
} from 'antd/es/segmented';
import type { EllipsisConfig } from '../typography';
import type { BadgeProps } from '../badge';
import type { SegmentedRawOption } from 'rc-segmented';
import ConfigProvider from '../config-provider';
import Typography from '../typography';
import Badge from '../badge';
import useStyle from './style';

export * from 'antd/es/segmented';

type BadgeType = BadgeProps | BadgeProps['count'];

export type SegmentedLabeledOption = AntSegmentedLabeledOption & {
  ellipsis?: EllipsisConfig;
  badge?: BadgeType;
};

export interface SegmentedProps extends Omit<AntSegmentedProps, 'ref'> {
  options: (SegmentedRawOption | SegmentedLabeledOption)[];
}

const isReactNode = (item: BadgeType): item is React.ReactNode => {
  return React.isValidElement(item);
};

const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>(
  ({ prefixCls: customizePrefixCls, options, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('segmented', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    const renderBadge = useCallback((badge: BadgeType) => {
      if (typeof badge === 'object' && !isReactNode(badge)) {
        return <Badge {...badge} />;
      }
      return <Badge count={badge} />;
    }, []);

    const newOptions = options?.map(item => {
      if (typeof item === 'object') {
        const { label, badge, ...restItem } = item;
        return {
          ...restItem,
          label: (
            <Flex gap={4} align="center" justify="center">
              {(item as SegmentedLabeledOption)?.ellipsis ? (
                <Typography.Text ellipsis={item.ellipsis}>{label}</Typography.Text>
              ) : (
                label
              )}
              {badge && renderBadge(badge)}
            </Flex>
          ),
        };
      }
      return item;
    });

    return wrapSSR(<AntSegmented ref={ref} options={newOptions} {...restProps} />);
  }
);

if (process.env.NODE_ENV !== 'production') {
  Segmented.displayName = 'Segmented';
}

export default Segmented;
