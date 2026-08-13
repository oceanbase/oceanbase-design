/**
 * 默认英文在根路径，仅中文带 /zh-CN 前缀
 */
export const ZH_CN_BASE = '/zh-CN';

export function isZhCN(pathname: string) {
  return pathname.startsWith(ZH_CN_BASE);
}

/** 获取当前 locale 的 base 路径（英文为空，中文为 /zh-CN） */
export function getLocaleBase(zhCN: boolean) {
  return zhCN ? ZH_CN_BASE : '';
}

/** 将无前缀路径转为带 locale 前缀的完整路径 */
export function getLocalizedPathname(
  path: string,
  zhCN?: boolean,
  search?: string,
  hash?: {
    zhCN?: string;
    enUS?: string;
  }
) {
  let pathname = path.startsWith('/') ? path : `/${path}`;
  pathname = zhCN ? (path === '/' ? ZH_CN_BASE : `${ZH_CN_BASE}${pathname}`) : pathname;

  if (hash) {
    const localHash = hash[zhCN ? 'zhCN' : 'enUS'];
    pathname += `#${localHash}`;
  }

  return { pathname, search };
}

/** 从完整路径中移除 locale 前缀，得到无前缀路径 */
export function getPathWithoutLocale(path: string): string {
  if (path.startsWith(ZH_CN_BASE)) {
    return path.slice(ZH_CN_BASE.length) || '/';
  }
  return path;
}

/** 判断路径是否已带 locale 前缀 */
export function hasLocalePrefix(path: string): boolean {
  return path.startsWith(ZH_CN_BASE);
}

/** 判断侧栏项是否属于中文 locale（与 rehypePlugin 文件约定一致） */
export function isSidebarItemZhCN(item: {
  link?: string;
  frontmatter?: { filename?: string };
}): boolean {
  const filename = (item.frontmatter as { filename?: string } | undefined)?.filename || '';
  if (/\.zh-CN\.(md|mdx)$/i.test(filename)) return true;
  if (/\.en-US\.(md|mdx)$/i.test(filename)) return false;
  if (hasLocalePrefix(item.link || '')) return true;
  // packages/*/index.md = Chinese; docs/*.md (no suffix) = English
  if (/packages\/.*\/index\.md$/i.test(filename)) return true;
  return false;
}

export function ping(callback: (status: string) => void) {
  const url =
    'https://private-a' +
    'lipay' +
    'objects.alip' +
    'ay.com/alip' +
    'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  const img = new Image();
  let done: boolean;
  const finish = (status: string) => {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };
  img.onload = () => finish('responded');
  img.onerror = () => finish('error');
  img.src = url;
  return setTimeout(() => finish('timeout'), 1500);
}

export function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}
