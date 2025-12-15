import React from 'react';
import {
  Common,
  Demo,
  HeadingAnchor,
  Highlight,
  Icon,
  IconPickSearcher,
  Markdown,
  NProgress,
  PreviewImage,
  Reset,
  Responsive,
  SearchBar,
  InlineCard,
} from './styles';
// 导入 shadcn 样式
import '@oceanbase/shadcn/style/index.css';

const GlobalStyles = () => (
  <>
    <Reset />
    <Common />
    <Markdown />
    <Highlight />
    <Demo />
    <Icon />
    <IconPickSearcher />
    <Responsive />
    <NProgress />
    <PreviewImage />
    <InlineCard />
    <HeadingAnchor />
    <SearchBar />
  </>
);

export default GlobalStyles;
