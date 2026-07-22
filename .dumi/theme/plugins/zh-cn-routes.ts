import path from 'path';
import type { IApi } from 'dumi';

/** Chinese atom docs use `index.md` (not `index.zh-CN.md`); register `/zh-CN/...` routes for them. */
const ZH_CN_ATOM_ROUTE = /^(components|biz-components|charts)\/.+\/index$/;

export default (api: IApi) => {
  api.describe({ key: 'oceanbase:zh-cn-routes' });

  api.modifyRoutes(routes => {
    if (!api.config.locales?.some(locale => locale.id === 'zh-CN')) {
      return routes;
    }

    const homeFile = path.join(api.cwd, '.dumi/pages/index/index.tsx');
    routes['zh-CN-home'] = {
      id: 'zh-CN-home',
      path: 'zh-CN',
      absPath: '/zh-CN',
      parentId: 'DocLayout',
      file: homeFile,
    };

    for (const [id, route] of Object.entries(routes)) {
      if (
        route.isLayout ||
        !ZH_CN_ATOM_ROUTE.test(id) ||
        !route.path ||
        route.path.startsWith('zh-CN/')
      ) {
        continue;
      }

      const zhId = `zh-CN/${id}`;
      if (routes[zhId]) continue;

      const zhPath = `zh-CN/${route.path}`;
      routes[zhId] = {
        ...route,
        id: zhId,
        path: zhPath,
        absPath: `/${zhPath}`,
      };
    }

    return routes;
  });
};
