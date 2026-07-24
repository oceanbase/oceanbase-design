import * as React from 'react';
import { Typography, Carousel } from '@oceanbase/design';
import { ArrowRightOutlined } from '@oceanbase/icons';
import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { Link, useLocation } from 'dumi';
import useLocale from '../../../hooks/useLocale';
import * as utils from '../../../theme/utils';
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
    path: string;
  };
  itemCss: SerializedStyles;
  getHref: (path: string) => string;
}
const RecommendItem = ({ item, itemCss, getHref }: RecommendItemProps) => {
  const style = useStyle();

  return (
    <Link key={item.key} to={getHref(item.path)} css={[style.itemBase, itemCss]} rel="noreferrer">
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

const recommendLocales = {
  cn: [
    {
      key: 'components',
      title: '🌈 基础组件',
      description: '基于 Ant Design 定制和扩展，形成 OceanBase 自有的视觉和交互风格',
      path: '/components/button',
    },
    {
      key: 'biz-components',
      title: '📦 业务组件',
      description: '从业务中来，提炼自 OceanBase 各个产品的通用能力',
      path: '/biz-components/basic-layout',
    },
    {
      key: 'charts',
      title: '📈 可视化图表',
      description: '基于 Ant Design Charts 定制和扩展，是 OceanBase 的图表最佳实践',
      path: '/charts/stat',
    },
  ],
  en: [
    {
      key: 'components',
      title: '🌈 Components',
      description:
        'Customized and extended from Ant Design to form OceanBase visual and interaction style',
      path: '/components/button',
    },
    {
      key: 'biz-components',
      title: '📦 Biz Components',
      description:
        'Born from business, distilled from common capabilities across OceanBase products',
      path: '/biz-components/basic-layout',
    },
    {
      key: 'charts',
      title: '📈 Charts',
      description:
        'Customized and extended from Ant Design Charts — OceanBase chart best practices',
      path: '/charts/stat',
    },
  ],
};

export default function BannerRecommends(_props: BannerRecommendsProps) {
  const styles = useStyle();
  const { isMobile } = React.useContext(SiteContext);
  const [, localeType] = useLocale();
  const { search } = useLocation();
  const isZhCN = localeType === 'cn';
  const getHref = (path: string) => utils.getLocalizedPathname(path, isZhCN, search).pathname;

  const items = recommendLocales[localeType];

  return (
    <div>
      {isMobile ? (
        <Carousel css={styles.carousel}>
          {items.map(item => (
            <RecommendItem
              key={item.key}
              item={item}
              itemCss={styles.sliderItem}
              getHref={getHref}
            />
          ))}
        </Carousel>
      ) : (
        <div css={styles.container}>
          {items.map(item => (
            <RecommendItem key={item.key} item={item} itemCss={styles.cardItem} getHref={getHref} />
          ))}
        </div>
      )}
    </div>
  );
}
