import * as cookie from 'cookie';

export const cookieName = 'en_theme';
export type Theme = 'light' | 'dark';

export function getTheme(request: Request): Theme | null {
  const cookieHeader = request.headers.get('cookie');
  const parsed = cookieHeader ? cookie.parse(cookieHeader)[cookieName] : 'light';
  if (parsed === 'light' || parsed === 'dark') return parsed;
  return null;
}

export function setTheme(theme: Theme | 'system') {
  return cookie.serialize(cookieName, theme, { path: '/', maxAge: 31536000 });
}

export function switchTheme(request: Request) {
  const currentTheme = getTheme(request);
  const theme = currentTheme === 'light' ? 'dark' : 'light';
  return setTheme(theme);
}
