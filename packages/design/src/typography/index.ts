import { Typography as OriginTypography } from 'antd';
import Text from './Text';
import Link from './Link';
import Title from './Title';
import Paragraph from './Paragraph';

export * from 'antd/es/typography';
export * from 'antd/es/typography/Base';
export * from 'antd/es/typography/Text';
export * from 'antd/es/typography/Paragraph';
export * from 'antd/es/typography/Link';
export * from 'antd/es/typography/Title';

// 覆盖 antd 的 CopyConfig，增加 OceanBase 扩展的 hover 配置
export type { CopyConfig, Copyable } from '../_util/getCopyableConfig';

export type TypographyType = typeof OriginTypography & {
  Text: typeof Text;
  Link: typeof Link;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

const Typography = OriginTypography as TypographyType;

Typography.Text = Text;
Typography.Link = Link;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export default Typography;
