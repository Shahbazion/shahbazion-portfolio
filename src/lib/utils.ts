import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, formatDistance, formatRelative, isValid, parseISO } from 'date-fns'
import { enUS, faIR, fr, ar } from 'date-fns/locale'

// ------------------------------------------------------------
// 1. کلاس‌های CSS
// ------------------------------------------------------------
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ------------------------------------------------------------
// 2. فرمت‌دهنده تاریخ با پشتیبانی ۴ زبانه
// ------------------------------------------------------------
const localeMap = {
  fa: faIR,
  en: enUS,
  fr: fr,
  ar: ar,
} as const

export function formatDate(
  date: string | Date,
  formatStr: string = 'PPP',
  locale: keyof typeof localeMap = 'fa'
) {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    if (!isValid(dateObj)) return 'تاریخ نامعتبر'
    
    return format(dateObj, formatStr, {
      locale: localeMap[locale],
    })
  } catch {
    return 'تاریخ نامعتبر'
  }
}

export function formatRelativeDate(
  date: string | Date,
  baseDate: Date = new Date(),
  locale: keyof typeof localeMap = 'fa'
) {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    if (!isValid(dateObj)) return 'تاریخ نامعتبر'
    
    return formatRelative(dateObj, baseDate, {
      locale: localeMap[locale],
    })
  } catch {
    return 'تاریخ نامعتبر'
  }
}

export function formatDistanceDate(
  date: string | Date,
  baseDate: Date = new Date(),
  locale: keyof typeof localeMap = 'fa'
) {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    if (!isValid(dateObj)) return 'تاریخ نامعتبر'
    
    return formatDistance(dateObj, baseDate, {
      locale: localeMap[locale],
      addSuffix: true,
    })
  } catch {
    return 'تاریخ نامعتبر'
  }
}

// ------------------------------------------------------------
// 3. فرمت‌دهنده اعداد و ارقام با پشتیبانی ۴ زبانه
// ------------------------------------------------------------
export function formatNumber(
  num: number,
  options?: Intl.NumberFormatOptions,
  locale: string = 'fa-IR'
) {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
    ...options,
  }).format(num)
}

export function formatCurrency(
  amount: number,
  currency: string = 'IRR',
  locale: string = 'fa-IR'
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// ------------------------------------------------------------
// 4. دستکاری رشته‌ها با پشتیبانی RTL/LTR
// ------------------------------------------------------------
export function truncateText(
  text: string,
  maxLength: number = 100,
  suffix: string = '...'
) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + suffix
}

export function capitalizeFirstLetter(text: string) {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export function normalizeText(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/[\u064B-\u065F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// ------------------------------------------------------------
// 5. دستکاری URL و مسیرها
// ------------------------------------------------------------
export function absoluteUrl(path: string = '') {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shahbazion.ir'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

export function getLocaleFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean)
  const possibleLocale = segments[0]
  return ['fa', 'en', 'fr', 'ar'].includes(possibleLocale) ? possibleLocale : 'fa'
}

export function createLocalizedPath(
  path: string,
  locale: string,
  defaultLocale: string = 'fa'
) {
  if (locale === defaultLocale) return path
  return `/${locale}${path}`
}

// ------------------------------------------------------------
// 6. تولیدکننده‌های داده
// ------------------------------------------------------------
export function generateId(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function generateGradient(from: string, to: string, angle: number = 135) {
  return `linear-gradient(${angle}deg, ${from} 0%, ${to} 100%)`
}

// ------------------------------------------------------------
// 7. اعتبارسنجی و سنجش
// ------------------------------------------------------------
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const regex = /^[\+]?[1-9][\d]{0,15}$/
  return regex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function measurePerformance<T extends (...args: any[]) => any>(
  fn: T,
  label: string = 'Function'
): T {
  return ((...args: Parameters<T>) => {
    const start = performance.now()
    const result = fn(...args)
    const end = performance.now()
    console.log(`${label} took ${(end - start).toFixed(2)}ms`)
    return result
  }) as T
}

// ------------------------------------------------------------
// 8. دستکاری آبجکت‌ها و آرایه‌ها
// ------------------------------------------------------------
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number = 300
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// ------------------------------------------------------------
// 9. دستکاری رنگ‌ها
// ------------------------------------------------------------
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export function adjustBrightness(color: string, percent: number): string {
  const rgb = hexToRgb(color)
  if (!rgb) return color

  const adjust = (value: number) => {
    const adjusted = value + (value * percent) / 100
    return Math.min(255, Math.max(0, Math.round(adjusted)))
  }

  const r = adjust(rgb.r).toString(16).padStart(2, '0')
  const g = adjust(rgb.g).toString(16).padStart(2, '0')
  const b = adjust(rgb.b).toString(16).padStart(2, '0')

  return `#${r}${g}${b}`
}

// ------------------------------------------------------------
// 10. ابزارهای توسعه
// ------------------------------------------------------------
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development'
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production'
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ------------------------------------------------------------
// 11. تایپ گاردها و ادعاها
// ------------------------------------------------------------
export function assert(condition: any, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message || 'Assertion failed')
  }
}

export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null
}

export function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

// ------------------------------------------------------------
// 12. ابزارهای مخصوص پروژه شما
// ------------------------------------------------------------
/**
 * تابع مخصوص برای قالب‌بندی نام کامل شما
 * فرمت: "سعید - علی شهبازی"
 */
export function formatFullName(
  firstName: string = 'سعید',
  lastName: string = 'علی شهبازی',
  separator: string = ' - '
): string {
  return `${firstName}${separator}${lastName}`
}

/**
 * تولید متن SEO-friendly برای شما
 */
export function generateSeoDescription(
  jobTitle: string = 'توسعه‌دهنده فول‌استک',
  location: string = 'ایران'
): string {
  return `${formatFullName()} | ${jobTitle} از ${location}. متخصص در توسعه وب و اپلیکیشن‌های مدرن با آخرین تکنولوژی‌ها.`
}

/**
 * تولید آرایه زبان‌ها برای پروژه شما
 */
export function getSupportedLanguages(): Array<{
  code: string
  name: string
  dir: 'rtl' | 'ltr'
  flag: string
}> {
  return [
    { code: 'fa', name: 'فارسی', dir: 'rtl', flag: '🇮🇷' },
    { code: 'en', name: 'English', dir: 'ltr', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', dir: 'ltr', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', dir: 'rtl', flag: '🇸🇦' },
  ]
}

/**
 * اعتبارسنجی فرم تماس
 */
export function validateContactForm(data: {
  name: string
  email: string
  message: string
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  if (!data.name?.trim()) {
    errors.name = 'نام الزامی است'
  } else if (data.name.trim().length < 2) {
    errors.name = 'نام باید حداقل ۲ حرف باشد'
  }

  if (!data.email?.trim()) {
    errors.email = 'ایمیل الزامی است'
  } else if (!isValidEmail(data.email)) {
    errors.email = 'ایمیل معتبر نیست'
  }

  if (!data.message?.trim()) {
    errors.message = 'پیام الزامی است'
  } else if (data.message.trim().length < 10) {
    errors.message = 'پیام باید حداقل ۱۰ حرف باشد'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

// ------------------------------------------------------------
// 13. اکپورت‌های پیش‌فرض
// ------------------------------------------------------------
export default {
  cn,
  formatDate,
  formatNumber,
  truncateText,
  absoluteUrl,
  generateId,
  isValidEmail,
  deepClone,
  debounce,
  throttle,
  formatFullName,
  generateSeoDescription,
  getSupportedLanguages,
  validateContactForm,
}
