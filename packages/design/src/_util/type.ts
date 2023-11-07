// ref: https://github.com/ant-design/ant-design/blob/master/components/_util/type.ts
export type LiteralUnion<T extends string> = T | (string & {});

export type AnyObject = Record<PropertyKey, any>;

export type CustomComponent<P = AnyObject> = React.ComponentType<P> | string;
