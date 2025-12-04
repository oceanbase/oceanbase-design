import { Badge, Space } from '@oceanbase/design';
import { css } from '@emotion/react';
import { Link, useLocation } from 'dumi';
import * as React from 'react';
import useSiteToken from '../../../hooks/useSiteToken';
import * as utils from '../../utils';

const useStyle = () => {
  const { token } = useSiteToken();

  const { headerHeight, colorTextHeading, fontFamily, mobileMaxWidth } = token;

  return {
    logo: css`
      height: ${headerHeight}px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: ${colorTextHeading};
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, ${fontFamily}, sans-serif;
      line-height: ${headerHeight}px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: ${colorTextHeading};
      }

      img {
        height: 24px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: ${mobileMaxWidth}px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `,
    title: css`
      line-height: 32px;
    `,
  };
};

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}

const Logo: React.FC<LogoProps> = ({ isZhCN }) => {
  const { search } = useLocation();
  const { logo, title } = useStyle();
  return (
    <h1>
      <Link
        to={utils.getLocalizedPathname('/', isZhCN, search)}
        css={logo}
        style={{ textDecoration: 'none' }}
      >
        <img
          src="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*d_ZTR7sdVzAAAAAAAAAAAAAADvSFAQ/original"
          alt="logo"
        />
        <Space>
          <span css={title}>OceanBase Design</span>
        </Space>
      </Link>
    </h1>
  );
};

export default Logo;
