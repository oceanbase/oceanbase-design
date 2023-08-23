import React from 'react';
import { toString } from 'lodash';
import { calculateFontSize } from '../util/measureText';
import './index.less';

export interface ScoreConfig {
  size?: number | string;
  color?: string;
  value: number;
  valueStyle?: React.CSSProperties;
  unit?: string | boolean;
  unitStyle?: React.CSSProperties;
}

const prefixCls = 'ob-score';
const smallSize = 120;
const middleSize = 160;
const largeSize = 200;
const LINE_HEIGHT = 1.2;
const VALUE_FONT_WEIGHT = 500;

const firstColor = '#6caf4b';
const secondColor = '#3f82e0';
const thirdColor = '#ff8303';
const fourthlyColor = '#de5c51';

const Score: React.FC<ScoreConfig> = ({
  size,
  color,
  value,
  valueStyle,
  unit,
  unitStyle,
  ...restConfig
}) => {
  const showUnit = unit === false ? null : unit || '分';

  let currentColor = '';
  if (color) {
    currentColor = color;
  } else if (value >= 85) {
    currentColor = firstColor;
  } else if (value < 85 && value >= 70) {
    currentColor = secondColor;
  } else if (value < 70 && value >= 60) {
    currentColor = thirdColor;
  } else {
    currentColor = fourthlyColor;
  }

  const bgColorStyle: React.CSSProperties = {
    backgroundColor: currentColor
  }

  const fontColorStyle: React.CSSProperties = {
    color: currentColor
  }

  let style: React.CSSProperties = {};
  if (typeof size === 'string') {
    switch (size) {
      case 'small':
        style = {
          width: smallSize,
          height: smallSize,
        }
        break;
      case 'large':
        style = {
          width: largeSize,
          height: largeSize,
        }
        break;
      case 'large':
        style = {
          width: middleSize,
          height: middleSize,
        }
        break;
      default:
        style = {
          width: size,
          height: size,
        }
        break
    }
  } else if (typeof size === 'number') {
    style = {
      width: size,
      height: size,
    }
  } else {
    style = {
      width: middleSize,
      height: middleSize,
    }
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
    <div
      className={`${prefixCls}-container`}
      style={{ ...style }}
      {...restConfig}
    >
      <div className={`${prefixCls}-background-first`} style={{ ...bgColorStyle }} />
      <div className={`${prefixCls}-background-second`} style={{ ...bgColorStyle }} />
      <div className={`${prefixCls}-circle`}>
        <div className={`${prefixCls}-circle-content`}>
          <span className={`${prefixCls}-value`} style={{ fontSize: `${numberFontSize}px`, ...fontColorStyle, ...(valueStyle || {}) }} >{value || 0}</span>
          {showUnit ? <span className={`${prefixCls}-unit`} style={{ fontSize: `${unitFontSize}px`, marginLeft: style.width * 0.04, ...fontColorStyle, ...(unitStyle || {}) }} >{showUnit}</span> : null}
        </div>
      </div>
    </div>
  );
};

export default Score;
