import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group
      shouldDisabled={key => key === 'action2'}
      shouldVisible={key => key !== 'action1'}
    >
      <Action.Link key="action1">action1</Action.Link>
      <Action.Link key="action2">action2</Action.Link>
      <Action.Link key="action3">action3</Action.Link>
      <Action.Link key="action4">action4</Action.Link>
      <Action.Link key="action5">action5</Action.Link>
    </Action.Group>
  );
};
