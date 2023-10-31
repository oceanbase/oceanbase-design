import { TOKEN_MAP_KEYS, isLower } from '../utils/token';

describe('token', () => {
  it('TOKEN_MAP_KEYS should be lower case', async () => {
    expect(TOKEN_MAP_KEYS.every(key => isLower(key))).toEqual(true);
  });

  it('TOKEN_MAP_KEYS should not include blank space', async () => {
    expect(TOKEN_MAP_KEYS.every(key => !key.includes(' '))).toEqual(true);
  });
});
