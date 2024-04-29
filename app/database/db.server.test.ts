describe('db connection', () => {
  const callTracker = vi.hoisted(() => ({ count: 0 }));

  vi.mock('@prisma/client', () => ({
    PrismaClient: vi.fn().mockImplementation(() => {
      callTracker.count += 1;
      return { $connect: vi.fn() };
    }),
  }));

  vi.mock('@/utils/env', () => ({ NODE_ENV: 'development' }));

  it('only creates one connection on dev server', async () => {
    await import('./db.server').then((module) => module.db);
    await import('./db.server').then((module) => module.db);
    await import('./db.server').then((module) => module.db);
    expect(callTracker.count).toBe(1);
  });
});
