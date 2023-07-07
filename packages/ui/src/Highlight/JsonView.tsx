import classNames from 'classnames';
import { useRef } from 'react';
import ReactJson from 'react-json-view';
import { getPrefix } from '../_util';

import type { HighlightProps } from '.';
import { THEME_DARK } from '.';
import { useKeyDownCopyEvent } from './useKeyDownCopyEvent';
// @ts-ignore
import './index.less';

export interface JsonViewProps extends HighlightProps {
  json: object;
}

export default ({
  json,
  theme,
  style,
  className,
  height,
  onCopyChange = () => {},
  copyable = true,
}: JsonViewProps) => {
  const prefixCls = getPrefix('highlight');

  const isDarkTheme = theme === THEME_DARK;

  const codeRef = useRef<HTMLDivElement>();

  useKeyDownCopyEvent(codeRef);

  return (
    <div
      style={style}
      ref={codeRef}
      // 让div支持focus能力
      tabIndex={-1}
      className={classNames(
        prefixCls,
        `${prefixCls}-json-view`,
        {
          [`${prefixCls}-light`]: !isDarkTheme,
        },
        className
      )}
    >
      <ReactJson
        enableClipboard={copyable && onCopyChange}
        src={json}
        theme={isDarkTheme ? 'ocean' : undefined}
        displayDataTypes={false}
        style={{ height }}
        name={false}
      />
    </div>
  );
};
