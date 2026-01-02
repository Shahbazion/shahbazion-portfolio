'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { 
  Menu, 
  X, 
  Home, 
  FolderKanban, 
  Mail, 
  User, 
  Moon, 
  Sun,
  Globe,
  ChevronDown,
  Phone,
  Github,
  Linkedin,
  FileText,
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/hooks/use-language'

// Navigation items with icons and translations
const NAV_ITEMS = [
  { key: 'home', href: '/', icon: Home },
  { key: 'about', href: '/about', icon: User },
  { key: 'projects', href: '/projects', icon: FolderKanban },
  { key: 'contact', href: '/contact', icon: Mail },
] as const

// Languages configuration
const LANGUAGES = [
  { code: 'fa', name: 'فارسی', dir: 'rtl', flag: '🇮🇷' },
  { code: 'en', name: 'English', dir: 'ltr', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', dir: 'ltr', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', dir: 'rtl', flag: '🇸🇦' },
] as const

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  const t = useTranslations('Header')
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { currentLanguage, changeLanguage } = useLanguage()
  
  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Prevent hydration mismatch
  if (!mounted) return null
  
  const currentLang = LANGUAGES.find(lang => lang.code === currentLanguage) || LANGUAGES[0]
  const isRTL = currentLang.dir === 'rtl'
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
        scrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 shadow-lg shadow-black/5'
          : 'bg-transparent',
        isRTL ? 'font-persian' : 'font-english'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
          >
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="relative w-12 h-12"
            >
              <Image
                src="/images/logo.png"
                alt={t('logoAlt')}
                fill
                className="object-contain drop-shadow-lg"
                priority
                sizes="48px"
              />
            </motion.div>
            
            <div className="hidden sm:block">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold bg-gradient-to-r from-primary-gold to-primary-gold-light bg-clip-text text-transparent"
              >
                {t('brandName')}
              </motion.h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t('brandTitle')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            <div className="flex items-center space-x-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      'group relative px-4 py-2 rounded-lg transition-all duration-300',
                      isActive
                        ? 'text-primary-gold font-semibold'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-gold'
                    )}
                  >
                    <span className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{t(`nav.${item.key}`)}</span>
                    </span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-gold to-primary-gold-light rounded-full"
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 hover:border-primary-gold transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{currentLang.flag} {currentLang.name}</span>
                <ChevronDown className={cn(
                  'w-4 h-4 transition-transform',
                  isLanguageOpen && 'rotate-180'
                )} />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-48 rounded-xl bg-white dark:bg-neutral-800 shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code)
                          setIsLanguageOpen(false)
                        }}
                        className={cn(
                          'w-full px-4 py-3 text-left hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center space-x-3',
                          currentLanguage === lang.code && 'bg-primary-gold/10 text-primary-gold'
                        )}
                        style={{ direction: lang.dir }}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {currentLanguage === lang.code && (
                          <Sparkles className="w-4 h-4 ml-auto text-primary-gold" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 hover:border-primary-gold transition-colors"
              aria-label={theme === 'dark' ? t('switchToLight') : t('switchToDark')}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-600" />
              )}
            </button>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/989302809250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>{t('whatsapp')}</span>
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 bg-primary-gold hover:bg-primary-gold-dark text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FileText className="w-4 h-4" />
                <span>{t('resume')}</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Theme Toggle Mobile */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg bg-white/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700"
              aria-label={isOpen ? t('closeMenu') : t('openMenu')}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4 border-t border-neutral-200 dark:border-neutral-700">
                {/* Navigation Links */}
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href
                  const Icon = item.icon
                  
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
                        isActive
                          ? 'bg-primary-gold/10 text-primary-gold'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      )}
                      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{t(`nav.${item.key}`)}</span>
                    </Link>
                  )
                })}

                {/* Language Selector Mobile */}
                <div className="px-4 py-3">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {t('selectLanguage')}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code)
                          setIsOpen(false)
                        }}
                        className={cn(
                          'flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg border transition-colors',
                          currentLanguage === lang.code
                            ? 'border-primary-gold bg-primary-gold/10 text-primary-gold'
                            : 'border-neutral-200 dark:border-neutral-700 hover:border-primary-gold'
                        )}
                        style={{ direction: lang.dir }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="px-4 py-3">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {t('connectWithMe')}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/shahbazion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-neutral-800 hover:bg-black dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/shahbazion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* CTA Buttons Mobile */}
                <div className="px-4 space-y-3">
                  <a
                    href="https://wa.me/989302809250"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{t('whatsapp')}</span>
                  </a>
                  
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-primary-gold hover:bg-primary-gold-dark text-white rounded-lg font-medium transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span>{t('resume')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
