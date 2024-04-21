import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { client } from './apiClient';

// const server = setupServer(
//   http.get('/test', () => {
//     return HttpResponse.json({ message: 'GET request successful' });
//   }),
//   http.post('/test', ({ request }) => {
//     return HttpResponse.json({ message: 'POST request successful', data: request.body });
//   }),
//   http.get('/error', () => {
//     return HttpResponse.error();
//   }),
// );
const server = setupServer(
  http.get('http://localhost/test', () => {
    return HttpResponse.json({ message: 'GET request successful' });
  }),
);

describe('client function', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('performs a GET request when no data is provided', async () => {
    const response = await client('http://localhost/test');
    expect(response).toEqual({ message: 'GET request successful' });
  });

  it.todo('performs a POST request when data is provided', async () => {
    const testData = { key: 'value' };
    const response = await client('/test', { data: testData });
    expect(response).toEqual({ message: 'POST request successful', data: JSON.stringify(testData) });
  });

  it.todo('sends custom headers if provided', async () => {
    const customHeaders = { 'X-Custom-Header': 'TestValue' };
    const response = await client('/test', { headers: customHeaders });
    // Assumption here is that MSW or your assertions can validate headers sent. This is a conceptual example.
    expect(response).toEqual({ message: 'GET request successful' });
  });

  it.todo.fails('handles errors correctly', async () => {
    await client('/error');
  });
});
