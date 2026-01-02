/** @type {import('next').NextConfig} */
const nextConfig = {
  // پشتیبانی کامل از چندزبانگی (فارسی، انگلیسی، عربی، فرانسوی)
  i18n: {
    locales: ['fa', 'en', 'ar', 'fr'],
    defaultLocale: 'fa',
    localeDetection: true,
    domains: [
      {
        domain: 'shahbazion.ir',
        defaultLocale: 'fa',
      },
      {
        domain: 'en.shahbazion.ir',
        defaultLocale: 'en',
      },
      {
        domain: 'ar.shahbazion.ir',
        defaultLocale: 'ar',
      },
      {
        domain: 'fr.shahbazion.ir',
        defaultLocale: 'fr',
      },
    ],
  },

  // تنظیمات پیشرفته React و SWC
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // پشتیبانی از تصاویر بهینه‌شده از منابع مختلف
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // بهینه‌سازی‌های عملکردی
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // ریدایرکت‌های اختیاری برای یکپارچگی بیشتر
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.shahbazion.ir',
          },
        ],
        destination: 'https://shahbazion.ir',
        permanent: true,
      },
    ];
  },

  // هدرهای امنیتی پیشرفته
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
