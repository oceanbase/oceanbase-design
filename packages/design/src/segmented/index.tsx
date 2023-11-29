import React, { useContext } from 'react';
import { Segmented as AntSegmented, Typography } from 'antd';
import type {
  SegmentedProps as AntSegmentedProps,
  SegmentedLabeledOption as AntSegmentedLabeledOption,
} from 'antd/es/segmented';
import type { EllipsisConfig } from 'antd/es/typography/Base';
import type { SegmentedRawOption } from 'rc-segmented';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/segmented';

export type SegmentedLabeledOption = AntSegmentedLabeledOption & {
  ellipsis?: EllipsisConfig;
};

export interface SegmentedProps extends AntSegmentedProps {
  options: (SegmentedRawOption | SegmentedLabeledOption)[];
}

const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>(
  ({ prefixCls: customizePrefixCls, options, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('segmented', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    const newOptions = options?.map(item => {
      if (typeof item === 'object' && (item as SegmentedLabeledOption)?.ellipsis) {
        const { label, ...restItem } = item;
        return {
          ...restItem,
          label: <Typography.Text ellipsis={item.ellipsis}>{label}</Typography.Text>,
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
