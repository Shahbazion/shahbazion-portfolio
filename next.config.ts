import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // فعال‌سازی کامپایلر React (ری‌اکت ۱۹)
  reactCompiler: true,
  
  // پیکربندی بین‌المللی‌سازی (i18n) برای ۴ زبان
  i18n: {
    locales: ['fa', 'en', 'fr', 'ar'],
    defaultLocale: 'fa',
    localeDetection: true,
  },
  
  // بهینه‌سازی تصاویر مدرن
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // بهبود امنیت و هدرها
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ],
      },
    ]
  },
  
  // فعال‌سازی قابلیت‌های آزمایشی مفید
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
}

export default nextConfig
