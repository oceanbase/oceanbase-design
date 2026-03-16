import React, { useMemo, useImperativeHandle, forwardRef } from 'react';
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
  open?: boolean; // 面板是否打开
}

export interface EditableDateTimeInputRef {
  hasPastedValue: boolean;
  confirmPastedValue: () => void;
}

const EditableDateTimeInput = forwardRef<EditableDateTimeInputRef, EditableDateTimeInputProps>(
  (props, ref) => {
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
      open = false,
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
      handleBlur,
      handleKeyDown,
      hasPastedValue,
      confirmPastedValue,
    } = useSegmentedInput({
      value,
      onChange,
      format,
      baseFormat,
      isMoment,
      isCn,
      onClick,
      open,
    });

    // 暴露方法给父组件
    useImperativeHandle(ref, () => ({
      hasPastedValue,
      confirmPastedValue,
    }));

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
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }
);

EditableDateTimeInput.displayName = 'EditableDateTimeInput';

export default EditableDateTimeInput;
