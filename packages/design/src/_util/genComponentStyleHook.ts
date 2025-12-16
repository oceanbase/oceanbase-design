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

  // Create the component name with OB- prefix
  const obComponentName = Array.isArray(componentName)
    ? ([`OB-${normalizedComponentName}`, componentName[1]] as [string, string])
    : (`OB-${normalizedComponentName}` as string);

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
