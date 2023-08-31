import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import { genPresetColor } from 'antd/lib/theme/internal';
import capitalize from 'antd/lib/_util/capitalize';

export type TagToken = FullToken<'Tag'>;

type CssVariableType = 'Success' | 'Info' | 'Error' | 'Warning';


const genTagPresetStatusStyle = (
    token: TagToken,
    status: 'success' | 'processing' | 'error' | 'warning',
    cssVariableType: CssVariableType
) => {
    const capitalizedCssVariableType = capitalize<CssVariableType>(cssVariableType);
    return {
        [`${token.componentCls}-${status}`]: {
            color: token[`color${cssVariableType}`],
            borderColor: token[`color${capitalizedCssVariableType}Border`] + 66
        }
    }
}

const genPresetStyle = (token: TagToken) => genPresetColor(token, (colorKey, {textColor, lightBorderColor}) => {
    return {
        [`${token.componentCls}-${colorKey}`]: {
            color: textColor,
            borderColor: `${lightBorderColor}66`
        }
    }
});

export const genTagStyle: GenerateStyle<TagToken> = (token: TagToken) => {
    const {
        componentCls,
        colorTextLabel,
    } = token;
    return {
        [`${componentCls}`]: {
            color: colorTextLabel,
            borderColor: `${token.colorBorder}66`,
            [`&-ellipsis`]: {
                display: 'inline-block',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                verticalAlign: 'bottom',
                whiteSpace: 'noWrap',
            },
            [`&-checkable`]: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                [`&:not(${componentCls}-checkable-checked):hover`]: {
                    color: token.colorPrimary,
                },
                '&:active, &-checked': {
                    color: token.colorTextLightSolid,
                },
                '&-checked': {
                    backgroundColor: token.colorPrimary,
                    '&:hover': {
                      backgroundColor: token.colorPrimaryHover,
                    },
                },
                  '&:active': {
                    backgroundColor: token.colorPrimaryActive,
                },
            },
            [`&-hidden`]: {
                display: 'none'
            }
        },
    };
};

export default (prefixCls: string) => {
    const useStyle = genComponentStyleHook('Tag', token => {
        return [
            genTagStyle(token),
            genPresetStyle(token),
            genTagPresetStatusStyle(token, 'success', 'Success'),
            genTagPresetStatusStyle(token, 'error', 'Error'),
            genTagPresetStatusStyle(token, 'processing', 'Info'),
            genTagPresetStatusStyle(token, 'warning', 'Warning')
        ];
    });
    return useStyle(prefixCls);
}