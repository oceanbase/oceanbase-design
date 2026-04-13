/**
 * Regenerates figma/ralph/{loop-manifest.json,stories/*.json,prd.json}
 * from packages/design/src/figma/*.figma.tsx — one user story per stub file (Code Connect only), plus US-001 for stub generation.
 *
 * Usage: pnpm exec ts-node-esm --transpile-only scripts/figma/ralph/gen-code-connect-batch-loop.ts
 *        npm run generate:ralph-batch-loop
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** Monorepo root (`oceanbase-design/`). */
const root = path.resolve(__dirname, '../../..');
const uiDir = path.join(root, 'packages/design/src/figma');
const ralphDir = path.join(root, 'figma/ralph');
const storiesDir = path.join(ralphDir, 'stories');

/** 与 skills/figma-code-connect/gen-figma.md 对齐的可核对验收项（写入每条文件级 US；全文仍以 skill 为准）。 */
const sharedCriteria = [
  '规范权威来源：须完整遵守 skills/figma-code-connect/gen-figma.md（Code Connect 编写规则）。本条 acceptanceCriteria 中带「gen-figma §…」的条目为其可勾选摘要；与 skill 正文不一致时以 skill 为准。实现或评审本故事时须已阅读 skill 全文；在 Cursor 中若已将 gen-figma 注册为 Agent Skill，执行 Code Connect 相关任务时应加载该 skill。标 passes 为 true 前须已按 skill 全文自检。',
  'gen-figma §2.1：Figma 为真假开关时须用 figma.boolean("…", { true: …, false: … })，禁止用 figma.enum 配 "true"/"false" 字符串；除非设计稿本就是多档枚举。',
  'gen-figma §3.1：props 内仅写 figma.*；example 只解构映射结果并渲染目标组件。若目标组件 API 能覆盖变体，须映射为离散 props（如 disabled、mode、styles 等），禁止单字段整段 ReactNode（如 root）再加 example: ({ root }) => root 仅透传；仅当确认无法拆成离散 props 时方可整段映射，并须在本故事 notes、PR 说明或代码注释中写明理由（参见 gen-figma §3.1 例外）。',
  'gen-figma §3.2：禁止在模块顶层用 const 保存示例 JSX、禁止在 example 里渲染同文件顶层声明的本地组件；figma.connect 第一个参数须为真实组件引用，不能为 <></>。',
  'gen-figma §4：example 内禁止 void 丢弃解构值、if/else/switch、三目、模板字符串；Dropdown 的 dropdownRender 独占例外见 gen-figma。',
  'gen-figma §5：不在 props 中使用 figma.children；文本用 figma.string / figma.textContent 等按 gen-figma。',
  'gen-figma §6：颜色、边框、阴影等在 props/example 内用具体字面量（如 #1677ff、rgba(…)），禁止 var(--ob-…)。',
  'gen-figma §7：在 MCP 拉稿并重写 Code Connect 完成之后，于项目根目录执行 npx figma connect parse -c figma/figma.config.json --exit-on-unreadable-files，结果无报错。说明：preflight 刚重置的 stub（如 figma.connect(<></>, …)）预期无法通过 parse；仅完成 preflight 时不要以 parse 失败作为未交付依据，须先完成重写再跑 parse（见 skills/figma-code-connect/batch-execute.md 步骤 2 与 5）。',
  '每次执行（含重跑）的强制顺序：① 成功执行本 JSON 的 preflightCommand；② 对目标 *.figma.tsx 中每个 figma.connect 块上方注释的 https://www.figma.com/design/... URL，用 Figma MCP（如 get_design_context，必要时 get_context_for_code_connect）逐条拉取最新设计上下文（解析 fileKey、nodeId，分支 URL 用 branchKey 作 fileKey）；③ 严格按 skills/figma-code-connect/gen-figma.md 全文（含 §7.1 清单）重写 figma.connect 与 example，不得跳过 MCP、不得仅沿用旧实现或凭记忆改稿。props/图层名与当前 MCP 输出一致；标 passes 为 true 前须确认布局、变体语义、文案层级与当前稿一致。详见 skills/figma-code-connect/batch-execute.md「每次跑用户故事时的强制顺序」。',
  'figma.connect 第一个参数与 example 内使用项目真实组件；默认 @oceanbase/design（必要时 @oceanbase/icons），依据 package.json 与 figma/figma.config.json 的 codeConnect.importPaths。',
  '自检通过后，将本故事对应 JSON（figma/ralph/stories/ 下本条 US-*.json）的 passes 标为 true；同时将 figma/ralph/prd.json 中 userStories 里与本故事相同 id 的条目的 passes 标为 true。若只改了 stories/ 下的 passes，可执行 npm run generate:ralph-batch-loop 由脚本重生成 prd.json，避免两处不一致（见 skills/figma-code-connect/batch-execute.md §4）。',
];

