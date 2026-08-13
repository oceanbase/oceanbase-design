import { defineProject } from 'vitest/config';

export default defineProject({
  test: {
    // CLI tests use Node.js built-in node:test (see root package.json test:cli).
    include: [],
  },
});
