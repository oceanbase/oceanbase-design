import { find, isNaN, isString } from 'lodash';
import queryString from 'query-string';
import isUrl from 'is-url';

/**
 * 是否为空值，包括 null、undefined、'' 和 NaN
 */
export function isNullValue(value: any) {
  return value === null || value === undefined || value === '' || isNaN(value);
}

export type FindByValueType = string | number | boolean | null | undefined;

/**
 * 找到任意属性 key 对应的值和目标值相等的数组对象
 */
export function findBy<T>(array: T[], key: string, value: FindByValueType) {
  return find(array, item => item && item[key] === value) || ({} as T);
}

/**
 * 找到属性 value 对应的值和目标值相等的数组对象
 */
export function findByValue<T extends { value: FindByValueType }>(
  array: T[],
  value: FindByValueType
) {
  return find(array, item => item && item.value === value) || ({} as T);
}

declare global {
  interface Window {
    // 页面路由前缀
    routerBase?: string;
    // 页面展示模式
    displayMode?: 'default' | 'embed';
  }
}

/**
 * 页面跳转，不同于 history.push() 仅支持同一标签页下跳转，directTo 常用于新开标签页跳转
 * @param {string}  url 跳转链接，支持相对链接和绝对链接
 * @param {boolean} blank 是否新开标签页
 */
export function directTo(url: string, blank = true) {
  // 路由前缀
  const routerBase = window.routerBase;
  // 约定 window.displayMode 为 embed 时为 iframe 嵌入模式，此时 directTo 会在当前页打开
  // 并且跳转时自动传递 displayMode 参数，以保证后续页面下 directTo 也在当前页打开
  const displayMode = window.displayMode;
  const newUrl =
    // 如果部署在根路径，或者是完整 URL，则使用原始值
    !routerBase || routerBase === '/' || isUrl(url) ? url : `${routerBase}${url}`;

  if (blank && displayMode !== 'embed') {
    // 在新的标签页中打开
    const blankWindow = window.open('about:blank');
    if (blankWindow) {
      blankWindow.location.href = newUrl;
    } else {
      // 兜底逻辑，在当前标签页打开
      window.location.href = newUrl;
    }
  } else {
    // 在当前标签页打开
    window.location.href = queryString.stringifyUrl({
      url: newUrl,
      query: {
        displayMode,
      },
    });
  }
}

/**
 * 文件下载，支持下载格式为 Blob、File、ArrayBuffer 和 string 的文件
 * @param {Blob | File | ArrayBuffer | string} content 下载内容
 * @param {string} fileName 下载后保存的文件名
 * @param {BlobPropertyBag} options BlobPropertyBag 字典，可参考 https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/Blob#%E5%8F%82%E6%95%B0
 */
export function downloadFile(
  content: Blob | File | ArrayBuffer | string,
  fileName: string,
  options?: BlobPropertyBag
) {
  const blob = new Blob([content], {
    // 如果是 string 类型文件，则指定默认的 MIME 类型，可以避免大部分场景的乱码
    ...(isString(content) ? { type: 'text/plain;charset=utf-8' } : {}),
    ...options,
  });
  const blobUrl = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = fileName;
  a.href = blobUrl;
  a.click();
  a.remove();
}
