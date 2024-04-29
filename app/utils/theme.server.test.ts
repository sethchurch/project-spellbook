import { BASE_URL } from 'tests/constants';

import { cookieName, getTheme, setTheme, switchTheme } from './theme.server';

const createRequest = (themeValue: string) => {
  return new Request(BASE_URL, {
    headers: {
      Cookie: `${cookieName}=${themeValue}`,
    },
  });
};

describe(getTheme.name, () => {
  it('returns theme from request cookies', async () => {
    const request = createRequest('dark');
    const theme = getTheme(request);
    expect(theme).toBe('dark');
  });

  it('returns null for non standard theme', async () => {
    const request = createRequest('random-theme-name');
    const theme = getTheme(request);
    expect(theme).toBeNull();
  });

  it('returns a default theme for nonheaded requests', async () => {
    const request = new Request(BASE_URL);
    const theme = getTheme(request);
    expect(theme).not.toBeNull();
  });
});

describe(setTheme.name, () => {
  it('returns a serialized cookie for theme', async () => {
    const themeKey = 'light';
    const cookie = setTheme(themeKey);
    expect(cookie).toMatch(new RegExp(`${cookieName}`));
    expect(cookie).toMatch(new RegExp(themeKey, 'i'));
    expect(cookie).toMatch(/Max-Age/);
  });
});

describe(switchTheme.name, () => {
  it('returns light cookie if passed dark', async () => {
    const cookie = switchTheme(createRequest('dark'));
    expect(cookie).toMatch(/light/i);
  });
  it('returns dark cookie if passed light', async () => {
    const cookie = switchTheme(createRequest('light'));
    expect(cookie).toMatch(/dark/i);
  });
});
