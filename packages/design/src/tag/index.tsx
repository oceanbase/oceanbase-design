import {Tag as AntTag} from 'antd';
import type { TagProps as AntTagProps } from 'antd/es/tag';
import {Tooltip} from '@oceanbase/design';
import classNames from 'classnames';
import React, {useContext} from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/tag';

export interface TagProps extends AntTagProps {
    width?: string
};

const {CheckableTag} = AntTag;


const Tag = ({
    prefixCls: customizePrefixCls,
    className,
    width,
    ...restProps
}: TagProps) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const {wrapSSR} = useStyle(prefixCls);

    const tagCls = classNames(
        {
            [`${prefixCls}-ellipsis`]: !!width
        },
        className
    );

    const tagRender = width ? <Tooltip title={restProps.children}>
        <AntTag prefixCls={customizePrefixCls} className={tagCls} style={{maxWidth: width}} {...restProps} />
    </Tooltip> : <AntTag prefixCls={customizePrefixCls} className={tagCls} {...restProps} />;

    return wrapSSR(tagRender);
};

if (process.env.NODE_ENV !== 'production') {
    Tag.displayName = AntTag.displayName;
}

Tag.CheckableTag = CheckableTag;

export default Tag;