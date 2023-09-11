# OceanBase Design Codemod

A collection of codemod scripts that help migrate to OceanBase Design using [jscodeshift](https://github.com/facebook/jscodeshift) and [postcss](https://github.com/postcss/postcss).(Inspired by [@oceanbase/codemod](https://github.com/ant-design/codemod-v5))

[![NPM version](https://img.shields.io/npm/v/@oceanbase/codemod.svg?style=flat)](https://npmjs.org/package/@oceanbase/codemod) [![NPM downloads](http://img.shields.io/npm/dm/@oceanbase/codemod.svg?style=flat)](https://npmjs.org/package/@oceanbase/codemod) [![Github Action](https://github.com/oceanbase/design/actions/workflows/ci.yml/badge.svg)](https://github.com/oceanbase/design/actions/workflows/ci.yml)

## Usage

Before run codemod scripts, you'd better make sure to commit your local git changes firstly.

```shell
# Run directly through npx
npx -p @oceanbase/codemod codemod src

# Or run directly through pnpm
pnpm --package=@oceanbase/codemod dlx codemod src
```
