import {
  antdTokenToObToken,
  antdVarToObCssVar,
  hexToObToken,
  obTokenToCssVar,
  antdCssVarToObCssVar,
  transformCssVarValue,
  getObTokenCssName,
} from '../utils/ob-token-map';

describe('ob-token-map', () => {
  it('maps antd colorText to colorTextDefault', () => {
    expect(antdTokenToObToken('colorText')).toBe('colorTextDefault');
    expect(obTokenToCssVar('colorTextDefault')).toBe('var(--ob-color-text-default)');
  });

  it('maps colorBgContainer with background property to colorBgDefault', () => {
    expect(antdTokenToObToken('colorBgContainer', { propertyName: 'background' })).toBe(
      'colorBgDefault'
    );
    expect(antdVarToObCssVar('colorBgContainer', { propertyName: 'background' })).toBe(
      'color-bg-default'
    );
  });

  it('maps hex value to obToken via property context', () => {
    expect(hexToObToken('rgba(0, 0, 0, 0.85)', { propertyName: 'color' })).toBe('colorTextDefault');
    expect(hexToObToken('#132039', { propertyName: 'color' })).toBe('colorTextDefault');
  });

  it('maps fontSize numeric values to ob font tokens', () => {
    expect(hexToObToken('14', { propertyName: 'fontSize' })).toBe('fontSize325');
    expect(hexToObToken('12px', { propertyName: 'fontSize' })).toBe('fontSize300');
  });

  it('maps borderRadius numeric values to ob radius tokens', () => {
    expect(hexToObToken('4', { propertyName: 'borderRadius' })).toBe('radiusSm');
    expect(hexToObToken('6px', { propertyName: 'borderRadius' })).toBe('radiusMd');
  });

  it('maps antd css variables to ob semantic css variables', () => {
    expect(antdCssVarToObCssVar('--ant-color-text')).toBe('--ob-color-text-default');
    expect(
      antdCssVarToObCssVar('--ant-color-bg-container', 'ant', 'ob', { propertyName: 'background' })
    ).toBe('--ob-color-bg-default');
  });

  it('transformCssVarValue replaces ant vars in compound values', () => {
    expect(
      transformCssVarValue('1px solid var(--ant-color-border)', { propertyName: 'border' })
    ).toBe('1px solid var(--ob-color-border-default)');
  });

  it('getObTokenCssName resolves meta names', () => {
    expect(getObTokenCssName('colorBgDefault')).toBe('color-bg-default');
    expect(getObTokenCssName('fontSize325')).toBe('font-size-325');
  });

  it('maps common product hex colors to obToken', () => {
    expect(hexToObToken('#0c4bff', { propertyName: 'color' })).toBe('colorTextLink');
    expect(hexToObToken('#eaba19', { propertyName: 'color' })).toBe('colorTextWarning');
    expect(hexToObToken('#999', { propertyName: 'color' })).toBe('colorTextDescription');
    expect(hexToObToken('#2bc048', { propertyName: 'color' })).toBe('colorTextSuccess');
    expect(hexToObToken('#ff4343', { propertyName: 'color' })).toBe('colorTextError');
    expect(hexToObToken('#7c8087', { propertyName: 'color' })).toBe('colorTextLabel');
  });
});
