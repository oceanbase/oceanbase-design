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
