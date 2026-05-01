import { Input, Typography } from '@oceanbase/design';
import * as ObIcons from '@oceanbase/icons';
import type { ComponentType } from 'react';
import React, { useMemo, useState } from 'react';

import type { IconConnectName } from './icon-connect-names.figma';
import { ICON_SECTIONS } from './icon-categories.figma';

/**
 * Playground：`index.figma.tsx` 中每条 `figma.connect` 均无 `props`，`example` 均为 `<Icon />`。
 * 按设计稿分区平铺展示，与设计侧 Figma 画板分组一致。
 */

function FigmaIconExample({ Icon }: { Icon: ComponentType }) {
  return <Icon />;
}

const CELL_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  minWidth: 0,
  padding: '8px 4px',
};

/** 偏白底（接近白卡片）；标签深灰；线框图标深色 / Primary 品牌蓝 */
const BG_SURFACE = '#ffffff';
const BORDER_SURFACE = '#f0f0f0';
const LABEL_TEXT = '#595959';
const TITLE_TEXT = 'rgba(0, 0, 0, 0.85)';
/** 浅色背景上的线框图标用深色，勿再用白 */
const ICON_OUTLINED = '#262626';
const ICON_PRIMARY = '#1664ff';

const GRID_STYLE: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  gap: '12px 8px',
  width: '100%',
};

function iconAccentColor(name: string): React.CSSProperties['color'] | undefined {
  if (/Primary(Outlined|Filled)$/.test(name)) {
    return ICON_PRIMARY;
  }
  if (name.endsWith('Outlined')) {
    return ICON_OUTLINED;
  }
  return undefined;
}

function IconTile({ name, mono }: { name: IconConnectName; mono: boolean }) {
  const Icon = ObIcons[name as keyof typeof ObIcons] as ComponentType;
  const accent = mono ? iconAccentColor(name) : undefined;
  const iconWrap: React.CSSProperties = {
    fontSize: mono ? 24 : 28,
    lineHeight: 1,
    display: 'inline-flex',
    ...(accent !== undefined ? { color: accent } : {}),
  };

  return (
    <div style={CELL_STYLE}>
      <Typography.Text
        ellipsis={{ tooltip: name }}
        style={{
          fontSize: 11,
          lineHeight: 1.2,
          width: '100%',
          textAlign: 'center',
          color: LABEL_TEXT,
        }}
      >
        {name}
      </Typography.Text>
      <div style={iconWrap}>
        <FigmaIconExample Icon={Icon} />
      </div>
    </div>
  );
}

const App: React.FC = () => {
  const [keyword, setKeyword] = useState('');

  const filteredSections = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    if (!q) {
      return ICON_SECTIONS;
    }
    return ICON_SECTIONS.map(section => ({
      ...section,
      names: section.names.filter(n => n.toLowerCase().includes(q)),
    })).filter(section => section.names.length > 0);
  }, [keyword]);

  return (
    <div
      style={{
        border: `1px solid ${BORDER_SURFACE}`,
        borderRadius: 8,
        background: BG_SURFACE,
        padding: 20,
      }}
    >
      <Input.Search
        allowClear
        placeholder="搜索图标名称（不区分大小写）"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        style={{ marginBottom: 20, maxWidth: 400 }}
      />

      {filteredSections.length === 0 ? (
        <Typography.Text type="secondary" style={{ display: 'block', padding: '32px 0' }}>
          无匹配图标，请换个关键词试试
        </Typography.Text>
      ) : (
        filteredSections.map(section => {
          const isLogo = section.id === 'logo';
          return (
            <section key={section.id} style={{ marginBottom: isLogo ? 0 : 28 }}>
              <Typography.Text
                strong
                style={{
                  display: 'block',
                  marginBottom: 14,
                  fontSize: 13,
                  color: TITLE_TEXT,
                }}
              >
                {section.title}
              </Typography.Text>
              <div style={GRID_STYLE}>
                {section.names.map(name => (
                  <IconTile key={name} name={name as IconConnectName} mono={!isLogo} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
};

export default App;
