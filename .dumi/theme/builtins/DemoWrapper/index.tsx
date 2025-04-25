import React, { useContext } from 'react';
import { DumiDemoGrid, FormattedMessage } from 'dumi';
import { Tooltip } from '@oceanbase/design';
import { BugFilled, BugOutlined, CodeFilled, CodeOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import DemoContext from '../../slots/DemoContext';
import useLayoutState from '../../../hooks/useLayoutState';

const DemoWrapper: typeof DumiDemoGrid = ({ items }) => {
  const { showDebug, setShowDebug } = useContext(DemoContext);

  const [expandAll, setExpandAll] = useLayoutState(false);

  const expandTriggerClass = classNames('code-box-expand-trigger', {
    'code-box-expand-trigger-active': expandAll,
  });

  const handleVisibleToggle = () => {
    setShowDebug?.(!showDebug);
  };

  const handleExpandToggle = () => {
    setExpandAll(!expandAll);
  };

  const demos = React.useMemo(
    () =>
      items.reduce(
        (acc, item) => {
          const { previewerProps } = item;
          const { debug } = previewerProps;

          if (debug && !showDebug) return acc;

          return acc.concat({
            ...item,
            previewerProps: {
              ...previewerProps,
              defaultShowCode: expandAll,
              /**
               * extra marker for the original debug
               */
              originDebug: debug,
            },
          });
        },
        [] as typeof items
      ),
    [expandAll, showDebug]
  );

  return (
    <div className="demo-wrapper">
      <span className="all-code-box-controls">
        <Tooltip
          title={
            <FormattedMessage id={`app.component.examples.${expandAll ? 'collapse' : 'expand'}`} />
          }
        >
          {expandAll ? (
            <CodeFilled className={expandTriggerClass} onClick={handleExpandToggle} />
          ) : (
            <CodeOutlined className={expandTriggerClass} onClick={handleExpandToggle} />
          )}
        </Tooltip>
        <Tooltip
          title={
            <FormattedMessage
              id={showDebug ? 'app.component.examples.hide' : 'app.component.examples.visible'}
            />
          }
        >
          {showDebug ? (
            <BugFilled className={expandTriggerClass} onClick={handleVisibleToggle} />
          ) : (
            <BugOutlined className={expandTriggerClass} onClick={handleVisibleToggle} />
          )}
        </Tooltip>
      </span>
      {/* FIXME: find a new way instead of `key` to trigger re-render */}
      <DumiDemoGrid items={demos} key={`${expandAll}${showDebug}`} />
    </div>
  );
};

export default DemoWrapper;
