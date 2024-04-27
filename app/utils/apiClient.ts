interface QueryOptions {
  data?: object;
  token?: string;
  headers?: any;
}

export const client = async (endpoint: string, { data, headers: customHeaders }: QueryOptions = {}) => {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
  };

  return fetch(endpoint, config).then(async (response) => {
    const json = (await response.json()) as { error: string; ok: boolean; data: any };
    if (response.ok) {
      return json;
    }
    return Promise.reject(new Error(json.error));
  });
};
