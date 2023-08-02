export interface Path {
  /**
   * A URL pathname, beginning with a /.
   */
  pathname: string;

  /**
   * A URL search string, beginning with a ?.
   */
  search: string;

  /**
   * Compatibale with history.push param for react-router-dom v5
   */
  query: Record<string, string>;

  /**
   * A URL fragment identifier, beginning with a #.
   */
  hash: string;
}

export type To = string | Partial<Path>;

export type RelativeRoutingType = 'route' | 'path';

export interface NavigateOptions {
  replace?: boolean;
  state?: any;
  preventScrollReset?: boolean;
  relative?: RelativeRoutingType;
}

export interface NavigateFunction {
  (to: To, options?: NavigateOptions): void;
  (delta: number): void;
}
