import * as React from 'react';
import { Typography, Carousel } from '@oceanbase/design';
import { ArrowRightOutlined } from '@oceanbase/icons';
import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { Link } from 'dumi';
import type { Extra, Icon } from './util';
import useSiteToken from '../../../hooks/useSiteToken';
import SiteContext from '../../../theme/slots/SiteContext';
import { useCarouselStyle } from './util';

const useStyle = () => {
  const { token } = useSiteToken();
  const { carousel } = useCarouselStyle();

  return {
    itemBase: css`
      display: flex;
      flex: 1 1 0;
      flex-direction: column;
      align-items: stretch;
      text-decoration: none;
      background: ${token.colorBgContainer};
      border: ${token.lineWidth}px solid ${token.colorBorderSecondary};
      border-radius: ${token.borderRadiusLG}px;
      transition: all ${token.motionDurationSlow};
      padding-block: ${token.paddingMD}px;
      padding-inline: ${token.paddingLG}px;
      margin-bottom: 200px;
    `,
    cardItem: css`
      width: 33%;
      ${token.iconCls} {
        visibility: hidden;
        display: block;
        text-align: right;
        color: ${token.colorIcon};
      }
      &:hover {
        box-shadow: ${token.boxShadowSecondary};
        ${token.iconCls} {
          visibility: visible;
        }
      }
    `,
    sliderItem: css`
      margin: 0 ${token.margin}px;
      text-align: start;
    `,
    container: css`
      display: flex;
      max-width: 1208px;
      margin-inline: auto;
      box-sizing: border-box;
      padding-inline: ${token.marginXXL}px;
      column-gap: ${token.paddingMD * 2}px;
      align-items: stretch;
      text-align: start;
    `,
    carousel,
  };
};

interface RecommendItemProps {
  item: {
    key: string;
    title: string;
    description: string;
    href: string;
  };
  itemCss: SerializedStyles;
}
const RecommendItem = ({ item, itemCss }: RecommendItemProps) => {
  const style = useStyle();

  return (
    <Link key={item.key} to={item.href} css={[style.itemBase, itemCss]} rel="noreferrer">
      <Typography.Title level={5}>{item?.title}</Typography.Title>
      <Typography.Paragraph type="secondary" style={{ flex: 'auto' }}>
        {item.description}
      </Typography.Paragraph>
      <ArrowRightOutlined />
    </Link>
  );
};

export interface BannerRecommendsProps {
  extras?: Extra[];
  icons?: Icon[];
}

export default function BannerRecommends({}: BannerRecommendsProps) {
  const styles = useStyle();
  const { isMobile } = React.useContext(SiteContext);

  const items = [
    {
      key: 'components',
      title: '🌈 基础组件',
      description: '基于 Ant Design 定制和扩展，形成 OceanBase 自有的视觉和交互风格',
      href: '/components/button',
    },
    {
      key: 'biz-components',
      title: '📦 业务组件',
      description: '从业务中来，提炼自 OceanBase 各个产品的通用能力',
      href: '/biz-components/basic-layout',
    },
    {
      key: 'charts',
      title: '📈 可视化图表',
      description: '基于 Ant Design Charts 定制和扩展，是 OceanBase 的图表最佳实践',
      href: '/charts/stat',
    },
  ];

  return (
    <div>
      {isMobile ? (
        <Carousel css={styles.carousel}>
          {items.map(item => (
            <RecommendItem item={item} itemCss={styles.sliderItem} />
          ))}
        </Carousel>
      ) : (
        <div css={styles.container}>
          {items.map(item => (
            <RecommendItem item={item} itemCss={styles.cardItem} />
          ))}
        </div>
      )}
    </div>
  );
}
