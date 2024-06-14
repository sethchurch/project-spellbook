/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import viteConfig from './vite.config';

export default defineConfig({
  ...viteConfig,
  plugins: [tsconfigPaths(), react()],
  css: { postcss: { plugins: [] } },
  test: {
    globals: true,
    include: ['./app/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup/setup-test-env.ts'],
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'happy-dom'],
    ],
    outputFile: {
      json: './json-report.json',
      junit: './junit-report.xml',
    },
    coverage: {
      all: true,
      enabled: true,
      include: ['app/**/*.{ts,tsx}'],
      reporter: ['html'],
      reportsDirectory: './out/coverage',
    },
  },
});
