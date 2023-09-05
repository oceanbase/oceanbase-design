import {Select as AntSelect} from 'antd';
import type {SelectProps as AntSelectProps} from 'antd/es/select';
import classNames from 'classnames';
import React, {useContext} from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

const {Option, OptGroup} = AntSelect;

export * from 'antd/es/select';

export type SelectProps = AntSelectProps;

const Select = ({prefixCls: customizePrefixCls, className, ...restProps}: SelectProps) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('select', customizePrefixCls);
    const {wrapSSR} = useStyle(prefixCls);

    const selectCls = classNames(className);
    return wrapSSR(<AntSelect prefixCls={customizePrefixCls} className={selectCls} {...restProps} />);
}

Select.Option = Option;
Select.OptGroup = OptGroup;

if (process.env.NODE_ENV !== 'production') {
    Select.displayName = AntSelect.displayName;
}

export default Select;