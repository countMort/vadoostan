import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'colors.scss')],
    prependData: `@use 'colors.scss' as colors;`, // or additionalData
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Your local proxy endpoint
        destination:
          'https://cute-crayfish-currently.ngrok-free.app/api/:path*', // Target URL
      },
    ];
  },
};

export default nextConfig;
