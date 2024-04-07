import { forwardRef, useContext } from 'react';
import { Input as AntInput } from 'antd';
import type { SearchProps as AntSearchProps } from 'antd/es/input/Search';
import type { InputLocale, InputRef } from './Input';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';

export * from 'antd/es/input/Search';

export interface SearchProps extends AntSearchProps {
  locale?: InputLocale;
}

const Search = forwardRef<InputRef, SearchProps>(({ locale: customLocale, ...restProps }, ref) => {
  const { locale: contextLocale } = useContext<ConfigConsumerProps>(ConfigProvider.ConfigContext);
  const inputLocale: InputLocale = {
    placeholder: contextLocale?.global?.inputPlaceholder || defaultLocale.global.inputPlaceholder,
    ...defaultLocale.Input,
    ...contextLocale?.Input,
    ...customLocale,
  };

  return <AntInput.Search ref={ref} placeholder={inputLocale.placeholder} {...restProps} />;
});

if (process.env.NODE_ENV !== 'production') {
  Search.displayName = 'Search';
}

export default Search;
