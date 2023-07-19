declare module '*.less';
declare module '*.module.less';
declare module '*.png';
declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react';

  export const ReactComponent: FunctionComponent<SVGAttributes<SVGElement>>;
  const svgUrl: string;
  export default svgUrl;
}

declare module 'path-to-regexp';
