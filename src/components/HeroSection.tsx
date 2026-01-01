'use client'

import Image from 'next/image'
import { ArrowLeft, Download } from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50 via-white to-gold-50 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-4">
                👋 سلام، من سعید هستم
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                <span className="block">سعید علی</span>
                <span className="block text-gold-600">شهبازی</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                توسعه‌دهنده فول‌استک
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                برنامه‌نویس وب و موبایل با بیش از ۵ سال تجربه در توسعه اپلیکیشن‌های مدرن.
                عاشق حل مشکلات پیچیده و ساخت محصولاتی که زندگی مردم را بهتر می‌کنند.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>مشاهده پروژه‌ها</span>
                <ArrowLeft className="rtl:rotate-180" size={20} />
              </a>
              <a
                href="https://wa.me/989302809250"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 space-x-reverse border-2 border-gold-500 text-gold-600 px-8 py-3 rounded-full font-medium hover:bg-gold-50 transition-all duration-300"
              >
                <span>در تماس باشیم</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-gray-600 mb-3">همراهم باشید در:</p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all ${social.color} hover:scale-105`}
                  >
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/saeed-alishahbazi-1.jpg"
                    alt="سعید علی شهبازی - توسعه‌دهنده فول‌استک"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/saeed-alishahbazi-2.png"
                    alt="سعید علی شهبازی - برنامه‌نویس وب"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/saeed-alishahbazi-3.jpg"
                    alt="سعید علی شهبازی - توسعه‌دهنده اپلیکیشن"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="text-5xl font-bold mb-2">۵+</div>
                    <div className="text-lg">سال تجربه</div>
                    <div className="text-sm opacity-90">توسعه نرم‌افزار</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">۱۰۰%</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">رضایت مشتری</div>
                  <div className="text-sm text-gray-600">تضمین کیفیت کار</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}