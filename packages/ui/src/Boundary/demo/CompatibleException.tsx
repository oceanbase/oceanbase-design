import { Boundary } from '@oceanbase/ui';

export default () => {
  return (
    <Boundary.Exception isNotCompatible={true}>
      <div>兼容性兜底</div>
    </Boundary.Exception>
  );
};
