import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Os assets sao importados estaticamente de src/assets — o Next resolve
    // dimensoes no build. Formatos modernos pros JPGs pesados do site.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
