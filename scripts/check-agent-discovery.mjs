#!/usr/bin/env node
/**
 * @input public/.well-known/*, public/_headers
 * @output exit 0 if agent discovery assets are valid
 */
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicPath = (...segments) => join(root, 'public', ...segments);

const readJson = (...segments) => JSON.parse(readFileSync(publicPath(...segments), 'utf8'));

assert.ok(existsSync(publicPath('.well-known', 'mcp', 'server-card.json')));
assert.ok(existsSync(publicPath('.well-known', 'agent-card.json')));
assert.ok(existsSync(publicPath('_headers')));
assert.ok(existsSync(publicPath('docs', 'react', 'for-agents.md')));

const serverCard = readJson('.well-known', 'mcp', 'server-card.json');
assert.equal(serverCard.serverInfo.name, 'OceanBase Design');
assert.equal(serverCard.transport.type, 'stdio');
assert.ok(serverCard.transport.args.includes('mcp'));
assert.equal(serverCard.capabilities.tools, true);
assert.ok(serverCard.tools.some((t) => t.name === 'ob_info'));

const agentCard = readJson('.well-known', 'agent-card.json');
assert.ok(agentCard.mcp);
assert.equal(agentCard.mcp.server, 'oceanbase-design');
assert.ok(agentCard.skills?.length > 0);
assert.ok(agentCard.documentation?.forAgents?.startsWith('/'));
assert.ok(agentCard.documentation?.designMd === '/design.md');

const headers = readFileSync(publicPath('_headers'), 'utf8');
assert.match(headers, /llms\.txt/);
assert.match(headers, /llms-ob-constraints\.txt/);
assert.match(headers, /agent-card\.json/);

// Origin-agnostic: no hardcoded production URLs in JSON (transport command uses npx)

for (const file of ['.well-known/mcp/server-card.json', '.well-known/agent-card.json']) {
  const content = readFileSync(publicPath(...file.split('/')), 'utf8');
  assert.doesNotMatch(content, /https:\/\/ant\.design/);
  assert.doesNotMatch(content, /https:\/\/design\.oceanbase\.com/);
}

console.log('check:agent-discovery passed');
