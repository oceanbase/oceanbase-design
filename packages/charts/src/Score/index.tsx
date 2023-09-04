import React from 'react';
import { calculateFontSize } from '../util/measureText';
import classNames from 'classnames';
import { sortByNumber } from '@oceanbase/util';
import { toNumber, toString } from 'lodash';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import './index.less';

export interface ScoreConfig {
  size?: string | number;
  color?: string;
  value: number;
  valueStyle?: React.CSSProperties;
  unit?: string;
  unitStyle?: React.CSSProperties;

  thresholds?: Record<string, string>;
  theme?: Theme;
  className?: string;
}

const prefixCls = 'ob-score';
const smallSize = 120;
const middleSize = 160;
const largeSize = 200;
const LINE_HEIGHT = 1.2;
const VALUE_FONT_WEIGHT = 500;

const Score: React.FC<ScoreConfig> = ({
  size,
  color,
  value,
  valueStyle,
  unit,
  unitStyle,
  thresholds = {},
  className,
  theme,
  ...restConfig
}) => {
  const themeConfig = useTheme(theme);

  const successColor = themeConfig.semanticGreen;
  const infoColor = themeConfig.defaultColor;
  const warningColor = themeConfig.semanticYellow;
  const errorColor = themeConfig.semanticRed;

  let currentColor = '';
  if (color) {
    currentColor = color;
  } else if (value >= 85) {
    currentColor = successColor;
  } else if (value < 85 && value >= 70) {
    currentColor = infoColor;
  } else if (value < 70 && value >= 60) {
    currentColor = warningColor;
  } else {
    currentColor = errorColor;
  }

  const showUnit = unit === '' ? null : unit || '分';

  const thresholdList = Object.keys(thresholds)
    .map(key => ({
      value: toNumber(key),
      color: thresholds[key],
    }))
    .sort((a, b) => sortByNumber(a, b, 'value'));
  currentColor =
    thresholdList.find(
      (item, index) =>
        !value ||
        (value >= item.value &&
          (!thresholdList[index + 1] || value < thresholdList[index + 1]?.value))
    )?.color || currentColor;

  const bgColorStyle: React.CSSProperties = {
    backgroundColor: currentColor,
  };

  const fontColorStyle: React.CSSProperties = {
    color: currentColor,
  };

  let style: React.CSSProperties = {};
  if (size) {
    switch (size) {
      case 'small':
        style = {
          width: smallSize,
          height: smallSize,
        };
        break;
      case 'middle':
        style = {
          width: middleSize,
          height: middleSize,
        };
        break;
      case 'large':
        style = {
          width: largeSize,
          height: largeSize,
        };
        break;
      default:
        style = {
          width: size,
          height: size,
        };
        break;
    }
  } else {
    style = {
      width: middleSize,
      height: middleSize,
    };
  }

  const numberFontSize = calculateFontSize(
    toString(value),
    style.width * 0.33,
    style.height * 0.33,
    LINE_HEIGHT,
    undefined,
    VALUE_FONT_WEIGHT
  );

  const unitFontSize = calculateFontSize(
    toString(unit),
    style.width * 0.08,
    style.height * 0.08,
    LINE_HEIGHT,
    undefined,
    VALUE_FONT_WEIGHT
  );

  return (
    <div className={classNames(`${prefixCls}-container`, className)} style={style} {...restConfig}>
      <div className={`${prefixCls}-background-first`} style={bgColorStyle} />
      <div className={`${prefixCls}-background-second`} style={bgColorStyle} />
      <div
        className={`${prefixCls}-circle`}
        style={{
          backgroundColor: themeConfig.backgroundColor,
        }}
      >
        <div className={`${prefixCls}-circle-content`}>
          <span
            className={`${prefixCls}-value`}
            style={{ fontSize: `${numberFontSize}px`, ...fontColorStyle, ...(valueStyle || {}) }}
          >
            {value || 0}
          </span>
          {showUnit ? (
            <span
              className={`${prefixCls}-unit`}
              style={{
                fontSize: `${unitFontSize}px`,
                marginLeft: style.width * 0.04,
                ...fontColorStyle,
                ...(unitStyle || {}),
              }}
            >
              {showUnit}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Score;
