// @ts-nocheck

import { figma } from '@figma/code-connect';
import { InputNumber } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵InputNumber"
 */

// Figma: "InputNumber" · 2245:2152
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2152&m=dev
figma.connect(InputNumber, '<FIGMA_OCEANBASE_INPUTNUMBER>', {
  props: {
    root: figma.enum('placeholder', {
      true: figma.enum('disabled', {
        false: figma.enum('minus', {
          true: (
            <InputNumber
              placeholder="Enter"
              disabled={false}
              addonAfter={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>Days</span>
              }
              controls
              style={{ width: 200 }}
            />
          ),
          false: (
            <InputNumber placeholder="Enter" disabled={false} controls style={{ width: 128 }} />
          ),
        }),
        true: figma.enum('minus', {
          true: (
            <InputNumber
              placeholder="Enter"
              disabled
              addonAfter={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>Days</span>
              }
              controls
              style={{ width: 200 }}
            />
          ),
          false: <InputNumber placeholder="Enter" disabled controls style={{ width: 128 }} />,
        }),
      }),
      false: figma.enum('disabled', {
        false: figma.enum('minus', {
          true: (
            <InputNumber
              defaultValue={1}
              disabled={false}
              addonAfter={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>Days</span>
              }
              controls
              style={{ width: 200 }}
            />
          ),
          false: <InputNumber defaultValue={1} disabled={false} controls style={{ width: 128 }} />,
        }),
        true: figma.enum('minus', {
          true: (
            <InputNumber
              defaultValue={1}
              disabled
              addonAfter={
                <span style={{ fontSize: 12, lineHeight: '20px', color: '#8592ad' }}>Days</span>
              }
              controls
              style={{ width: 200 }}
            />
          ),
          false: <InputNumber defaultValue={1} disabled controls style={{ width: 128 }} />,
        }),
      }),
    }),
  },
  example: ({ root }) => <div>{root}</div>,
});
