import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '@oceanbase/design';
import { FooterToolbar } from '@oceanbase/ui';
import type { FooterToolbarProps } from '@oceanbase/ui';

const FooterToolbarTest: React.FC<FooterToolbarProps> = ({ children, ...restProps }) => (
  <div>
    <FooterToolbar extra="Some extra message" {...restProps}>
      {children || (
        <>
          <Button>Cancel</Button>
          <Button type="primary">Ok</Button>
        </>
      )}
    </FooterToolbar>
  </div>
);

describe('FooterToolbar', () => {
  it('render', () => {
    const { asFragment } = render(<FooterToolbarTest />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('portalDom is true', () => {
    const { asFragment } = render(<FooterToolbarTest portalDom={true} />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
