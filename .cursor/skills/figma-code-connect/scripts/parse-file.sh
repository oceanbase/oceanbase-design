#!/usr/bin/env bash
# Parse a single Code Connect file (incremental agent/human validation).
set -euo pipefail

if [[ "${1:-}" == "--" ]]; then
  shift
fi
FILE="${1:-}"
if [[ -z "$FILE" ]]; then
  echo "usage: pnpm run figma:parse:file -- <path-to/index.figma.tsx>" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
exec node "$ROOT/node_modules/@figma/code-connect/dist/cli.js" connect parse \
  --config "$ROOT/.cursor/skills/figma-code-connect/figma.config.json" \
  --exit-on-unreadable-files \
  --file "$ROOT/$FILE"
