import { getTranslations, getMessages } from 'next-intl/server'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import { ArrowLeft, MessageCircle, Sparkles, Zap } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ProjectCard from '@/components/ProjectCard'
import SkillsSection from '@/components/SkillsSection'
import { Locale } from '@/lib/i18n/config'
import { PROJECTS, SKILLS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// تعیین پارامترهای استاتیک برای ۴ زبان
export function generateStaticParams() {
  return [
    { locale: 'fa' },
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'ar' }
  ]
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  unstable_setRequestLocale(locale)
  
  const t = await getTranslations('HomePage')
  const messages = await getMessages()
  
  // جهت متن بر اساس زبان
  const isRTL = locale === 'fa' || locale === 'ar'
  const rtlClass = isRTL ? 'rtl' : 'ltr'
  
  // پروژه‌های منتخب
  const featuredProjects = PROJECTS.filter(project => project.featured)
    .slice(0, 3)
    .map(project => ({
      ...project,
      // ترجمه عنوان و توضیحات
      title: t(`projects.${project.id}.title`),
      description: t(`projects.${project.id}.description`),
      category: t(`projects.${project.id}.category`)
    }))

  // مهارت‌ها با ترجمه
  const translatedSkills = SKILLS.map(skill => ({
    ...skill,
    name: t(`skills.${skill.id}.name`),
    description: t(`skills.${skill.id}.description`)
  }))

  return (
    <div className={`min-h-screen ${rtlClass}`}>
      {/* Hero Section */}
      <HeroSection locale={locale} />
      
      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '50+', label: t('stats.projects'), icon: '🛠️' },
              { value: '4', label: t('stats.languages'), icon: '🌍' },
              { value: '100%', label: t('stats.satisfaction'), icon: '⭐' },
              { value: '24/7', label: t('stats.support'), icon: '⚡' }
            ].map((stat, index) => (
              <Card
                key={index}
                className="relative p-6 text-center group hover:shadow-lg dark:hover:shadow-neutral-800 transition-all duration-300 border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-gold to-primary-gold-dark bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 mt-2 font-medium">
                  {stat.label}
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-gold/20 rounded-xl transition-colors" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary-gold/30 text-primary-gold">
              <Sparkles className="w-3 h-3 ml-2" />
              {t('projects.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              {t('projects.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard 
                  project={project} 
                  locale={locale}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary-gold to-primary-gold-dark hover:from-primary-gold-dark hover:to-primary-gold text-white px-8 py-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/projects">
                <span>{t('projects.viewAll')}</span>
                <ArrowLeft 
                  className={`${isRTL ? 'rotate-0' : 'rotate-180'} ml-3 group-hover:translate-x-1 transition-transform`} 
                  size={20} 
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-primary-brick/5" />
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary-brick/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-gold to-primary-gold-dark rounded-2xl mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              {t('skills.title')}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              {t('skills.description')}
            </p>
          </div>
          
          <SkillsSection skills={translatedSkills} locale={locale} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-white/30 text-white">
              {t('cta.badge')}
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              {t('cta.title')}
            </h2>
            
            <p className="text-xl text-neutral-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="xl"
                className="group bg-white text-neutral-900 hover:bg-neutral-100 px-10 py-6 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">
                  <MessageCircle className="ml-3 group-hover:rotate-12 transition-transform" size={22} />
                  <span>{t('cta.contactButton')}</span>
                </Link>
              </Button>
              
              <Button
                asChild
                size="xl"
                variant="outline"
                className="group border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-10 py-6 rounded-full font-semibold text-lg backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <a
                  href="https://wa.me/989302809250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  <span>{t('cta.whatsappButton')}</span>
                </a>
              </Button>
            </div>
            
            <p className="text-neutral-400 mt-10 text-sm">
              {t('cta.footer')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
