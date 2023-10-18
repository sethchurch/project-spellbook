/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import withBundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  webpack: (config) => {
    // config.externals is needed to resolve the following errors:
    // Module not found: Can't resolve 'bufferutil'
    // Module not found: Can't resolve 'utf-8-validate'
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@/public'] = path.resolve(__dirname, 'public');

    return config;
  },
});
