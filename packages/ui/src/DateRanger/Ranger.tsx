import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import {
  Button,
  DatePicker,
  Divider,
  Dropdown,
  Radio,
  Space,
  Tooltip,
  theme,
} from '@oceanbase/design';
import type { TooltipProps, FormItemProps } from '@oceanbase/design';
import {
  LeftOutlined,
  PauseOutlined,
  CaretRightOutlined,
  RightOutlined,
  ZoomOutOutlined,
  SyncOutlined,
} from '@oceanbase/icons';
import type { RangePickerProps } from '@oceanbase/design/es/date-picker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { findIndex, isNil, noop, omit } from 'lodash';
import type { Moment } from 'moment';
import moment from 'moment';
import classNames from 'classnames';
import LocaleWrapper from '../locale/LocaleWrapper';
import { getPrefix } from '../_util';
import {
  CUSTOMIZE,
  DATE_TIME_FORMAT,
  NEAR_1_MINUTES,
  NEAR_30_MINUTES,
  NEAR_1_HOURS,
  NEAR_3_HOURS,
  NEAR_6_HOURS,
  TODAY,
  NEAR_TIME_LIST,
  YEAR_DATE_TIME_FORMAT,
  LAST_3_DAYS,
  DATE_TIME_SECOND_FORMAT,
  YEAR_DATE_TIME_SECOND_FORMAT,
  DATE_TIME_FORMAT_CN,
  DATE_TIME_SECOND_FORMAT_CN,
  YEAR_DATE_TIME_FORMAT_CN,
  YEAR_DATE_TIME_SECOND_FORMAT_CN,
} from './constant';
import type { RangeOption } from './typing';
import type { Rule } from './PickerPanel';
import InternalPickerPanel from './PickerPanel';
import zhCN from './locale/zh-CN';
import enUS from './locale/en-US';
import './index.less';

export type RangeName = 'customize' | string;

export type RangeValue = [Moment, Moment] | [Dayjs, Dayjs];

export type RangeDateValue = {
  name: RangeName;
  range: RangeValue;
};

export interface DateRangerProps
  extends Omit<RangePickerProps, 'mode' | 'picker' | 'value' | 'defaultValue'> {
  // 数据相关
  selects?: RangeOption[];
  defaultQuickValue?: string;
  // ui 相关
  hasRewind?: boolean;
  hasPlay?: boolean;
  hasSync?: boolean;
  hasForward?: boolean;
  hasZoomOut?: boolean;
  // 是否在选项面板中展示Tag
  hasTagInPicker?: boolean;
  // 时间选择提示
  tip?: string;
  rules?: Rule[];
  /** 是否只允许选择过去时间 */
  pastOnly?: boolean;
  // 是否启用极简模式
  simpleMode?: boolean;
  // 当时间范围在本年时，隐藏年份
  hideYear?: boolean;
  // 隐藏 秒
  hideSecond?: boolean;
  // 自动计算时间范围并回显到选择器tag
  autoCalcRange?: boolean;
  isMoment?: boolean;
  //固定 rangeName
  stickRangeName?: boolean;
  value?: RangeValue;
  defaultValue?: RangeValue;
  size?: 'small' | 'large' | 'middle';
  tooltipProps?: TooltipProps;
  locale: any;
}

const prefix = getPrefix('date-ranger');

