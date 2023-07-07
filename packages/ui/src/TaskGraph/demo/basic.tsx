/**
 * iframe: 600
 */
import { message } from '@oceanbase/design';
import { TaskGraph } from '@oceanbase/ui';

export default () => {
  const data = {
    nodes: [
      {
        description: 'Empty task',
        id: '4156363',
        name: 'Empty task',
        status: 'SUCCESSFUL',
      },
      {
        description: 'Clean observer',
        id: '4156364',
        name: 'Clean observer',
        status: 'RUNNING',
      },
      {
        description: 'Remove standby cluster',
        id: '4156365',
        name: 'Remove standby cluster',
        status: 'SUCCESSFUL',
      },
      {
        description: 'Unreserve host',
        id: '4156366',
        name: 'Unreserve host',
        status: 'PENDING',
      },
      {
        description: 'Clean observer',
        id: '4156367',
        name: 'Clean observer',
        status: 'FAILED',
      },
      {
        description: 'Delete cluster info',
        id: '4156368',
        name: 'Delete cluster info',
        status: 'PENDING',
      },
      {
        description: 'Stop obagent',
        id: '4156369',
        name: 'Stop obagent',
        status: 'SUCCESSFUL',
      },
      {
        description: 'Prepare delete cluster',
        id: '4156370',
        name: 'Prepare delete cluster',
        status: 'SUCCESSFUL',
      },
      {
        description: 'Stop obagent',
        id: '4156371',
        name: 'Stop obagent',
        status: 'SUCCESSFUL',
      },
    ],
    edges: [
      { source: '4156369', target: '4156363' },
      { source: '4156371', target: '4156363' },
      { source: '4156363', target: '4156364' },
      { source: '4156363', target: '4156367' },
      { source: '4156364', target: '4156368' },
      { source: '4156370', target: '4156365' },
      { source: '4156365', target: '4156369' },
      { source: '4156365', target: '4156371' },
      { source: '4156368', target: '4156366' },
      { source: '4156367', target: '4156368' },
    ],
  };
  return (
    <TaskGraph
      data={data}
      onMenuClick={key => message.success(`你点击了 ${key}`)}
      subTaskLog="This is log"
    />
  );
};
