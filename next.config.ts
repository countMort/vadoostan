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
        source: '/auth/signup', // Your local proxy endpoint
        destination:
          'https://cute-crayfish-currently.ngrok-free.app/auth/signup', // Target URL
      },
      {
        source: '/auth/login', // Your local proxy endpoint
        destination:
          'https://cute-crayfish-currently.ngrok-free.app/auth/login', // Target URL
      },
      {
        source: '/auth/verify-otp', // Your local proxy endpoint
        destination:
          'https://cute-crayfish-currently.ngrok-free.app/auth/verify-otp', // Target URL
      },
    ];
  },
};

export default nextConfig;
