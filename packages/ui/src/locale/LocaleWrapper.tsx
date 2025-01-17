import { ConfigProvider } from '@oceanbase/design';
import hoistNonReactStatic from 'hoist-non-react-statics';
import type { Ref } from 'react';
import React from 'react';

export interface LocaleWrapperProps {
  locale?: any;
}

export interface LocaleWrapperInput {
  componentName: string;
  defaultLocale: any;
}

type CTR<T> =
  T extends React.ForwardRefExoticComponent<object & React.RefAttributes<infer R>> ? R : never;

export default ({ componentName, defaultLocale }: LocaleWrapperInput) =>
  <BaseProps extends LocaleWrapperProps>(
    BaseComponent: React.ForwardRefExoticComponent<BaseProps> | React.ComponentType<BaseProps>
  ) => {
    type WrappedComponentProps = BaseProps & { forwardedRef: Ref<typeof BaseComponent> };

    class Hoc extends React.Component<WrappedComponentProps> {
      static displayName = `LocaleWrapper(${BaseComponent.name})`;
      static readonly WrappedComponent = BaseComponent;
      static contextType = ConfigProvider.ConfigContext;

      render() {
        const { locale: customLocale, forwardedRef, ...newProps } = this.props;
        // @ts-ignore
        const { locale: antLocale } = this.context;
        const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
        const localeData = {
          ...defaultLocale,
          ...(localeFromContext || {}),
          // 这里使用 antLocale，不能直接顶掉 locale 属性，有些组件内部会维护一个 locale 去做特殊判断
          antLocale: antLocale?.locale || 'zh-cn',
        };

        return (
          // @ts-ignore
          <BaseComponent
            ref={forwardedRef}
            theme={{
              hashed: process.env.NODE_ENV?.toLowerCase() !== 'test',
            }}
            locale={{ ...localeData, ...customLocale }}
            {...(newProps as WrappedComponentProps)}
          />
        );
      }
    }

    // 高阶组件需要转发ref
    // 参考: https://zh-hans.reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components
    const ForwardComponent = React.forwardRef<CTR<typeof BaseComponent>, BaseProps>(
      // @ts-ignore
      (props: BaseProps, ref) => <Hoc {...(props as BaseProps)} forwardedRef={ref} />
    );

    return hoistNonReactStatic(ForwardComponent, BaseComponent);
  };
