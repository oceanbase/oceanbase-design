import { useRef, useEffect, useState } from 'react';
import { toNumber } from 'lodash';
import queryString from 'query-string';
import { isNullValue } from '../util';
import { toBoolean } from '../format';
import { jsonParse } from '../robust';

export type QueryParameter = {
  key: string;
  /** query 参数的数据类型，默认为 string */
  type?: 'string' | 'number' | 'boolean' | 'array' | 'json' | 'customize';
  // url 中的 query 参数转换成实际使用时需要的格式
  query2Search?: (query: string | string[] | null | undefined) => any;
  // 实际的数据格式转换为 query 中的 string 类型的格式
  search2Query?: (search: any) => string;
  // query 中不存在该参数时，默认补全的值，没有时不进行补全操作
  defaultValue?: any;
};

type QueryValues = {
  [key: string]: string | string[] | null | undefined;
};

interface SearchValues {
  [key: string]: any;
}

const format2Search = (value: any, parameter: QueryParameter) => {
  let formatted: any = null;
  if (!isNullValue(value)) {
    // 空值不做处理
    switch (parameter.type) {
      case 'string':
        formatted = value?.toString();
        break;
      case 'number':
        formatted = toNumber(value);
        break;
      case 'boolean':
        formatted = toBoolean(value);
        break;
      case 'json':
        formatted = jsonParse(value, {});
        break;
      default:
        formatted = value;
        break;
    }
  }
  return formatted;
};

/**
 * 便捷管理 url query 的 hook
 *
 * @template T 可以传入 search values 的类型，则返回值会应用该类型
 * @param {any} history
 * @param {QueryParameter[]} queryParameters
 * @returns
 */
export const useQuery = <T extends SearchValues>(
  // TODO: history 仅使用 react-router-dom v5，后续需要改造适配 react-router-dom v6
  history: any,
  queryParameters: (QueryParameter | string)[]
) => {
  const searches = useRef(queryString.parse(location?.search) ?? {});

  const initialQueryValues = useRef(
    // @ts-ignore
    queryParameters.reduce((collection, parameter) => {
      const key = typeof parameter === 'string' ? parameter : parameter.key;
      const defaultValue = typeof parameter === 'string' ? undefined : parameter.defaultValue;
      let value = searches.current[key];

      if (isNullValue(value) && !isNullValue(defaultValue) && typeof parameter !== 'string') {
        value =
          parameter.search2Query?.(parameter.defaultValue) ?? parameter.defaultValue?.toString();
      }
      return { ...collection, [key]: value };
    }, {} as QueryValues)
  );

  const initialSearchValues = useRef(
    queryParameters.reduce((collection, parameter) => {
      const key = typeof parameter === 'string' ? parameter : parameter.key;
      return {
        ...collection,
        [key]:
          typeof parameter !== 'string' && typeof parameter.query2Search === 'function'
            ? // @ts-ignore
              parameter.query2Search(initialQueryValues.current[parameter.key])
            : // @ts-ignore
              format2Search(initialQueryValues.current[key], parameter as QueryParameter),
      };
    }, {} as T)
  );

  const [values, setValues] = useState<T>(initialSearchValues.current);

  useEffect(() => {
    // 初始化赋值
    history.push({
      pathname: history.location.pathname,
      query: { ...history.query, ...initialQueryValues },
    });
  }, []);

  useEffect(() => {
    const nextQueries = queryParameters.reduce((collection, parameter) => {
      const key = typeof parameter === 'string' ? parameter : parameter.key;

      return {
        ...collection,
        [key]:
          typeof parameter !== 'string' && typeof parameter.search2Query === 'function'
            ? parameter.search2Query(values[parameter.key])
            : values[key]?.toString(),
      };
    }, {} as QueryValues);
    history.push({ pathname: history.location.pathname, query: nextQueries });
  }, [values]);

  const setSearchValues = (data: QueryValues) => {
    setValues({ ...values, ...data });
  };

  return { values, setValues: setSearchValues };
};
