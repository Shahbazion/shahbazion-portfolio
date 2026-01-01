import ContactForm from '@/components/ContactForm'
import SocialLinks from '@/components/SocialLinks'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            تماس با من
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اگر پروژه‌ای در ذهن دارید یا سوالی دارید، خوشحال می‌شوم بشنوم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">اطلاعات تماس</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">ایمیل</h3>
                    <a href="mailto:shahbazion.dev@gmail.com" className="text-gray-600 hover:text-gold-600 transition-colors">
                      shahbazion.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">واتساپ</h3>
                    <a href="https://wa.me/989302809250" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold-600 transition-colors">
                      ۰۹۳۰۲۸۰۹۲۵۰
                    </a>
                    <p className="text-sm text-gray-500 mt-1">پاسخگویی ۲۴ ساعته</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">آدرس</h3>
                    <p className="text-gray-600">ایران</p>
                    <p className="text-sm text-gray-500 mt-1">دورکاری و فریلنسینگ</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">ساعات کاری</h3>
                    <p className="text-gray-600">شنبه تا پنجشنبه</p>
                    <p className="text-gray-600">۹:۰۰ صبح تا ۱۸:۰۰ عصر</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">شبکه‌های اجتماعی</h3>
              <SocialLinks variant="compact" />
            </div>

            {/* Quick Response */}
            <div className="bg-gold-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">پاسخ سریع</h3>
              <p className="text-gray-600 text-sm mb-4">
                معمولاً در کمتر از ۲ ساعت از طریق واتساپ پاسخ می‌دهم
              </p>
              <a
                href="https://wa.me/989302809250"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-all"
              >
                شروع چت در واتساپ
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="rtl:rotate-180" size={20} />
            <span>بازگشت به صفحه اصلی</span>
          </Link>
        </div>
      </div>
    </div>
  )
}