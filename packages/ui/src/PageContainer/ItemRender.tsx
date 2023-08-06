import React from 'react';
import useNavigate from '../_util/useNavigate';

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

  const navigate = useNavigate();

  return last ? (
    <span>{title}</span>
  ) : (
    <a
      onClick={() => {
        navigate?.(path);
      }}
    >
      {title}
    </a>
  );
};
