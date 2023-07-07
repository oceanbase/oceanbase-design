export interface ConfigType {
  title: string;
  imageUrl: string;
  buttonText?: string;
  onClick?: () => void;
}

export type FunctionConfigType = Record<string, ConfigType>;
export type FunctionStateType = keyof FunctionConfigType;

export type CodeType = 404 | 403;
export type CodePresetType = Record<CodeType, ConfigType>;

export const CODE_PRESET = (locale): CodePresetType => {
  return {
    404: {
      title: locale.noPage,
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*Tak4RYcBB_kAAAAAAAAAAAAAARQnAQ',
      buttonText: locale.goHome,
      onClick: () => {
        window.location.href = '/';
      },
    },
    403: {
      title: locale.noPermission,
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*6wHtQbUwibUAAAAAAAAAAAAAARQnAQ',
      buttonText: locale.goHome,
      onClick: () => {
        window.location.href = '/';
      },
    },
  };
};

export const EXCEPTION_PRESET = locale => {
  return {
    ERROR_BOUNDARY: {
      title: locale.collapse,
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*GFuxRoxURRAAAAAAAAAAAAAAARQnAQ',
      buttonText: locale.goHome,
      onClick: () => {
        window.location.href = '/';
      },
    },
    INCOMPATIBLE_VERSION: {
      title: locale.incompatible,
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*XPYFQ4ZEzzsAAAAAAAAAAAAAARQnAQ',
      buttonText: locale.goHome,
      onClick: () => {
        window.location.href = '/';
      },
      subscription: locale.proposal,
    },
  };
};
