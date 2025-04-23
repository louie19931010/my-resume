import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/my-resume/' : '',
  assetPrefix: isProd ? '/my-resume/' : '',
  trailingSlash: true,
};

export default nextConfig;
