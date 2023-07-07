import { TinyColor } from '@ctrl/tinycolor';
import { css } from '@emotion/react';
import getAlphaColor from 'antd/es/theme/util/getAlphaColor';
import RcFooter from 'rc-footer';
import React, { useContext } from 'react';
import useLocale from '../../../hooks/useLocale';
import useSiteToken from '../../../hooks/useSiteToken';
import SiteContext from '../SiteContext';
import AdditionalInfo from './AdditionalInfo';

const locales = {
  cn: {
    owner: 'OceanBase',
  },
  en: {
    owner: 'OceanBase',
  },
};

const useStyle = () => {
  const { token } = useSiteToken();
  const { isMobile } = useContext(SiteContext);
  const background = new TinyColor(getAlphaColor('#f0f3fa', '#fff'))
    .onBackground(token.colorBgContainer)
    .toHexString();

  return {
    holder: css`
      background: ${background};
    `,

    footer: css`
      background: ${background};
      color: ${token.colorTextSecondary};
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: ${token.colorText};
      }

      .rc-footer-container {
        display: none;
      }

      .rc-footer-column {
        margin-bottom: ${isMobile ? 60 : 0}px;
        :last-child {
          margin-bottom: ${isMobile ? 20 : 0}px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: ${token.marginXXL}px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: ${token.fontSize}px;
        }
      }
    `,
  };
};

const Footer: React.FC = () => {
  const [locale] = useLocale(locales);
  const style = useStyle();

  const { token } = useSiteToken();

  return (
    <>
      <RcFooter
        columns={[]}
        css={style.footer}
        bottom={
          <div style={{ color: token.colorTextTertiary }}>
            Made by <a href="https://www.oceanbase.com">{locale.owner}</a> and powered by{' '}
            <a href="https://ant.design">Ant Design</a>
          </div>
        }
      />
      <AdditionalInfo />
    </>
  );
};

export default Footer;
