import HeroSection from '@/components/HeroSection'
import ProjectCard from '@/components/ProjectCard'
import SkillsSection from '@/components/SkillsSection'
import { PROJECTS, SKILLS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function HomePage() {
  const featuredProjects = PROJECTS.filter(project => project.featured)

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              پروژه‌های منتخب
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نمونه‌ای از پروژه‌های توسعه داده شده با آخرین تکنولوژی‌ها
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>مشاهده همه پروژه‌ها</span>
              <ArrowLeft className="rtl:rotate-180" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              مهارت‌های تخصصی
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تکنولوژی‌ها و ابزارهایی که در پروژه‌ها استفاده می‌کنم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-gold-600 font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            برای پروژه بعدی‌تان آماده‌ام!
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            اگر ایده یا پروژه‌ای در ذهن دارید، با هم می‌توانیم آن را به واقعیت تبدیل کنیم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 space-x-reverse bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all"
            >
              <span>شروع مکالمه</span>
              <ArrowLeft className="rtl:rotate-180" size={20} />
            </Link>
            <a
              href="https://wa.me/989302809250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 space-x-reverse bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
              </svg>
              <span>ارسال پیام در واتساپ</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}