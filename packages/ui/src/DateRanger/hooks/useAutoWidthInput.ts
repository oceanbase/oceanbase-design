import { useLayoutEffect, useRef, useState } from 'react';
import type { InputRef } from '@oceanbase/design';

const getHorizontalSpacing = (computedStyle: CSSStyleDeclaration) =>
  (parseFloat(computedStyle.paddingLeft) || 0) +
  (parseFloat(computedStyle.paddingRight) || 0) +
  (parseFloat(computedStyle.borderLeftWidth) || 0) +
  (parseFloat(computedStyle.borderRightWidth) || 0);

const getSizingValue = (value: string) => (value ? value.replace(/\d/g, '0') : '\u00a0');

export interface UseAutoWidthInputOptions {
  inputRef: React.RefObject<InputRef>;
  value: string;
  minWidth?: number;
  extraWidth?: number;
}

export interface UseAutoWidthInputReturn {
  inputWidth: number;
  sizerRef: React.RefObject<HTMLSpanElement>;
}

export const useAutoWidthInput = (options: UseAutoWidthInputOptions): UseAutoWidthInputReturn => {
  const { inputRef, value, minWidth = 80, extraWidth = 0 } = options;
  const sizerRef = useRef<HTMLSpanElement>(null);
  const [inputWidth, setInputWidth] = useState<number>(minWidth);

  useLayoutEffect(() => {
    const nativeInput = inputRef.current?.input;
    const sizer = sizerRef.current;
    if (!nativeInput || !sizer) {
      return;
    }

    const computedStyle = window.getComputedStyle(nativeInput);
    sizer.style.font = computedStyle.font;
    sizer.style.letterSpacing = computedStyle.letterSpacing;
    sizer.style.fontVariantNumeric = computedStyle.fontVariantNumeric;
    sizer.textContent = getSizingValue(value);

    setInputWidth(
      Math.max(
        minWidth,
        Math.ceil(
          sizer.getBoundingClientRect().width + getHorizontalSpacing(computedStyle) + extraWidth
        )
      )
    );
  }, [extraWidth, inputRef, minWidth, value]);

  return {
    inputWidth,
    sizerRef,
  };
};
