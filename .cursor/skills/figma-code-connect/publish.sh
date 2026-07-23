#!/usr/bin/env bash
# Figma Code Connect publish (requires packages/**/index.figma.tsx + .env).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"
CONFIG="$SCRIPT_DIR/figma.config.json"
CLI="$ROOT/node_modules/@figma/code-connect/dist/cli.js"

if [[ ! -f "$CLI" ]]; then
  echo "error: missing $CLI — run pnpm install at repo root." >&2
  exit 1
fi

if [[ ! -f "$ENV_FILE" ]]; then
  echo "error: missing $ENV_FILE (copy from .env.example)" >&2
  exit 1
fi

if ! find "$ROOT/packages" -name 'index.figma.tsx' -print -quit 2>/dev/null | grep -q .; then
  echo "error: no Code Connect mappings under packages/**/index.figma.tsx" >&2
  exit 1
fi

cd "$ROOT"
exec node --env-file="$ENV_FILE" "$CLI" connect publish --config "$CONFIG" --batch-size 5 "$@"
