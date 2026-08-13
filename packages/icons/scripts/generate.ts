import { resolve } from 'path';
import { appendFileSync, copyFileSync } from 'fs';
import { reactIconsGeneratorFromSVGDir } from '@oceanbase/icons-svg';

// @oceanbase/icons-svg 模板不包含 a11y 增强（aria-label 透传等，见 #1483），
// 每次 generate 都会整体重建 src/ 并把组件冲回模板版。这里在生成后覆盖回仓库内
// 维护的 a11y 版组件，避免手工改动被生成流程静默回滚。
const A11Y_COMPONENTS = ['Icon.tsx', 'IconBase.tsx'] as const;

export async function generateIcons() {
  await reactIconsGeneratorFromSVGDir({
    entry: resolve(__dirname, '../svg'),
    output: resolve(__dirname, '../src'),
    typescript: true,
  });

  for (const file of A11Y_COMPONENTS) {
    copyFileSync(resolve(__dirname, 'a11y', file), resolve(__dirname, '../src/components', file));
  }

  appendFileSync(
    resolve(__dirname, '../src/index.ts'),
    `

export * from '@ant-design/icons';
export { default } from '@ant-design/icons';`
  );
}

generateIcons();