const stubCriteria = [
  '工作目录为项目根目录；需要时 figma/.env 已配置且与 generate:figma-stubs 加载方式一致。',
  '执行 npm run generate:figma-stubs 成功退出（无参数：仅补全缺失页 stub，不覆盖已有 *.figma.tsx）。详见 skills/figma-code-connect/batch-execute.md §2。',
  '后续对用户故事的文件级修改均基于本次生成结果，未跳过本步骤。',
  '后续在任意 *.figma.tsx 上编写或评审 figma.connect 时，须完整遵守 skills/figma-code-connect/gen-figma.md（细则唯一来源；见该 skill 与 skills/figma-code-connect/batch-execute.md）。',
  '自检通过后，将 US-001 对应 stories/US-001-generate-figma-stubs.json 的 passes 标为 true；同时将 figma/ralph/prd.json 中 userStories 里 id 为 US-001 的条目的 passes 标为 true。若只改了该 story 的 passes，可执行 npm run generate:ralph-batch-loop 重生成 prd.json（见 skills/figma-code-connect/batch-execute.md §4）。',
];

function slugFromBase(base: string): string {
  const s = base.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '');
  return s || 'file';
}

function readExistingJsonField<T>(filePath: string, field: string): T | undefined {
  if (!fs.existsSync(filePath)) return undefined;
  try {
    const j = JSON.parse(fs.readFileSync(filePath, 'utf8')) as Record<string, unknown>;
    return j[field] as T | undefined;
  } catch {
    return undefined;
  }
}

