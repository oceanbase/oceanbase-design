import React from 'react';
import useHistory from '../_util/useHistory';

export default ({ route, params, routes, paths }) => {
  const routeIndex = routes.indexOf(route);
  const last = routeIndex === routes.length - 1;
  // title > breadcrumbName
  const title = route.title || route.breadcrumbName;
  // href (目的路径) > path (拼接路径)
  const path =
    route.href ||
    routes
      .slice(0, routeIndex + 1)
      .map(item => item.path)
      .join('/');

  const history = useHistory();

  return last ? (
    <span>{title}</span>
  ) : (
    <a
      onClick={() => {
        history.push(path);
      }}
    >
      {title}
    </a>
  );
};
