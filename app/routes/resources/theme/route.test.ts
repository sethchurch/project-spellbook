import type { SubmissionResult } from '@conform-to/dom';
import { BASE_URL } from 'tests/constants';

import { action as themeAction } from './route';

describe('Resource Theme Action', () => {
  it('handles invalid theme submission', async () => {
    const formData = new FormData();
    formData.append('theme', 'invalid');
    const request = new Request(BASE_URL, { method: 'POST', body: formData });
    const response = (await themeAction({ request, params: {}, context: {} })) as SubmissionResult;

    expect(response).not.toBeNull();
    expect(response.status).toBe('error');
    expect(response.fields).toEqual(['theme']);
  });

  it('handles invalid data submission', async () => {
    const formData = new FormData();
    const request = new Request(BASE_URL, { method: 'POST', body: formData });
    const response = (await themeAction({ request, params: {}, context: {} })) as SubmissionResult;

    expect(response).not.toBeNull();
    expect(response.status).toBe('error');
    expect(response.fields).toEqual([]);
  });

  it('adds cookie on succesful submission', async () => {
    const formData = new FormData();
    formData.append('theme', 'dark');
    const request = new Request(BASE_URL, { method: 'POST', body: formData });
    const response = (await themeAction({ request, params: {}, context: {} })) as Response;

    expect(response).not.toBeNull();
    const cookieHeader = response.headers.get('Set-Cookie');
    expect(cookieHeader).toBeDefined();
    expect(cookieHeader).toMatch(/dark/i);
  });
});
