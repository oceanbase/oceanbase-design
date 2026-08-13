import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { infoCommand } from '../commands/info.mjs';
import { docCommand } from '../commands/doc.mjs';
import { demoCommand } from '../commands/demo.mjs';
import { constraintCommand } from '../commands/constraint.mjs';
import { routeCommand } from '../commands/route.mjs';
import { searchCommand } from '../commands/search.mjs';
import { tokenCommand } from '../commands/token.mjs';
import { lintCommand } from '../commands/lint.mjs';
import { doctorCommand } from '../commands/doctor.mjs';

function capture(fn) {
  return async (...args) => {
    const chunks = [];
    const log = console.log;
    console.log = (...a) => chunks.push(a.join(' '));
    try {
      await fn(...args);
    } finally {
      console.log = log;
    }
    return chunks.join('\n');
  };
}

const TOOLS = [
  {
    name: 'ob_info',
    description: 'Merged OB component API (diffLevel merge). Sole API truth entry.',
    inputSchema: {
      type: 'object',
      properties: { name: { type: 'string' }, dense: { type: 'boolean' } },
      required: ['name'],
    },
  },
  {
    name: 'ob_doc',
    description: 'Component documentation with OB constraints',
    inputSchema: {
      type: 'object',
      properties: { name: { type: 'string' }, dense: { type: 'boolean' } },
      required: ['name'],
    },
  },
  {
    name: 'ob_demo',
    description: 'Demo code with imports rewritten to @oceanbase/design',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        demoId: { type: 'string', description: 'Demo id e.g. basic, responsive' },
      },
      required: ['name'],
    },
  },
  {
    name: 'ob_route',
    description: 'Map page intent to OB component combination',
    inputSchema: {
      type: 'object',
      properties: { intent: { type: 'string' }, dense: { type: 'boolean' } },
      required: ['intent'],
    },
  },
  {
    name: 'ob_constraint',
    description: 'ASSEMBLY constraints from metadata/constraints.yaml',
    inputSchema: {
      type: 'object',
      properties: { dense: { type: 'boolean' } },
    },
  },
  {
    name: 'ob_token',
    description: 'obToken and runtime --ob-* CSS variable reference (full list, categories, migration hints)',
    inputSchema: {
      type: 'object',
      properties: {
        dense: { type: 'boolean' },
        json: { type: 'boolean' },
        check: { type: 'string', description: 'Validate a single --ob-* token name' },
      },
    },
  },
  {
    name: 'ob_lint',
    description: 'Static lint for OB import, convention, and CSS token violations',
    inputSchema: {
      type: 'object',
      properties: {
        target: { type: 'string', default: './src' },
        includeStyles: { type: 'boolean', default: true },
        json: { type: 'boolean' },
        codeOnly: { type: 'boolean' },
        stylesOnly: { type: 'boolean' },
      },
    },
  },
  {
    name: 'ob_search',
    description: 'Search components across design/ui metadata',
    inputSchema: {
      type: 'object',
      properties: { query: { type: 'string' }, dense: { type: 'boolean' } },
      required: ['query'],
    },
  },
  {
    name: 'ob_doctor',
    description: 'Project health: OB deps; antd CLI status for ob_info merge',
    inputSchema: {
      type: 'object',
      properties: { json: { type: 'boolean' } },
    },
  },
];

const PROMPTS = [
  {
    name: 'ob-expert',
    description: 'OceanBase Design expert with hard rules',
    arguments: [],
  },
  {
    name: 'ob-list-page',
    description: 'Scaffold list page with Filter + Table',
    arguments: [{ name: 'entity', description: 'Entity name e.g. orders', required: true }],
  },
];

export async function startMcpServer() {
  const server = new Server(
    { name: 'oceanbase-design', version: '0.1.0-alpha.1' },
    { capabilities: { tools: {}, prompts: {} } },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args = {} } = request.params;
    try {
      let text = '';
      const cap = capture(async () => {
        switch (name) {
          case 'ob_info':
            await infoCommand(args.name, { dense: args.dense, json: !args.dense });
            break;
          case 'ob_doc':
            await docCommand(args.name, { dense: args.dense });
            break;
          case 'ob_demo':
            await demoCommand(args.name, args.demoId);
            break;
          case 'ob_route':
            routeCommand(args.intent, { dense: args.dense, json: !args.dense });
            break;
          case 'ob_constraint':
            constraintCommand({ dense: true, json: false });
            break;
          case 'ob_token':
            await tokenCommand({
              dense: args.dense,
              json: args.json ?? !!args.check,
              check: args.check,
            });
            break;
          case 'ob_lint':
            lintCommand(args.target || './src', {
              json: args.json,
              codeOnly: args.codeOnly || args.includeStyles === false,
              stylesOnly: args.stylesOnly,
            });
            break;
          case 'ob_search':
            searchCommand(args.query, { dense: args.dense, json: !args.dense });
            break;
          case 'ob_doctor':
            await doctorCommand({ json: args.json });
            break;
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      });
      text = await cap();
      return { content: [{ type: 'text', text }] };
    } catch (e) {
      return { content: [{ type: 'text', text: e.message }], isError: true };
    }
  });

  server.setRequestHandler(ListPromptsRequestSchema, async () => ({ prompts: PROMPTS }));

  server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const { name, arguments: args = {} } = request.params;
    if (name === 'ob-expert') {
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `You are an OceanBase Design expert. Rules: only ob-design mcp; import @oceanbase/design; Filter for filters; innerBordered for card tables; ConfigProvider at root.`,
            },
          },
        ],
      };
    }
    if (name === 'ob-list-page') {
      const entity = args.entity || 'items';
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `Build a ${entity} list page: PageContainer + Filter.ResponsiveGroup + Table with innerBordered when in Card. Use ob_info for each component.`,
            },
          },
        ],
      };
    }
    throw new Error(`Unknown prompt: ${name}`);
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
}