const Ranger = React.forwardRef((props: DateRangerProps, ref) => {
  const {
    selects = [
      NEAR_1_MINUTES,
      NEAR_30_MINUTES,
      NEAR_1_HOURS,
      NEAR_3_HOURS,
      NEAR_6_HOURS,
      TODAY,
      LAST_3_DAYS,
    ],
    value,
    defaultValue,
    defaultQuickValue,
    hasRewind = true,
    hasPlay = false,
    hasSync = true,
    hasForward = true,
    hasZoomOut = false,
    hasTagInPicker = false,
    pastOnly = false,
    simpleMode = false,
    hideYear = false,
    hideSecond = false,
    autoCalcRange = false,
    onChange = noop,
    disabledDate,
    locale,
    size,
    //固定 rangeName
    stickRangeName = false,
    tooltipProps,
    isMoment: isMomentProps,
    rules,
    tip,
    ...rest
  } = props;

  const { token } = theme.useToken();
  const isCn = locale.locale === 'zh_CN';

  // 是否为 moment 时间对象
  const isMoment =
    moment.isMoment(defaultValue?.[0]) ||
    moment.isMoment(defaultValue?.[1]) ||
    moment.isMoment(value?.[0]) ||
    moment.isMoment(value?.[1]) ||
    isMomentProps;

  const defaultRangeName =
    value || defaultValue ? CUSTOMIZE : (defaultQuickValue ?? selects?.[0]?.name);
  const [rangeName, setRangeName] = useState(defaultRangeName);

  const [innerValue, setInnerValue] = useState<RangeValue>(() => {
    const initValue =
      value ??
      defaultValue ??
      (selects
        .find(item => item.name === defaultRangeName)
        ?.range(isMoment ? moment() : dayjs()) as RangeValue);
    if (onChange) {
      onChange(initValue);
    }
    return initValue;
  });

  const [open, setOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [backRadioFocused, setBackRadioFocused] = useState(false);
  const refState = useRef({
    tooltipOpen,
  });
  refState.current.tooltipOpen = tooltipOpen;

  // 没有 selects 时，回退到普通 RangePicker, 当前时间选项为自定义时，应该显示 RangePicker
  const [isPlay, setIsPlay] = useState(rangeName !== CUSTOMIZE);

  const compare = (m1: RangeValue, m2: RangeValue) => {
    if (Array.isArray(m1) && !Array.isArray(m2)) return false;
    if (Array.isArray(m2) && !Array.isArray(m1)) return false;
    return value[0] === innerValue[0] || value[1] === innerValue[1];
  };

  useEffect(() => {
    if (isNil(value) && isNil(innerValue)) return;
    // FIXME: 当前存在值的时候赋空值给组件，不好处理先 workaround 绕过，后面再想一个整体的方案
    if (isNil(value) && !isNil(innerValue)) return;
    const isEqual = compare(value, innerValue as RangeValue);
    // 前后时间有差异时，进行赋值
    if (!isEqual) {
      setInnerValue(value);
      if (!stickRangeName) {
        setRangeName(CUSTOMIZE);
      }
    }
  }, [value, stickRangeName]);

  const closeTooltip = () => {
    setOpen(false);
    setTooltipOpen(false);
  };

  const handleNameChange = (name: string) => {
    if (name !== CUSTOMIZE) {
      closeTooltip();
    }
    setRangeName(name);
  };

  const rangeChange = (range: RangeValue) => {
    setInnerValue(range);
    onChange(range);
  };

  const datePickerChange = (range: RangeValue) => {
    rangeChange(range);
    setRangeName(CUSTOMIZE);
  };

  const disabledFuture = (current: Moment | Dayjs) => {
    const futureDay = moment.isMoment(current) ? moment().endOf('day') : dayjs().endOf('day');
    // 禁止选择未来日期
    return current && futureDay && current > futureDay;
  };

  const startTime = innerValue?.[0];
  const endTime = innerValue?.[1];
  const differenceMs = endTime?.diff(startTime as any);

  const differenceSeconds = endTime?.diff(startTime as any, 'seconds');
  const differenceMinutes = endTime?.diff(startTime as any, 'minutes');
  const differenceHours = endTime?.diff(startTime as any, 'hours');
  const differenceDays = endTime?.diff(startTime as any, 'days');
  const differenceWeeks = endTime?.diff(startTime as any, 'weeks');
  const differenceMonths = endTime?.diff(startTime as any, 'months');
  const differenceYears = endTime?.diff(startTime as any, 'years');

  const getCustomizeRangeLabel = () => {
    if (!autoCalcRange) {
      return locale.customize;
    }

    if (differenceYears > 0) {
      return `${differenceYears}y`;
    }

    if (differenceMonths > 0) {
      return `${differenceMonths}mon`;
    }

    if (differenceWeeks > 0) {
      return `${differenceWeeks}w`;
    }

    if (differenceDays > 0) {
      return `${differenceDays}d`;
    }

    if (differenceHours > 0) {
      return `${differenceHours}h`;
    }

    if (differenceMinutes > 0) {
      return `${differenceMinutes}m`;
    }

    return `${differenceSeconds}s`;
  };

  const getCustomizeLabel = () => {
    if (differenceYears > 0) {
      return `近 ${differenceYears} 年`;
    }

    // if (differenceQuarters > 0) {
    //   return `近 ${differenceQuarters} 季度`;
    // }

    if (differenceMonths > 0) {
      return `近 ${differenceMonths} 月`;
    }

    if (differenceWeeks > 0) {
      return `近 ${differenceWeeks} 周`;
    }

    if (differenceDays > 0) {
      return `近 ${differenceDays} 天`;
    }

    if (differenceHours > 0) {
      return `近 ${differenceHours} 时`;
    }

    if (differenceMinutes > 0) {
      return `近 ${differenceMinutes} 分`;
    }

    return `近 ${differenceSeconds} 秒`;
  };

  const setNow = () => {
    const selected = NEAR_TIME_LIST.find(item => item.name === rangeName);
    if (selected?.range) {
      rangeChange(selected.range(isMoment ? moment() : dayjs()) as RangeValue);
    }
    if (rangeName === CUSTOMIZE) {
      const eTime = isMoment ? moment() : dayjs();
      rangeChange([(eTime as Dayjs)?.clone().subtract(differenceMs), eTime] as RangeValue);
    }
  };

  useImperativeHandle(ref, () => ({
    updateCurrentTime: setNow,
  }));

  const rangeLabel =
    rangeName === CUSTOMIZE
      ? getCustomizeRangeLabel()
      : selects.find(_item => _item.name === rangeName)?.rangeLabel;

  const label =
    rangeName === CUSTOMIZE
      ? getCustomizeLabel()
      : selects.find(_item => _item.name === rangeName)?.label;

  const thisYear = new Date().getFullYear();
  const isThisYear = startTime?.year() === thisYear && endTime?.year() === thisYear;
  const rangeNameIndex = findIndex(selects, item => item.name === rangeName);

  const nextRangeItem =
    rangeNameIndex === -1
      ? selects.find(item => {
          const [s, e] = item.range(isMoment ? moment() : dayjs()) as RangeValue;
          // 自定义模式下，对比毫秒来选出比当前范围大一级的 rangeItem
          const diffMs = e.diff(s as any);
          return diffMs > differenceMs;
        })
      : selects[rangeNameIndex + 1];

  return (
    <Space
      className={classNames({
        [prefix]: true,
        [`${prefix}-show-range`]: true,
        [`${prefix}-back-radio-focused`]: backRadioFocused,
      })}
      style={rest.style}
    >
      <Space size={0}>
        <div
          className={classNames(`${prefix}-wrapper`, {
            [`${prefix}-wrapper-has-jumper`]: hasRewind || hasForward,
          })}
        >
          <Dropdown
            trigger={['click']}
            open={open}
            // 关闭后进行销毁，才可以将 Tooltip 进行同步关闭
            destroyPopupOnHide={true}
            // 存在缓存，会锁死里面的值
            onOpenChange={o => {
              if (o === false && refState.current.tooltipOpen) {
                return;
              }

              setOpen(o);
            }}
            dropdownRender={originNode => {
              return (
                <div className={`${prefix}-dropdown-picker`}>
                  {originNode}
                  <Divider type="vertical" style={{ height: 'auto', margin: '0px 4px 0px 0px' }} />
                  <InternalPickerPanel
                    defaultValue={innerValue}
                    // @ts-ignore
                    locale={locale}
                    disabledDate={pastOnly ? disabledFuture : disabledDate}
                    tip={tip}
                    isMoment={isMoment}
                    rules={rules}
                    onOk={vList => {
                      setIsPlay(false);
                      handleNameChange(CUSTOMIZE);
                      rangeChange(
                        vList.map(v => {
                          return isMoment ? moment(v) : dayjs(v);
                        }) as RangeValue
                      );

                      closeTooltip();
                    }}
                    onCancel={() => {
                      closeTooltip();
                    }}
                  />
                </div>
              );
            }}
            menu={{
              selectable: true,
              defaultSelectedKeys: [rangeName],
              onClick: ({ key, domEvent }) => {
                if (key === CUSTOMIZE) {
                  refState.current.tooltipOpen = true;
                } else {
                  refState.current.tooltipOpen = false;
                }
                const selected = NEAR_TIME_LIST.find(_item => _item.name === key);
                // 存在快捷选项切换为极简模式
                if (selected?.range) {
                  handleNameChange(key);
                  setIsPlay(true);
                  rangeChange(selected.range(isMoment ? moment() : dayjs()) as RangeValue);
                }
              },
              items: selects
                .filter(item => {
                  return !!item;
                })
                .map(item => {
                  return {
                    key: item.name,
                    label: (
                      <Space size={8} style={{ minWidth: 100 }}>
                        {hasTagInPicker && (
                          <span className={`${prefix}-label`}>{item.rangeLabel}</span>
                        )}
                        {/* @ts-ignore */}
                        {locale[item.label] || item.label}
                      </Space>
                    ),
                  };
                }),
            }}
          >
            <Space size={0}>
              <span
                className={`${prefix}-label`}
                style={{
                  marginLeft: 8,
                }}
              >
                {rangeLabel}
              </span>
              {simpleMode && isPlay && <div className={`${prefix}-play`}>{label}</div>}
            </Space>
          </Dropdown>
          {(!simpleMode || !isPlay) && (
            <span
              onClick={() => {
                setOpen(true);
              }}
            >
              {/* @ts-ignore  */}
              <DatePicker.RangePicker
                className={classNames(`${prefix}-picker`)}
                style={{
                  pointerEvents: 'none',
                  border: 0,
                }}
                format={v => {
                  // format 会影响布局，原先采用 v.year() === new Date().getFullYear() 进行判断，value 一共会传入三次(range0 range1 now), 会传入最新的时间导致判断异常
                  if (hideYear && isThisYear) {
                    return hideSecond
                      ? v.format(isCn ? DATE_TIME_FORMAT_CN : DATE_TIME_FORMAT)
                      : v.format(isCn ? DATE_TIME_SECOND_FORMAT_CN : DATE_TIME_SECOND_FORMAT);
                  }
                  return hideSecond
                    ? v.format(isCn ? YEAR_DATE_TIME_FORMAT_CN : YEAR_DATE_TIME_FORMAT)
                    : v.format(
                        isCn ? YEAR_DATE_TIME_SECOND_FORMAT_CN : YEAR_DATE_TIME_SECOND_FORMAT
                      );
                }}
                // @ts-ignore
                value={innerValue}
                onChange={datePickerChange}
                allowClear={false}
                size={size}
                suffixIcon={null}
                // 透传 props 到 antd Ranger
                {...omit(rest, 'value', 'onChange')}
              />
            </span>
          )}
        </div>
        <Radio.Group
          value={isPlay ? 'play' : ''}
          className={`${prefix}-playback-control`}
          buttonStyle="solid"
        >
          {hasRewind && (
            <Tooltip
              title={locale.jumpBack}
              getPopupContainer={trigger => trigger.parentNode as HTMLElement}
            >
              <Radio.Button
                value="stepBack"
                style={{
                  paddingInline: 8,
                  borderInlineStart: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onMouseEnter={() => setBackRadioFocused(true)}
                onMouseLeave={() => setBackRadioFocused(false)}
                onClick={() => {
                  if (isPlay) {
                    setIsPlay(false);
                  }

                  if (startTime && endTime) {
                    const newStartTime = (startTime as Dayjs)
                      .clone()
                      .subtract(differenceMs, 'milliseconds');
                    const newEndTime = startTime?.clone() as Dayjs;
                    rangeChange([newStartTime, newEndTime]);
                  }
                }}
              >
                <LeftOutlined />
              </Radio.Button>
            </Tooltip>
          )}
          {hasForward && (
            <Tooltip
              title={locale.jumpForward}
              getPopupContainer={trigger => trigger.parentNode as HTMLElement}
            >
              <Radio.Button
                value="stepForward"
                style={{
                  paddingInline: 8,
                  borderInlineStart: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                // disabled={isPlay}
                onClick={() => {
                  if (startTime && endTime) {
                    const newStartTime = endTime.clone() as Dayjs;
                    const newEndTime = (endTime as Dayjs).clone().add(differenceMs);

                    if (newEndTime.isBefore(new Date())) {
                      rangeChange([newStartTime, newEndTime]);
                    } else {
                      setIsPlay(true);
                      setNow();
                    }
                  }
                }}
              >
                <RightOutlined />
              </Radio.Button>
            </Tooltip>
          )}
        </Radio.Group>
      </Space>
      {hasSync && rangeName !== CUSTOMIZE && (
        <Button
          style={{ paddingInline: 8, color: token.colorTextSecondary }}
          onClick={() => {
            setNow();
          }}
        >
          <SyncOutlined />
        </Button>
      )}
      {hasZoomOut && (
        <Button
          disabled={!nextRangeItem}
          style={{ color: token.colorTextSecondary }}
          onClick={() => {
            setIsPlay(true);
            if (nextRangeItem) {
              setRangeName(nextRangeItem.name);
              rangeChange(nextRangeItem.range(isMoment ? moment() : dayjs()) as RangeValue);
              return;
            }
          }}
          icon={<ZoomOutOutlined />}
        />
      )}
    </Space>
  );
});

export default LocaleWrapper({
  componentName: 'DateRanger',
  defaultLocale: zhCN,
})(Ranger);
