import type { CSSObject, CSSInterpolation } from '@ant-design/cssinjs';
import type { ComponentTokenMap } from 'antd/es/theme/interface';
import type { GlobalToken, FullToken, GenerateStyle } from '../theme/interface';
import { genStyleHooks as antGenStyleHooks } from '../theme/internal';

// work for Select, TreeSelect, Cascader
export const genSelectCommonStyle = (
  token: FullToken<'Select' | 'TreeSelect' | 'Cascader'>
): CSSObject => {
  const { antCls } = token;
  const selectComponentCls = `${antCls}-select`;
  return {
    [`${selectComponentCls}${selectComponentCls}-multiple`]: {
      [`${selectComponentCls}-selection-item`]: {
        borderRadius: token.borderRadius,
      },
    },
  };
};

export type ComponentName = keyof ComponentTokenMap;

/**
 * Generate style hooks for components, similar to ant-design's genStyleHooks
 * @param componentName - Component name or [componentName, subName] tuple
 * @param styleFn - Style generation function
 * @param getDefaultToken - Optional default token generator
 * @param options - Optional configuration options
 * @returns A hook function that returns [wrapCSSVar, hashId, cssVarCls]
 */
export function genStyleHooks<C extends ComponentName>(
  componentName: C | [C, string],
  styleFn: GenerateStyle<FullToken<C>>,
  getDefaultToken?: Partial<FullToken<C>> | ((token: GlobalToken) => Partial<FullToken<C>>),
  options?: {
    resetStyle?: boolean;
    resetFont?: boolean;
    unitless?: Record<string, boolean>;
    order?: number;
  }
) {
  const normalizedComponentName = Array.isArray(componentName) ? componentName[0] : componentName;

  /**
   * 使用 [Component, subName] 注册，第一维与 antd 一致以便合并 `theme.components[Component]`（如 Table.cellFontSize）；
   * 第二维与 antd 默认样式区分，避免覆盖/顶替同组件的主样式钩子。
   */
  const OCEANBASE_SUB_STYLE = 'oceanbase';
  const obComponentName = Array.isArray(componentName)
    ? ([normalizedComponentName, `${OCEANBASE_SUB_STYLE}-${componentName[1]}`] as [C, string])
    : ([normalizedComponentName, OCEANBASE_SUB_STYLE] as [C, string]);

  return antGenStyleHooks(
    obComponentName as any,
    (token): CSSInterpolation[] => {
      const styles: CSSInterpolation[] = [];

      // Add genSelectCommonStyle for Select, TreeSelect, Cascader
      if (['Select', 'TreeSelect', 'Cascader'].includes(normalizedComponentName)) {
        styles.push(genSelectCommonStyle(token as FullToken<'Select' | 'TreeSelect' | 'Cascader'>));
      }

      // Add component-specific styles
      const componentStyles = styleFn(token as FullToken<C>);
      if (Array.isArray(componentStyles)) {
        styles.push(...componentStyles);
      } else {
        styles.push(componentStyles);
      }

      return styles;
    },
    getDefaultToken as any,
    {
      resetStyle: false,
      // antd style order is -999 and -998
      // ref: https://github.com/ant-design/ant-design/blob/master/components/theme/util/genComponentStyleHook.tsx#L175
      // obui style order should behind to cover it
      order: -900,
      ...options,
    }
  );
}

/**
 * @deprecated Use genStyleHooks instead. This function is kept for backward compatibility.
 */
export function genComponentStyleHook(
  componentName: ComponentName,
  styleFn: GenerateStyle<FullToken<ComponentName>>,
  getDefaultToken?:
    | Partial<FullToken<ComponentName>>
    | ((token: GlobalToken) => Partial<FullToken<ComponentName>>)
) {
  const useStyle = genStyleHooks(componentName, styleFn, getDefaultToken);

  return (prefixCls: string) => {
    const [wrapCSSVar, hashId] = useStyle(prefixCls);
    return {
      wrapSSR: wrapCSSVar,
      hashId,
    };
  };
}

export type { CSSObject, FullToken, GenerateStyle };
