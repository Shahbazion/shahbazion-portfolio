/** @type {import('postcss').Postcss} */
const config = {
  plugins: {
    // Tailwind CSS با پیکربندی پیشرفته
    tailwindcss: {
      config: './tailwind.config.ts' // یا './tailwind.config.js' - یکسان‌سازی با فایل کانفیگ شما
    },
    
    // Autoprefixer با تنظیمات مدرن
    autoprefixer: {
      flexbox: 'no-2009',
      grid: 'autoplace'
    },
    
    // بهینه‌سازی CSS برای محیط تولید (فقط در ساخت)
    ...(process.env.NODE_ENV === 'production'
      ? {
          'cssnano': {
            preset: ['default', {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              colormin: true,
              cssDeclarationSorter: true
            }]
          }
        }
      : {})
  }
}

module.exports = config
