import { debounce } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import type { DialogProps } from '../Dialog';
import Dialog from '../Dialog';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import zhCN from './locale/zh-CN';

const DEFAULT_EMBDED_WIDTH = 0.4;
const MAX_EMBED_WIDTH = 0.5;
const MIN_EMBED_WIDTH = 0.3;
const DEFAULT_MOBILE_CLIENT_WIDTH = 1280;
const DEFAULT_TOP_HEIGHT = 0;

interface DialogConfig {
  height?: number;
  width?: number;
  top?: number;
  left?: number;
  min?: [number, number];
  max?: [number, number];
}

export interface DocDialogProps extends LocaleWrapperProps {
  className?: string;
  title?: string;
  fallbackUrl: string;
  docUrls?: Record<string, string>;
  embedConfig?: DialogConfig;
  normalConfig?: DialogConfig;
  normalModeWidth?: number;
  defautTop?: number;
  visible: boolean;
  setRootWidth: (newWidth: string) => void;
  setVisible: (payload: boolean) => void;
}

const DocDialogComp = (props: DocDialogProps) => {
  const {
    fallbackUrl,
    docUrls,
    visible,
    setRootWidth,
    setVisible,
    title,
    defautTop = DEFAULT_TOP_HEIGHT,
    className,
    normalModeWidth = DEFAULT_MOBILE_CLIENT_WIDTH,
    embedConfig = {},
    normalConfig = {},
  } = props;
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const location = window.location;

  const currentLink = useMemo(() => {
    const { pathname } = location;
    const link = Object.entries(docUrls).find(set => pathname.indexOf(set[0]) > -1);
    return link?.[1] ?? fallbackUrl;
  }, [location, docUrls, fallbackUrl]);

  const handleResize = debounce(() => {
    setClientWidth(document.body.clientWidth);
    setClientHeight(document.body.clientHeight);
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const DialogProps = useMemo(() => {
    const maxDialogHeight = clientHeight - defautTop;

    let result: DialogProps = {
      className,
      visible,
      title,
      onClose: () => setVisible(false),
      clientWidth: clientWidth,
      clientHeight: clientHeight,
      draggable: true,
      extLink: { link: currentLink },
    };
    if (clientWidth >= normalModeWidth) {
      result = {
        ...result,
        setRootWidth,
        max: [MAX_EMBED_WIDTH * clientWidth, maxDialogHeight],
        min: [MIN_EMBED_WIDTH * clientWidth, maxDialogHeight],
        width: DEFAULT_EMBDED_WIDTH * clientWidth,
        height: maxDialogHeight,
        top: defautTop,
        left: (1 - DEFAULT_EMBDED_WIDTH) * clientWidth,
        ...embedConfig,
        isEmbed: true,
      };
    } else {
      result = {
        ...result,
        max: [clientWidth, maxDialogHeight],
        width: DEFAULT_EMBDED_WIDTH * clientWidth,
        height: maxDialogHeight,
        enableMaximization: false,
        top: clientHeight - defautTop,
        ...normalConfig,
        isEmbed: false,
      };
    }
    return result;
  }, [
    defautTop,
    className,
    embedConfig,
    normalConfig,
    normalModeWidth,
    currentLink,
    title,
    clientWidth,
    clientHeight,
    visible,
    setRootWidth,
    setVisible,
  ]);

  return (
    <div>
      <Dialog {...DialogProps}>
        <iframe src={currentLink} />
      </Dialog>
    </div>
  );
};

export default LocaleWrapper({
  componentName: 'DocDialog',
  defaultLocale: zhCN,
})(DocDialogComp);
