import { css } from '@emotion/react';
import { Button, Space, Typography } from '@oceanbase/design';
import { GithubOutlined, RocketOutlined } from '@oceanbase/icons';
import { Link } from 'dumi';
import * as React from 'react';
import useLocale from '../../../hooks/useLocale';
import useSiteToken from '../../../hooks/useSiteToken';
import SiteContext from '../../../theme/slots/SiteContext';
import { GroupMask } from './Group';

const locales = {
  cn: {
    slogan:
      '基于 Ant Design 进行延展和二次开发的企业级设计系统，助力 OceanBase 生态，帮助设计开发者快速搭建具备「专业感」的产品～',
    start: '开始使用',
  },
  en: {
    slogan:
      'An enterprise-class design system based on Ant Design and extending it. Help OceanBase ecology and designers/developers building professional products',
    start: 'Getting Started',
  },
};

const useStyle = () => {
  const { token } = useSiteToken();
  const { isMobile } = React.useContext(SiteContext);

  return {
    titleBase: css`
      h1& {
        font-family: AliPuHui;
        background-image: linear-gradient(-225deg, #ffa005 0%, #0181fd 48%, #07c846 100%);
        -webkit-background-clip: text;
        color: transparent;
      }
    `,
    title: isMobile
      ? css`
          h1& {
            margin-bottom: ${token.margin}px;
            font-weight: normal;
            font-size: ${token.fontSizeHeading1 + 2}px;
            line-height: ${token.lineHeightHeading2};
          }
        `
      : css`
          h1& {
            margin-bottom: ${token.marginMD}px;
            font-weight: 900;
            font-size: 68px;
          }
        `,
  };
};

export interface BannerProps {
  children?: React.ReactNode;
}

export default function Banner({ children }: BannerProps) {
  const [locale] = useLocale(locales);
  const { token } = useSiteToken();
  const styles = useStyle();
  const { isMobile } = React.useContext(SiteContext);

  return (
    <div
      style={{
        position: 'relative',
        background: token.colorBgContainer,
      }}
    >
      {/* Image Bottom Right */}
      <img
        style={{ position: 'absolute', right: 0, top: 240, width: 240 }}
        src="https://gw.alipayobjects.com/zos/bmw-prod/b3b8dc41-dce8-471f-9d81-9a0204f27d03.svg"
        alt="OceanBase Design"
      />

      <GroupMask
        style={{
          textAlign: 'center',
          paddingTop: token.marginFar - 16 + 50,
          background: token.colorBgContainer,
        }}
      >
        {/* Image Left Top */}
        <img
          style={{ position: 'absolute', left: isMobile ? -120 : 0, top: 0, width: 240 }}
          src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
          alt="bg"
        />
        {/* Image Right Top */}
        <img
          style={{ position: 'absolute', right: isMobile ? 0 : 120, top: 0, width: 240 }}
          src="https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg"
          alt="bg"
        />

        <Typography.Title level={1} css={[styles.titleBase, styles.title]}>
          OceanBase Design
        </Typography.Title>
        <Typography.Paragraph
          style={{
            fontSize: isMobile ? token.fontSizeHeading5 - 2 : token.fontSizeHeading5,
            lineHeight: isMobile ? token.lineHeightSM : token.lineHeightHeading5,
            marginBottom: token.marginMD * 2,
            padding: isMobile ? `0 ${token.paddingLG + 2}px` : 0,
          }}
        >
          <div>{locale.slogan}</div>
        </Typography.Paragraph>

        <Space size="middle" style={{ marginBottom: token.marginFar }}>
          <Link to="/docs/design-introduce">
            <Button size="large" type="primary" icon={<RocketOutlined />}>
              {locale.start}
            </Button>
          </Link>
          <a href="https://github.com/oceanbase/oceanbase-design" target="_blank">
            <Button size="large" icon={<GithubOutlined />}>
              GitHub
            </Button>
          </a>
        </Space>
        {children}
      </GroupMask>
    </div>
  );
}
