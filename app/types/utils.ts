type LoaderJSONType<T extends (...args: any[]) => Promise<{ json: () => Promise<any> }>> = ReturnType<
  Awaited<ReturnType<T>>['json']
>;

export type { LoaderJSONType };
