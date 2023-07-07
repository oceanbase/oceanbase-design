import { resolve } from 'path';
import { appendFileSync } from 'fs';
import { reactIconsGeneratorFromSVGDir } from '@oceanbase/icons-svg';

export async function generateIcons() {
  await reactIconsGeneratorFromSVGDir({
    entry: resolve(__dirname, '../svg'),
    output: resolve(__dirname, '../src'),
    typescript: true,
  });

  appendFileSync(
    resolve(__dirname, '../src/index.ts'),
    `

export * from '@ant-design/icons';
export { default } from '@ant-design/icons';`
  );
}

generateIcons();
