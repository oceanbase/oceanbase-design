import React, { useMemo } from 'react';
import type { Dayjs } from 'dayjs';
import type { Moment } from 'moment';
import classNames from 'classnames';
import { Input } from '@oceanbase/design';
import { useSegmentedInput } from './hooks/useSegmentedInput';

export interface EditableDateTimeInputProps {
  value?: [Dayjs | Moment | null, Dayjs | Moment | null];
  onChange?: (value: [Dayjs | Moment, Dayjs | Moment]) => void;
  format?: string;
  hideYear?: boolean;
  hideSecond?: boolean;
  isMoment?: boolean;
  isCn?: boolean;
  className?: string;
  prefixCls?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const EditableDateTimeInput: React.FC<EditableDateTimeInputProps> = props => {
  const {
    value,
    onChange,
    format: formatProp,
    hideYear = false,
    hideSecond = false,
    isMoment = false,
    isCn = true,
    className,
    prefixCls = 'ant-picker',
    disabled = false,
    onClick,
  } = props;

  // 根据配置生成格式，优先使用外部传入的 format
  const format = useMemo(() => {
    if (formatProp) {
      return formatProp;
    }
    if (isCn) {
      if (hideYear) {
        return hideSecond ? 'MM-DD HH:mm' : 'MM-DD HH:mm:ss';
      }
      return hideSecond ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD HH:mm:ss';
    } else {
      if (hideYear) {
        return hideSecond ? 'MM/DD HH:mm' : 'MM/DD HH:mm:ss';
      }
      return hideSecond ? 'MM/DD/YYYY HH:mm' : 'MM/DD/YYYY HH:mm:ss';
    }
  }, [formatProp, hideYear, hideSecond, isCn]);

  // 提取时区后缀（如 "(UTC+8)"、" UTC+8" 等）
  const { baseFormat } = useMemo(() => {
    const timezonePattern = /(\s*\(?(?:UTC|GMT)[+-]?\d*\)?)\s*$/i;
    const match = format.match(timezonePattern);
    if (match) {
      return {
        baseFormat: format.slice(0, match.index),
        timezoneSuffix: match[1],
      };
    }
    return { baseFormat: format, timezoneSuffix: '' };
  }, [format]);

  // 使用分段输入 hook
  const {
    inputRef,
    isEditing,
    displayValue,
    handleClick,
    handleDoubleClick,
    handleKeyDown,
    handleBlur,
    handlePaste,
  } = useSegmentedInput({
    value,
    onChange,
    format,
    baseFormat,
    isMoment,
    isCn,
    onClick,
  });

  return (
    <div
      className={classNames(`${prefixCls}-range-editable`, className, {
        [`${prefixCls}-range-editable-focused`]: isEditing,
        [`${prefixCls}-range-editable-disabled`]: disabled,
      })}
    >
      <Input
        ref={inputRef}
        className={`${prefixCls}-range-editable-input`}
        value={displayValue}
        readOnly
        disabled={disabled}
        variant="borderless"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
        // onFocus={handleFocus}
        onBlur={handleBlur}
        onPaste={handlePaste}
      />
    </div>
  );
};

export default EditableDateTimeInput;
