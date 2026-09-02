import React, { forwardRef, useContext, useRef } from 'react';
import classNames from 'classnames';
import { Input as AntInput } from 'antd';
import { SearchOutlined } from '@oceanbase/icons';
import { composeRef } from 'rc-util/lib/ref';
import type { SearchProps as AntSearchProps } from 'antd/es/input/Search';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import InternalInput, { showCountFormatter } from './Input';
import type { InputLocale, InputRef } from './Input';
import useStyle from './style';
import { resolveInputLocale } from './resolveInputLocale';

export * from 'antd/es/input/Search';

export interface SearchProps extends AntSearchProps {
  locale?: InputLocale;
}

const Search = forwardRef<InputRef, SearchProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    className,
    enterButton = false,
    addonAfter,
    prefix,
    locale: customLocale,
    showCount,
    onSearch,
    onChange: onChangeProp,
    onPressEnter: onPressEnterProp,
    onCompositionStart,
    onCompositionEnd,
    loading,
    ...restProps
  } = props;

  const {
    getPrefixCls,
    locale: contextLocale,
    direction,
  } = useContext<ConfigConsumerProps>(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('input-search', customizePrefixCls);
  const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
  const [wrapCSSVar] = useStyle(inputPrefixCls);
  const searchPrefix = prefix ?? <SearchOutlined />;
  const inputRef = useRef<InputRef>(null);
  const composedRef = useRef(false);

  const inputLocale = resolveInputLocale(contextLocale, customLocale);

  if (!enterButton && !addonAfter) {
    const handleChange: AntSearchProps['onChange'] = e => {
      if (e?.target && e.type === 'click' && onSearch) {
        onSearch(e.target.value, e, { source: 'clear' });
      }
      onChangeProp?.(e);
    };

    const handlePressEnter: AntSearchProps['onPressEnter'] = e => {
      if (composedRef.current || loading) {
        return;
      }
      onPressEnterProp?.(e);
      onSearch?.(inputRef.current?.input?.value ?? '', e, { source: 'input' });
    };

    const cls = classNames(prefixCls, { [`${prefixCls}-rtl`]: direction === 'rtl' }, className);

    return (
      <InternalInput
        ref={composeRef(inputRef, ref)}
        prefixCls={customizeInputPrefixCls}
        locale={customLocale}
        showCount={showCount}
        {...restProps}
        className={cls}
        type="search"
        prefix={searchPrefix}
        onChange={handleChange}
        onPressEnter={handlePressEnter}
        onCompositionStart={e => {
          composedRef.current = true;
          onCompositionStart?.(e);
        }}
        onCompositionEnd={e => {
          composedRef.current = false;
          onCompositionEnd?.(e);
        }}
      />
    );
  }

  return wrapCSSVar(
    <AntInput.Search
      ref={ref}
      prefixCls={customizeInputPrefixCls}
      className={classNames(prefixCls, className)}
      placeholder={inputLocale.placeholder}
      showCount={showCount === true ? { formatter: showCountFormatter } : showCount}
      prefix={searchPrefix}
      enterButton={enterButton}
      addonAfter={addonAfter}
      loading={loading}
      onSearch={onSearch}
      onChange={onChangeProp}
      onPressEnter={onPressEnterProp}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
      {...restProps}
    />
  );
});

if (process.env.NODE_ENV !== 'production') {
  Search.displayName = 'Search';
}

export default Search;
