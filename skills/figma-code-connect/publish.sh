#!/usr/bin/env bash
# Figma Code Connect：在 skills/figma-code-connect/.figma-publish-deps 安装 CLI（仅发布用，不经仓库根 node_modules），再在仓库根执行 publish。
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"
CONFIG="$SCRIPT_DIR/figma.config.json"

# 官方 tarball，避免内网 registry 拉不到 @oceanbase/figma-code-connect
FIGMA_CONNECT_TARBALL='https://registry.npmjs.org/@oceanbase/figma-code-connect/-/figma-code-connect-0.1.0.tgz'
DEPS_DIR="$SCRIPT_DIR/.figma-publish-deps"
PKG_JSON="$DEPS_DIR/package.json"
CLI="$DEPS_DIR/node_modules/@oceanbase/figma-code-connect/dist/cli.js"

mkdir -p "$DEPS_DIR"
if [[ ! -f "$PKG_JSON" ]]; then
  printf '%s\n' "{\"name\":\"figma-connect-cli-cache\",\"private\":true,\"dependencies\":{\"@oceanbase/figma-code-connect\":\"$FIGMA_CONNECT_TARBALL\"}}" >"$PKG_JSON"
fi

if [[ ! -f "$CLI" ]]; then
  echo "publish.sh: 正在 $DEPS_DIR 安装临时 node_modules（仅含 Code Connect CLI）…" >&2
  # 固定从 npm 官方源拉 tarball，避免用户全局 .npmrc / 内网源把 URL 重写后 404
  PUBLIC_REGISTRY='https://registry.npmjs.org'
  if command -v npm >/dev/null 2>&1; then
    (cd "$DEPS_DIR" && npm install --no-audit --no-fund --registry="$PUBLIC_REGISTRY")
  elif command -v pnpm >/dev/null 2>&1; then
    (cd "$DEPS_DIR" && pnpm install --registry="$PUBLIC_REGISTRY")
  else
    echo "error: 需要 npm 或 pnpm 才能下载 @oceanbase/figma-code-connect" >&2
    exit 1
  fi
fi

if [[ ! -f "$CLI" ]]; then
  echo "error: 安装后仍缺少 $CLI，可删除 $DEPS_DIR 后重试。" >&2
  exit 1
fi

if [[ ! -f "$ENV_FILE" ]]; then
  echo "error: missing $ENV_FILE" >&2
  exit 1
fi
if [[ ! -f "$CONFIG" ]]; then
  echo "error: missing $CONFIG" >&2
  exit 1
fi

cd "$ROOT"
exec node --env-file="$ENV_FILE" "$CLI" connect publish --config "$CONFIG" --batch-size 5 "$@"
