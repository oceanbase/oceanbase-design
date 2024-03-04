import { Button, DatePicker, Dropdown, Radio, Space, Tooltip, theme } from '@oceanbase/design';
import type { RangePickerProps } from '@oceanbase/design/es/date-picker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { findIndex, isNil, noop, omit } from 'lodash';
import type { Moment } from 'moment';
import moment from 'moment';
import classNames from 'classnames';
import { useInterval } from 'ahooks';
import React, { useEffect, useMemo, useRef, useState } from 'react';
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
} from './constant';
import './index.less';
import zhCN from './locale/zh-CN';
import type { RangeOption } from './typing';
import {
  LeftOutlined,
  PauseOutlined,
  CaretRightOutlined,
  RightOutlined,
  ZoomOutOutlined,
} from '@oceanbase/icons';
import InternalPickerPanel from './PickerPanel';

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
  hasForward?: boolean;
  hasZoomOut?: boolean;
  /** 是否只允许选择过去时间 */
  pastOnly?: boolean;
  //固定rangeName
  stickRangeName?: boolean;
  value?: RangeValue;
  defaultValue?: RangeValue;
  size?: 'small' | 'large' | 'middle';
}

const prefix = getPrefix('date-ranger');

const Ranger = (props: DateRangerProps) => {
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
    hasPlay = true,
    hasForward = true,
    hasZoomOut = true,
    pastOnly = false,
    onChange = noop,
    disabledDate,
    locale,
    size,
    //固定rangeName
    stickRangeName = false,
    ...rest
  } = props;

  const { token } = theme.useToken();

  // 是否为 moment 时间对象
  const isMoment =
    moment.isMoment(defaultValue?.[0]) ||
    moment.isMoment(defaultValue?.[1]) ||
    moment.isMoment(value?.[0]) ||
    moment.isMoment(value?.[1]);

  const [innerValue, setInnerValue] = useState<RangeValue>(value ?? defaultValue);

  const [rangeName, setRangeName] = useState(
    value || defaultValue ? CUSTOMIZE : defaultQuickValue ?? selects?.[0]?.name
  );

  const [open, setOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const refState = useRef({
    tooltipOpen,
  });
  refState.current.tooltipOpen = tooltipOpen;

  // 没有 selects 时，回退到普通 RangePicker, 当前时间选项为自定义时，应该显示 RangePicker
  const [isPlay, setIsPlay] = useState(rangeName !== CUSTOMIZE);

  const defaultInternalValue = useMemo(() => {
    return selects
      .find(item => item.name === rangeName)
      ?.range(isMoment ? moment() : dayjs()) as RangeValue;
  }, [defaultValue]);

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

  useEffect(() => {
    if (defaultInternalValue) {
      rangeChange(defaultInternalValue);
    }
  }, []);

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
  // const differenceQuarters = endTime?.diff(startTime as any, 'quarters');
  const differenceYears = endTime?.diff(startTime as any, 'years');

  const getCustomizeRangeLabel = () => {
    if (differenceYears > 0) {
      return `${differenceYears}y`;
    }

    // if (differenceQuarters > 0) {
    //   return `${differenceQuarters}q`;
    // }

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

  useInterval(
    () => {
      const selected = NEAR_TIME_LIST.find(item => item.name === rangeName);
      if (selected?.range) {
        rangeChange(selected.range(isMoment ? moment() : dayjs()) as RangeValue);
      }
      if (rangeName === CUSTOMIZE) {
        const eTime = isMoment ? moment() : dayjs();
        rangeChange([(eTime as Dayjs)?.subtract(differenceMs), eTime] as RangeValue);
      }
    },
    isPlay ? 1000 : null
  );

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
    <Space size={4} className={classNames(prefix)} style={rest.style}>
      <div className={`${prefix}-wrapper`}>
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
          menu={{
            items: [
              ...selects,
              {
                name: CUSTOMIZE,
                rangeLabel: '自定义',
                label: '自定义时间',
              },
            ]
              .filter(item => {
                return !!item;
              })
              .map(item => {
                return {
                  key: item.name,
                  label:
                    item.name === CUSTOMIZE ? (
                      <Tooltip
                        open={tooltipOpen}
                        arrow={false}
                        onOpenChange={o => {
                          if (o) {
                            setTooltipOpen(true);
                          }
                        }}
                        placement="right"
                        overlayStyle={{
                          maxWidth: 'none',
                        }}
                        overlayInnerStyle={{
                          background: '#fff',
                        }}
                        title={
                          <InternalPickerPanel
                            // @ts-ignore
                            locale={locale.rcPicker}
                            isMoment={isMoment}
                            onOk={vList => {
                              setIsPlay(false);
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
                        }
                      >
                        <Space size={8} style={isPlay ? {} : { width: 310 }}>
                          <span className={`${prefix}-label`}>{item.rangeLabel}</span>
                          {/* @ts-ignore */}
                          {locale[item.label] || item.label}
                        </Space>
                      </Tooltip>
                    ) : (
                      <Space
                        size={8}
                        style={isPlay ? {} : { width: 310 }}
                        onClick={() => {
                          const rName = item.name;
                          handleNameChange(rName);

                          const selected = NEAR_TIME_LIST.find(_item => _item.name === rName);
                          // 存在快捷选项切换为极简模式
                          if (selected?.range) {
                            setIsPlay(true);
                            rangeChange(
                              selected.range(isMoment ? moment() : dayjs()) as RangeValue
                            );
                          }
                        }}
                      >
                        <span className={`${prefix}-label`}>{item.rangeLabel}</span>
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
            {isPlay && <div className={`${prefix}-play`}>{label}</div>}
          </Space>
        </Dropdown>
        {!isPlay && (
          <span
            onClick={() => {
              setOpen(true);
            }}
          >
            {/* @ts-ignore  */}
            <DatePicker.RangePicker
              className={`${prefix}-range-picker`}
              style={{
                pointerEvents: 'none',
              }}
              disabledDate={pastOnly ? disabledFuture : disabledDate}
              format={v => {
                // format 会影响布局，原先采用 v.year() === new Date().getFullYear() 进行判断，value 一共会传入三次(range0 range1 now), 会传入最新的时间导致判断异常
                return isThisYear ? v.format(DATE_TIME_FORMAT) : v.format(YEAR_DATE_TIME_FORMAT);
              }}
              // @ts-ignore
              defaultValue={defaultValue}
              // @ts-ignore
              value={innerValue || defaultInternalValue}
              onChange={datePickerChange}
              showTime={true}
              allowClear={false}
              size={size}
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
          <Radio.Button
            value="stepBack"
            style={{ paddingInline: 8 }}
            onClick={() => {
              if (isPlay) {
                setIsPlay(false);
              }

              if (startTime && endTime) {
                const newStartTime = (startTime as Dayjs).subtract(differenceMs);
                const newEndTime = startTime?.clone() as Dayjs;

                rangeChange([newStartTime, newEndTime]);
              }
            }}
          >
            <LeftOutlined />
          </Radio.Button>
        )}
        {hasPlay && (
          <Radio.Button
            value={'play'}
            style={{ paddingInline: 8 }}
            onClick={() => {
              const newPlay = !isPlay;
              setIsPlay(newPlay);
            }}
          >
            {isPlay ? <PauseOutlined /> : <CaretRightOutlined />}
          </Radio.Button>
        )}
        {hasForward && (
          <Radio.Button
            value="stepForward"
            style={{ paddingInline: 8 }}
            disabled={isPlay}
            onClick={() => {
              if (startTime && endTime) {
                const newStartTime = endTime.clone() as Dayjs;
                const newEndTime = (endTime as Dayjs).add(differenceMs);

                if (newEndTime.isBefore(new Date())) {
                  rangeChange([newStartTime, newEndTime]);
                } else {
                  setIsPlay(true);
                }
              }
            }}
          >
            <RightOutlined />
          </Radio.Button>
        )}
      </Radio.Group>
      {hasZoomOut && (
        <Button
          disabled={!nextRangeItem}
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
};

export default LocaleWrapper({
  componentName: 'DateRanger',
  defaultLocale: zhCN,
})(Ranger);
