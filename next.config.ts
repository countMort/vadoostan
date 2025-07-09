import type { NextConfig } from 'next';
import path from 'path';
import { baseUrl, hostName } from './constants';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: hostName,
        port: '',
        pathname: '/public/**',
        search: '',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'colors.scss')],
    prependData: `@use 'colors.scss' as colors;`, // or additionalData
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Your local proxy endpoint
        destination: `${baseUrl}/api/:path*`, // Target URL
      },
    ];
  },
};

export default nextConfig;