function main(): void {
  fs.mkdirSync(storiesDir, { recursive: true });

  const figmaFiles = fs
    .readdirSync(uiDir)
    .filter(f => f.endsWith('.figma.tsx'))
    .sort();

  const stubPath = path.join(storiesDir, 'US-001-generate-figma-stubs.json');
  const stubStory = {
    id: 'US-001',
    title: 'US-001：全量生成 / 补全 Code Connect stub（generate:figma-stubs）',
    description:
      '作为实现者，我需要在修改任何 *.figma.tsx 之前先刷新 stub，保证文件与 Figma/Code Connect 配置同步，避免节点与链接脱节。',
    /** 仓库根目录可粘贴执行的一行（JSON 不会自动执行）。 */
    preflightCommand: 'npm run generate:figma-stubs',
    acceptanceCriteria: stubCriteria,
    priority: 1,
    passes: readExistingJsonField<boolean>(stubPath, 'passes') ?? false,
    notes: '无单文件目标；全量 stub。',
    targetFile: null as string | null,
  };

  fs.writeFileSync(stubPath, JSON.stringify(stubStory, null, 2) + '\n', 'utf8');

  const storyFiles: string[] = ['stories/US-001-generate-figma-stubs.json'];

  figmaFiles.forEach((filename, i) => {
    const rel = `packages/design/src/figma/${filename}`;
    const id = `US-${String(i + 2).padStart(3, '0')}`;
    const base = filename.replace(/\.figma\.tsx$/, '');
    const slug = slugFromBase(base);
    const fname = `${id}-file-${slug}.json`;
    const storyPath = path.join(storiesDir, fname);
    const story = {
      id,
      title: `${base}：Code Connect（${rel}）`,
      description: `交付 ${rel} 内全部 figma.connect（自上而下，不遗漏 URL）。每次执行（含重跑）：preflight 成功后必须用 Figma MCP 按各块 URL 拉最新稿，再严格按 skills/figma-code-connect/gen-figma.md 全文重写，不得跳过 MCP 或沿用旧逻辑。细则见 skills/figma-code-connect/batch-execute.md（强制顺序）、skills/figma-code-connect/gen-figma.md。`,
      /** 仓库根目录可粘贴执行：`fileBase` 与 `packages/design/src/figma/<fileBase>.figma.tsx` 文件名一致（JSON 不会自动执行）。 */
      preflightCommand: `npm run generate:figma-stubs -- ${base}`,
      acceptanceCriteria: [
        `本故事仅交付一个 Code Connect 文件：${rel}；其内所有 figma.connect 须全部完成（自上而下，不遗漏任一块上方 URL）。`,
        `figma/figma.config.json 的 codeConnect.include 须包含 ${rel}；若此前未包含，须在标 passes 为 true 之前补上（与 gen-figma §7、parse 自检一致）。`,
        `已按本故事 preflightCommand 成功执行（重置 ${rel} 对应页 stub；退出码 0）。详见 skills/figma-code-connect/batch-execute.md §2；与下方「每次执行（含重跑）的强制顺序」验收项一并核对。`,
        ...sharedCriteria,
      ],
      priority: i + 2,
      passes: readExistingJsonField<boolean>(storyPath, 'passes') ?? false,
      notes: `单文件闭环：${rel}；依赖 US-001 已执行。每次跑须：preflight → Figma MCP 逐 URL 拉最新稿 → 严格按 skills/figma-code-connect/gen-figma.md（含 §7.1）重写。`,
      targetFile: rel,
    };
    fs.writeFileSync(storyPath, JSON.stringify(story, null, 2) + '\n', 'utf8');
    storyFiles.push(`stories/${fname}`);
  });

  const manifest = {
    project: 'Code Connect UI：Stub → Figma MCP → 与设计稿一致',
    branchName: 'ralph/code-connect-ui-batch',
    description:
      '从 skills/figma-code-connect/batch-execute 拆分的 Ralph loop：先全量生成 stub，再按 packages/design/src/figma 下每个 *.figma.tsx 单故事闭环——交付该文件内全部 figma.connect（见 skills/figma-code-connect/batch-execute.md）。',
    references: {
      skillGenFigma: 'skills/figma-code-connect/gen-figma.md',
      skillBatchOverview: 'skills/figma-code-connect/batch-execute.md',
    },
    executionOrder:
      '严格按 storyFiles 数组顺序；US-001 必须最先通过；US-002 起每条文件级故事：每次（含重跑）先 npm run generate:figma-stubs -- <fileBase>，再对文件中每个 figma.connect 上方 URL 用 Figma MCP 拉最新稿，然后严格按 skills/figma-code-connect/gen-figma.md 全文重写 Code Connect（详见 batch-execute.md「每次跑用户故事时的强制顺序」与各 US-*.json）。',
    storyFiles,
  };

  fs.writeFileSync(
    path.join(ralphDir, 'loop-manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf8'
  );

  const userStories = storyFiles.map(rel =>
    JSON.parse(fs.readFileSync(path.join(ralphDir, rel), 'utf8'))
  );

  const prd = {
    project: manifest.project,
    branchName: manifest.branchName,
    description: manifest.description,
    references: manifest.references,
    executionOrder: manifest.executionOrder,
    userStories,
  };

  fs.writeFileSync(path.join(ralphDir, 'prd.json'), JSON.stringify(prd, null, 2) + '\n', 'utf8');

  console.log(`Wrote ${storyFiles.length} stories under figma/ralph/`);
}

main();
