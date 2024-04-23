import { netlifyPlugin } from '@netlify/remix-adapter/plugin';
import { vitePlugin as remix } from '@remix-run/dev';
import { remixDevTools } from 'remix-development-tools';
import { flatRoutes } from 'remix-flat-routes';
import type { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const MODE = process.env.NODE_ENV;

const viteConfig: UserConfig = {
  build: {
    cssMinify: MODE === 'production',
    sourcemap: true,
    rollupOptions: {
      external: [/node:.*/, 'stream', 'crypto', 'fsevents'],
      onwarn(warning, defaultHandler) {
        // Silence pointless warnings on build https://github.com/vitejs/vite/issues/15012#issuecomment-1948550039
        if (warning.code === 'SOURCEMAP_ERROR') return;
        defaultHandler(warning);
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    remixDevTools(),
    remix({
      ignoredRouteFiles: ['**/*'],
      serverModuleFormat: 'esm',
      routes: async (defineRoutes) => {
        return flatRoutes('routes', defineRoutes, {
          ignoredRouteFiles: [
            '.*',
            '**/*.css',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__*.*',
            '**/*.server.*',
            '**/*.client.*',
          ],
        });
      },
    }),
    netlifyPlugin(),
  ],
};

export default viteConfig;
