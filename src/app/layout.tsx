import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'سعید علی شهبازی | توسعه‌دهنده فول‌استک',
  description: 'توسعه‌دهنده فول‌استک - سعید علی شهبازی - پروژه‌های توسعه وب و اپلیکیشن',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon/icon.png" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}