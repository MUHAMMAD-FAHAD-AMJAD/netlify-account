import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'maherzaraimarkaz.store',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'maherzaraimarkaz.store',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'maher-zarai-markaz-d951f.appspot.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'maher-zarai-markaz-d951f.firebasestorage.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'saverenterprises.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
