// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Flex, Segmented } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Segmented"
 */

// Figma: "Segmented" · 5313:13313
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5313-13313&m=dev
figma.connect(Segmented, '<FIGMA_OCEANBASE_SEGMENTED>', {
  props: {
    size: figma.enum('size', {
      medium: 'middle',
      small: 'small',
    }),
    options: [
      { label: 'option', value: '1' },
      { label: 'option', value: '2' },
      { label: 'option', value: '3' },
    ],
    defaultValue: '1',
  },
  example: ({ size, options, defaultValue }) => (
    <Segmented size={size} options={options} defaultValue={defaultValue} />
  ),
});

// Figma: "SegmentItem" · 5313:13322
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5313-13322&m=dev
figma.connect(Flex, '<FIGMA_OCEANBASE_SEGMENTITEM>', {
  props: {
    text: figma.string('text'),
    padX: figma.enum('size', {
      small: 8,
      medium: 12,
    }),
    padY: figma.enum('size', {
      small: 1,
      medium: 2,
    }),
    background: figma.enum('status', {
      selected: '#ffffff',
      default: '#f5f7fc',
      hover: '#ebeff7',
    }),
    fontWeight: figma.enum('status', {
      selected: 500,
      default: 400,
      hover: 400,
    }),
  },
  example: ({ text, padX, padY, background, fontWeight }) => (
    <Flex
      align="center"
      justify="center"
      style={{
        background,
        paddingTop: padY,
        paddingBottom: padY,
        paddingLeft: padX,
        paddingRight: padX,
        borderRadius: 4,
        boxSizing: 'border-box',
      }}
    >
      <span
        style={{
          color: '#132039',
          fontSize: 14,
          lineHeight: '20px',
          fontWeight,
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>
    </Flex>
  ),
});
