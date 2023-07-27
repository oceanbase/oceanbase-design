/**
 * 获取基于 Umi 框架应用的语言
 * @returns string
 */
export function getLocale(): string {
  return window.localStorage.getItem('umi_locale') || navigator.language;
}

/**
 * 设置基于 Umi 框架应用的语言
 * @param locale 语言的 key
 */
export function setLocale(locale: string) {
  window.localStorage.setItem('umi_locale', locale);
  // 设置完 locale 后需要 reload，以使页面生效
  window.location.reload();
}

// 非单页应用内部跳转，使用 directTo 方法
export function directTo(url: string, blank = true) {
  if (blank) {
    // 在新的标签页中打开
    const blankWindow = window.open('about:blank');
    if (blankWindow) {
      blankWindow.location.href = url;
    } else {
      // 兜底逻辑，在当前标签页打开
      window.location.href = url;
    }
  } else {
    // 在当前标签页打开
    window.location.href = url;
  }
}

/**
 * 将 path 拆分成多个匹配路径
 * 例如: /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
 * */
export function urlToList(url?: string) {
  const urlList = url?.split('/').filter(i => i) || [];
  return urlList.map((urlItem, index) => {
    return `/${urlList.slice(0, index + 1).join('/')}`;
  });
}

export function isEnglish() {
  return getLocale() === 'en-US';
}

export const getPrefix = (cls: string) => `ob-${cls}`;


/**
 * 字符串分割，按照指定的长度对字符串进行分割
 * @param{string} str 字符串
 * @param{number} 指定的分隔长度
 * @return{array}
 */
export function splitByLength(str: string | undefined | null, scale: number) {
  if (str && str.length < scale) {
    return [str];
  }
  const result = [];
  let index = 0;
  while (index < str.length) {
    result.push(str.slice(index, (index += scale)));
  }
  return result;
}