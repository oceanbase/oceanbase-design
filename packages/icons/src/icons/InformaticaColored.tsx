// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InformaticaColoredSvg from '../asn/InformaticaColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InformaticaColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InformaticaColoredSvg} />;

InformaticaColored.displayName = 'InformaticaColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InformaticaColored);