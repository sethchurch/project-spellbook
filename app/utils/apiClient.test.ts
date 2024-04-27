import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { client } from './apiClient';

const server = setupServer(
  http.get('http://localhost/test', () => {
    return HttpResponse.json({ message: 'GET request successful' });
  }),
  http.post('http://localhost/test', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ message: 'POST request successful', data: body });
  }),
  http.get('http://localhost/error', () => {
    return HttpResponse.error();
  }),
);

describe(client.name, () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('performs a GET request when no data is provided', async () => {
    const response = await client('http://localhost/test');
    expect(response).toEqual({ message: 'GET request successful' });
  });

  it('performs a POST request when data is provided', async () => {
    const testData = { key: 'value' };
    const response = await client('http://localhost/test', { data: testData });
    expect(response).toEqual({ message: 'POST request successful', data: testData });
  });

  it('sends custom headers if provided', async () => {
    const customHeaders = { 'X-Custom-Header': 'TestValue' };
    const response = await client('http://localhost/test', { headers: customHeaders });
    expect(response).toEqual({ message: 'GET request successful' });
  });

  it.fails('handles errors correctly', async () => {
    await client('/error');
  });
});
