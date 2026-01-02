import type { Metadata, Viewport } from 'next'
import { Inter, Vazirmatn, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ThemeProvider } from 'next-themes'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

// پیکربندی فونت‌های چندزبانه
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

// روت‌های موجود برای ۴ زبان
export const locales = ['fa', 'en', 'fr', 'ar'] as const
export type Locale = (typeof locales)[number]

// متادیتا داینامیک بر اساس زبان
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  
  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`
    },
    description: t('description'),
    keywords: t('keywords').split(', '),
    authors: [{ name: 'Saeid - Ali Shahbazi', url: 'https://shahbazion.ir' }],
    creator: 'Saeid - Ali Shahbazi',
    publisher: 'Shahbazion Portfolio',
    
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://shahbazion.ir',
      title: t('title'),
      description: t('description'),
      siteName: 'Shahbazion Portfolio',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/twitter-image.png'],
      creator: '@shahbazion',
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
    },
    
    alternates: {
      canonical: 'https://shahbazion.ir',
      languages: {
        'fa-IR': 'https://shahbazion.ir/fa',
        'en-US': 'https://shahbazion.ir/en',
        'fr-FR': 'https://shahbazion.ir/fr',
        'ar-SA': 'https://shahbazion.ir/ar',
      },
    },
    
    category: 'technology',
  }
}

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// generateStaticParams برای SSG
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  // اعتبارسنجی زبان
  if (!locales.includes(locale as Locale)) {
    notFound()
  }
  
  // تعیین جهت نوشتار
  const direction = locale === 'fa' || locale === 'ar' ? 'rtl' : 'ltr'
  
  // دریافت ترجمه‌ها
  const messages = await getMessages()
  
  // کلاس‌های فونت بر اساس زبان
  const fontClasses = {
    fa: `${vazirmatn.variable} font-persian`,
    en: `${inter.variable} font-english`,
    fr: `${inter.variable} font-french`,
    ar: `${cairo.variable} font-arabic`,
  }
  
  return (
    <html 
      lang={locale} 
      dir={direction}
      suppressHydrationWarning
      className={`${fontClasses[locale as Locale]} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#D4AF37" />
        
        {/* Preload فونت‌های حیاتی */}
        <link
          rel="preload"
          href={vazirmatn.variable}
          as="style"
          crossOrigin="anonymous"
        />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'Saeid - Ali Shahbazi',
              'url': 'https://shahbazion.ir',
              'image': 'https://shahbazion.ir/og-image.png',
              'jobTitle': 'Full Stack Developer',
              'worksFor': {
                '@type': 'Organization',
                'name': 'Shahbazion Portfolio'
              },
              'sameAs': [
                'https://github.com/shahbazion',
                'https://linkedin.com/in/shahbazion',
                'https://twitter.com/shahbazion'
              ]
            })
          }}
        />
      </head>
      
      <body className="antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            themes={['light', 'dark', 'system']}
            storageKey="shahbazion-theme"
          >
            {/* Skip to main content برای دسترسی */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary-gold text-white px-4 py-2 rounded-lg"
            >
              Skip to main content
            </a>
            
            <Header locale={locale} />
            
            <main id="main-content" className="min-h-screen pt-20">
              {children}
            </main>
            
            <Footer locale={locale} />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
        
        {/* ابزارهای تحلیل و بهینه‌سازی */}
        <Analytics />
        <SpeedInsights />
        
        {/* Service Worker برای PWA */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
