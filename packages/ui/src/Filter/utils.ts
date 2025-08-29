/**
 * 根据搜索项过滤数据 英文下大小写不敏感
 * @param data 数据
 * @param search 搜索项
 * @returns 过滤后的数据
 */
export const filterData = (data: any[], search: string) => {
  const lowSearch = search.toLowerCase();
  if (!search) {
    return data;
  }
  return data.filter(item => {
    // 父元素包含搜索项 直接返回 true
    if (item.label.toLowerCase().includes(lowSearch)) {
      return true;
    }
    // 子元素包含搜索项 也要返回 true
    if (item.children.some(child => child.label.toLowerCase().includes(lowSearch))) {
      return true;
    }
    // 其他情况返回 false
    return false;
  });
};
