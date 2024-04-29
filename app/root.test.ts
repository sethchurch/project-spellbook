import { BASE_URL } from 'tests/constants';

import { loader as rootLoader } from './root';
import { cookieName } from './utils/theme.server';

describe(rootLoader.name, () => {
  vi.mock('@/features/auth/utils/session.server', () => {
    return {
      getAuthSession: vi.fn().mockResolvedValue({}),
    };
  });

  it('should return a json object with userPrefs and session', async () => {
    const request = new Request(BASE_URL, { headers: { Cookie: `${cookieName}=dark` } });
    const result = await rootLoader({ request, params: {}, context: {} });
    const json = await result.json();
    expect(json).toEqual(expect.objectContaining({ userPrefs: { theme: 'dark' }, session: {} }));
  });

  it('should return default theme for blank requests', async () => {
    const request = new Request(BASE_URL);
    const result = await rootLoader({ request, params: {}, context: {} });
    const json = await result.json();
    expect(json).toEqual(expect.objectContaining({ userPrefs: { theme: 'light' }, session: {} }));
  });
});
