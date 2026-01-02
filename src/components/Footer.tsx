'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Github, Linkedin, Send, Instagram, 
  MessageCircle, Mail, Phone, MapPin,
  Globe, Code, Heart, Coffee,
  Sun, Moon,
  ChevronUp,
  Shield,
  Sparkles
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOCIAL_LINKS, PERSONAL_INFO, LANGUAGES } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('Footer')
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const currentYear = new Date().getFullYear()

  // بررسی جهت نوشتار
  const isRTL = locale === 'fa' || locale === 'ar'
  
  // انیمیشن‌ها
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // اسکرول به بالا
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // رویداد اسکرول
  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // دکمه تغییر تم
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null

  return (
    <>
      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary-gold dark:bg-primary-gold-dark text-white shadow-lg shadow-primary-gold/30 hover:shadow-xl hover:shadow-primary-gold/40 transition-all duration-300 flex items-center justify-center group"
            aria-label={t('scrollToTop')}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronUp size={24} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-neutral-200 dark:border-neutral-700"
        aria-label={t('toggleTheme')}
      >
        {resolvedTheme === 'dark' ? (
          <Sun size={24} className="group-hover:rotate-45 transition-transform" />
        ) : (
          <Moon size={24} className="group-hover:rotate-12 transition-transform" />
        )}
      </button>

      {/* Main Footer */}
      <footer className="relative bg-gradient-to-b from-white via-white to-gray-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 border-t border-neutral-200 dark:border-neutral-800 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-gold/5 dark:bg-primary-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -left-40 w-80 h-80 bg-primary-gold/5 dark:bg-primary-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-primary-gold/5 to-transparent dark:via-primary-gold/10"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16"
          >
            {/* Brand Section */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-gold via-primary-gold to-primary-gold-dark rounded-2xl flex items-center justify-center shadow-lg shadow-primary-gold/20 group">
                    <span className="text-2xl font-bold text-white">ش</span>
                    <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-white animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-gold to-primary-gold-light bg-clip-text text-transparent">
                    {t('name')}
                  </h3>
                  <p className="text-primary-gold-dark dark:text-primary-gold-light text-sm font-medium">
                    {t('title')}
                  </p>
                  <div className="flex items-center mt-2 space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {t('available')}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
                {t('description')}
              </p>
              
              {/* Newsletter Subscription */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {t('newsletter')}
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-gold/30"
                  />
                  <Button type="submit" className="bg-primary-gold hover:bg-primary-gold-dark">
                    {t('subscribe')}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                {t('quickLinks')}
              </h4>
              <ul className="space-y-3">
                {['home', 'projects', 'skills', 'contact', 'blog'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${locale}/${item === 'home' ? '' : item}`}
                      className={cn(
                        "group flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-gold transition-colors",
                        pathname === `/${locale}/${item === 'home' ? '' : item}` && "text-primary-gold font-medium"
                      )}
                    >
                      <div className="w-1.5 h-1.5 bg-primary-gold/0 group-hover:bg-primary-gold rounded-full mr-3 rtl:ml-3 transition-all"></div>
                      <span>{t(`links.${item}`)}</span>
                      <ChevronUp className="mr-2 rtl:ml-2 rtl:rotate-90 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-[-2px]" size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                {t('contact')}
              </h4>
              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center space-x-3 rtl:space-x-reverse text-neutral-600 dark:text-neutral-400 hover:text-primary-gold transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary-gold/10 group-hover:bg-primary-gold/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 rtl:space-x-reverse text-neutral-600 dark:text-neutral-400 hover:text-green-500 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={18} />
                  </div>
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
                <div className="group flex items-center space-x-3 rtl:space-x-reverse text-neutral-600 dark:text-neutral-400">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <MapPin size={18} />
                  </div>
                  <span>{t('location')}</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                {t('social')}
              </h4>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-xl",
                      "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300",
                      "border border-neutral-200 dark:border-neutral-700",
                      "hover:shadow-lg hover:shadow-primary-gold/20",
                      "transition-all duration-300",
                      social.color
                    )}
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.name === 'GitHub' && <Github size={22} />}
                    {social.name === 'LinkedIn' && <Linkedin size={22} />}
                    {social.name === 'Telegram' && <Send size={22} />}
                    {social.name === 'Instagram' && <Instagram size={22} />}
                    {social.name === 'WhatsApp' && <MessageCircle size={22} />}
                    {social.name === 'Email' && <Mail size={22} />}
                  </motion.a>
                ))}
              </div>

              {/* Language Selector */}
              <div className="mt-8">
                <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  <Globe size={16} className="inline mr-2" />
                  {t('language')}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <Link
                      key={lang.code}
                      href={pathname.replace(`/${locale}`, `/${lang.code}`)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-sm transition-all",
                        locale === lang.code
                          ? "bg-primary-gold text-white"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      )}
                    >
                      {lang.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse text-sm">
                <p className="text-neutral-600 dark:text-neutral-400">
                  © {currentYear} {t('rights')}
                </p>
                <div className="hidden sm:flex items-center space-x-4 rtl:space-x-reverse text-neutral-500">
                  <Link href="/privacy" className="hover:text-primary-gold transition-colors">
                    {t('privacy')}
                  </Link>
                  <span>•</span>
                  <Link href="/terms" className="hover:text-primary-gold transition-colors">
                    {t('terms')}
                  </Link>
                  <span>•</span>
                  <Link href="/sitemap.xml" className="hover:text-primary-gold transition-colors">
                    Sitemap
                  </Link>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center">
                  <Code size={16} className="mr-2" />
                  <span>{t('builtWith')}</span>
                  <Heart size={14} className="mx-1 text-red-500 animate-pulse" />
                  <span className="mx-1">&</span>
                  <Coffee size={16} className="mx-1 text-amber-600" />
                </div>
                <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700"></div>
                <div className="flex items-center">
                  <Shield size={16} className="mr-2 text-green-500" />
                  <span>{t('secured')}</span>
                </div>
                <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700"></div>
                <div className="flex items-center">
                  <Sparkles size={16} className="mr-2 text-primary-gold" />
                  <span>{t('hosted')}</span>
                </div>
              </div>
            </div>

            {/* Mobile Links */}
            <div className="sm:hidden mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex justify-center space-x-6 rtl:space-x-reverse text-sm text-neutral-500">
                <Link href="/privacy" className="hover:text-primary-gold transition-colors">
                  {t('privacy')}
                </Link>
                <Link href="/terms" className="hover:text-primary-gold transition-colors">
                  {t('terms')}
                </Link>
                <Link href="/sitemap.xml" className="hover:text-primary-gold transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
