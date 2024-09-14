export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
  text?: string;
}

export interface IconDefinition {
  name: string; // kebab-case-style
  theme: ThemeType;
  icon: ((primaryColor: string, secondaryColor: string) => AbstractNode) | AbstractNode;
}

export const themeTypeList = ['filled', 'outlined', 'twotone', 'colored', 'svg'];

export type ThemeType = 'outlined' | 'filled' | 'twotone' | 'colored' | 'svg';
export type ThemeTypeUpperCase = 'Outlined' | 'Filled' | 'TwoTone' | 'Colored' | 'Svg';
