import React, { useCallback, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import Icon, * as AllIcons from '@oceanbase/icons';
import * as AntdIcons from '@ant-design/icons';
import type { IntlShape } from 'react-intl';
import { Segmented, Input, Empty, Affix } from '@oceanbase/design';
import type { SegmentedProps } from '@oceanbase/design';
import { css } from '@emotion/react';
import { useIntl } from 'dumi';
import debounce from 'lodash/debounce';
import difference from 'lodash/difference';
import Category from './Category';
import { FilledIcon, OutlinedIcon, TwoToneIcon, ColoredIcon } from './themeIcons';
import type { CategoriesKeys } from './fields';
import { categories, displayIconNames } from './fields';
import useSiteToken from '../../../hooks/useSiteToken';

export enum ThemeType {
  Filled = 'Filled',
  Outlined = 'Outlined',
  TwoTone = 'TwoTone',
  Colored = 'Colored',
}

const useStyle = () => ({
  iconSearchAffix: css`
    display: flex;
    transition: all 0.3s;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
});

const options = (intl: IntlShape): SegmentedProps['options'] => [
  {
    value: ThemeType.Outlined,
    icon: <Icon component={OutlinedIcon} />,
    label: intl.formatMessage({ id: 'app.docs.components.icon.outlined' }),
  },
  {
    value: ThemeType.Filled,
    icon: <Icon component={FilledIcon} />,
    label: intl.formatMessage({ id: 'app.docs.components.icon.filled' }),
  },
  // {
  //   value: ThemeType.TwoTone,
  //   icon: <Icon component={TwoToneIcon} />,
  //   label: intl.formatMessage({ id: 'app.docs.components.icon.two-tone' }),
  // },
  {
    value: ThemeType.Colored,
    icon: <Icon component={TwoToneIcon} />,
    label: intl.formatMessage({ id: 'app.docs.components.icon.colored' }),
  },
];

interface IconSearchState {
  theme: ThemeType;
  searchKey: string;
}

const IconSearch: React.FC = () => {
  const intl = useIntl();
  const { iconSearchAffix } = useStyle();
  const [displayState, setDisplayState] = useState<IconSearchState>({
    searchKey: '',
    theme: ThemeType.Outlined,
  });

  const newIconNames: string[] = difference(
    Object.keys(AllIcons),
    Object.keys(AntdIcons).filter(
      item => !displayIconNames.includes(item.replace(/(Outlined|Filled|TwoTone|Colored)$/, ''))
    )
  );

  const handleSearchIcon = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayState(prevState => ({ ...prevState, searchKey: e.target.value }));
  }, 300);

  const handleChangeTheme = useCallback(value => {
    setDisplayState(prevState => ({ ...prevState, theme: value as ThemeType }));
  }, []);

  const renderCategories = useMemo<React.ReactNode | React.ReactNode[]>(() => {
    const { searchKey = '', theme } = displayState;

    const categoriesResult = Object.keys(categories)
      .map(key => {
        let iconList = categories[key as CategoriesKeys];
        if (searchKey) {
          const matchKey = searchKey
            // eslint-disable-next-line prefer-regex-literals
            .replace(new RegExp(`^<([a-zA-Z]*)\\s/>$`, 'gi'), (_, name) => name)
            .replace(/(Filled|Outlined|TwoTone|Gray|Colored)$/, '')
            .toLowerCase();
          iconList = iconList.filter(iconName => iconName.toLowerCase().includes(matchKey));
        }

        const ignore = [
          'CopyrightCircle', // same as Copyright
          'DollarCircle', // same as Dollar
        ];
        iconList = iconList.filter(icon => !ignore.includes(icon));

        return {
          category: key,
          icons: iconList
            .map(iconName => iconName + theme)
            .filter(iconName => newIconNames.includes(iconName)),
        };
      })
      .filter(({ icons }) => !!icons.length)
      .map(({ category, icons }) => (
        <Category
          key={category}
          title={category as CategoriesKeys}
          theme={theme}
          icons={icons}
          // newIcons={newIconNames}
          newIcons={[]}
        />
      ));
    return categoriesResult.length ? categoriesResult : <Empty style={{ margin: '2em 0' }} />;
  }, [displayState.searchKey, displayState.theme]);

  const [searchBarAffixed, setSearchBarAffixed] = useState<boolean>(false);
  const { token } = useSiteToken();
  const { borderRadius, colorBgContainer } = token;

  const affixedStyle: CSSProperties = {
    boxShadow: 'rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px',
    padding: 8,
    margin: -8,
    borderRadius,
    backgroundColor: colorBgContainer,
  };

  return (
    <div className="markdown">
      <Affix offsetTop={24} onChange={setSearchBarAffixed}>
        <div css={iconSearchAffix} style={searchBarAffixed ? affixedStyle : {}}>
          <Segmented
            size="large"
            value={displayState.theme}
            options={options(intl)}
            onChange={handleChangeTheme}
          />
          <Input.Search
            placeholder={intl.formatMessage({ id: 'app.docs.components.icon.search.placeholder' })}
            style={{ flex: 1, marginInlineStart: 16 }}
            allowClear
            autoFocus
            size="large"
            onChange={handleSearchIcon}
          />
        </div>
      </Affix>
      {renderCategories}
    </div>
  );
};

export default IconSearch;
