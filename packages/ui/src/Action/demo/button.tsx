import { Action } from '@oceanbase/ui';

export default () => {
  return (
    <Action.Group moreText={'更多操作'}>
      <Action.Button type="primary">action1</Action.Button>
      <Action.Button danger>危险按钮</Action.Button>
      <Action.Button>action3</Action.Button>
      <Action.Button>action4</Action.Button>
      <Action.Button>action5</Action.Button>
    </Action.Group>
  );
};
