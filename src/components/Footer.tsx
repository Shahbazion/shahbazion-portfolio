import Link from 'next/link'
import { 
  Github, Linkedin, Send, Instagram, 
  MessageCircle, Mail, Phone, MapPin 
} from 'lucide-react'
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">ش</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  سعید شهبازی
                </h3>
                <p className="text-sm text-gold-600">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              توسعه‌دهنده فول‌استک با تمرکز بر Node.js، JavaScript و Python
              متخصص در ساخت اپلیکیشن‌های وب مدرن و مقیاس‌پذیر
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              لینک‌های سریع
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gold-600 transition-colors flex items-center space-x-2 space-x-reverse"
                >
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>خانه</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-gold-600 transition-colors flex items-center space-x-2 space-x-reverse"
                >
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>پروژه‌ها</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gold-600 transition-colors flex items-center space-x-2 space-x-reverse"
                >
                  <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                  <span>تماس</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              ارتباط با من
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-3 space-x-reverse text-gray-600 hover:text-gold-600 transition-colors"
              >
                <Mail size={18} />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href="https://wa.me/989302809250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 space-x-reverse text-gray-600 hover:text-gold-600 transition-colors"
              >
                <MessageCircle size={18} />
                <span>واتساپ: ۰۹۳۰۲۸۰۹۲۵۰</span>
              </a>
              <div className="flex items-center space-x-3 space-x-reverse text-gray-600">
                <MapPin size={18} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              شبکه‌های اجتماعی
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 ${social.color} transition-all hover:scale-110 hover:shadow-lg`}
                  title={social.name}
                >
                  {social.name === 'GitHub' && <Github size={20} />}
                  {social.name === 'LinkedIn' && <Linkedin size={20} />}
                  {social.name === 'Telegram' && <Send size={20} />}
                  {social.name === 'Instagram' && <Instagram size={20} />}
                  {social.name === 'WhatsApp' && <MessageCircle size={20} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} سعید علی شهبازی. تمام حقوق محفوظ است.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600">
              <span>ساخته شده با ❤️ و Next.js</span>
              <span className="hidden md:inline">•</span>
              <span>میزبانی شده روی Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}