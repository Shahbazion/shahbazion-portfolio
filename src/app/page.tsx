import { getTranslations, getMessages } from 'next-intl/server'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/i18n/navigation'
import { 
  ArrowLeft, 
  MessageCircle, 
  Sparkles, 
  Zap, 
  Code2, 
  Rocket,
  Globe,
  Heart,
  CheckCircle2,
  Award,
  Users,
  Clock
} from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ProjectCard from '@/components/ProjectCard'
import SkillsSection from '@/components/SkillsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import { Locale } from '@/lib/i18n/config'
import { PROJECTS, SKILLS, TESTIMONIALS, SERVICES } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

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
  const textDirection = isRTL ? 'rtl' : 'ltr'
  
  // پروژه‌های منتخب با ترجمه
  const featuredProjects = PROJECTS
    .filter(project => project.featured)
    .slice(0, 3)
    .map(project => ({
      ...project,
      title: t(`projects.${project.id}.title`),
      description: t(`projects.${project.id}.description`),
      category: t(`projects.${project.id}.category`),
      technologies: project.technologies?.map(tech => 
        t(`technologies.${tech}`) || tech
      )
    }))

  // مهارت‌ها با ترجمه
  const translatedSkills = SKILLS.map(skill => ({
    ...skill,
    name: t(`skills.${skill.id}.name`),
    description: t(`skills.${skill.id}.description`)
  }))

  // خدمات با ترجمه
  const translatedServices = SERVICES.map(service => ({
    ...service,
    title: t(`services.${service.id}.title`),
    description: t(`services.${service.id}.description`),
    features: service.features?.map(feature => 
      t(`services.${service.id}.features.${feature}`)
    )
  }))

  // نظرات با ترجمه
  const translatedTestimonials = TESTIMONIALS.map(testimonial => ({
    ...testimonial,
    content: t(`testimonials.${testimonial.id}.content`),
    position: t(`testimonials.${testimonial.id}.position`)
  }))

  return (
    <div className={`min-h-screen ${textDirection}`}>
      {/* Hero Section */}
      <HeroSection locale={locale} />

      {/* Stats Section با انیمیشن */}
      <section className="py-16 bg-gradient-to-b from-white via-neutral-50/50 to-white dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-gold/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary-gold/30 text-primary-gold animate-pulse-slow">
              <Rocket className="w-3 h-3 ml-2" />
              {t('stats.subtitle')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              {t('stats.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t('stats.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                value: '50+', 
                label: t('stats.projects'), 
                icon: Code2,
                color: 'from-blue-500 to-cyan-500',
                delay: '0ms'
              },
              { 
                value: '4', 
                label: t('stats.languages'), 
                icon: Globe,
                color: 'from-emerald-500 to-green-500',
                delay: '100ms'
              },
              { 
                value: '100%', 
                label: t('stats.satisfaction'), 
                icon: Heart,
                color: 'from-rose-500 to-pink-500',
                delay: '200ms'
              },
              { 
                value: '24/7', 
                label: t('stats.support'), 
                icon: Clock,
                color: 'from-violet-500 to-purple-500',
                delay: '300ms'
              }
            ].map((stat, index) => (
              <Card
                key={index}
                className="group relative p-6 text-center overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 
                          bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm 
                          hover:shadow-xl hover:scale-105 transition-all duration-500
                          animate-fade-in"
                style={{ animationDelay: stat.delay }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-gold/20 rounded-xl transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 
                                bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-800 dark:to-neutral-900
                                shadow-lg group-hover:shadow-xl transition-shadow">
                    <stat.icon className="w-7 h-7 text-neutral-700 dark:text-neutral-300" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  
                  <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects با انیمیشن‌های پلکانی */}
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-gold/5 to-white dark:from-neutral-950 dark:via-primary-gold/10 dark:to-neutral-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 animate-float">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-gold to-primary-gold-dark flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <Badge className="px-5 py-2 bg-gradient-to-r from-primary-gold/10 to-primary-brick/10 border-primary-gold/20 text-primary-gold">
                {t('projects.badge')}
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-neutral-900 via-primary-gold to-neutral-900 dark:from-white dark:via-primary-gold dark:to-white bg-clip-text text-transparent">
                {t('projects.title')}
              </span>
            </h2>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              {t('projects.description')}
            </p>
            
            <Separator className="max-w-xl mx-auto bg-gradient-to-r from-transparent via-primary-gold/20 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-slide-up"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <ProjectCard 
                  project={project} 
                  locale={locale}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary-gold to-primary-gold-dark 
                        hover:from-primary-gold-dark hover:to-primary-gold 
                        text-white px-10 py-6 rounded-full font-semibold text-lg 
                        shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 
                        before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000"
            >
              <Link href="/projects">
                <span className="relative z-10">{t('projects.viewAll')}</span>
                <ArrowLeft 
                  className={`relative z-10 ${isRTL ? 'rotate-0' : 'rotate-180'} ml-3 group-hover:translate-x-2 transition-transform duration-300`} 
                  size={20} 
                />
              </Link>
            </Button>
            
            <p className="text-neutral-500 dark:text-neutral-400 mt-8 text-sm">
              {t('projects.footer')}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section با طراحی مدرن */}
      <SkillsSection skills={translatedSkills} locale={locale} />

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-primary-brick/30 text-primary-brick">
              <Award className="w-3 h-3 ml-2" />
              {t('services.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translatedServices.map((service, index) => (
              <Card
                key={service.id}
                className="group relative overflow-hidden p-8 border border-neutral-200/50 dark:border-neutral-800/50 
                          hover:border-primary-gold/30 transition-all duration-500 hover:shadow-2xl
                          bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800/50
                          animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-gold/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 
                                bg-gradient-to-br from-primary-gold/10 to-primary-brick/10">
                    <service.icon className="w-6 h-6 text-primary-gold" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-primary-gold ml-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-200/50 dark:border-neutral-700/50">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary-gold group-hover:text-white transition-colors"
                    >
                      <Link href={`/services#${service.id}`}>
                        {t('services.learnMore')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={translatedTestimonials} locale={locale} />

      {/* CTA Section با طراحی درخشان */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-gold/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 
                          bg-gradient-to-br from-primary-gold to-primary-gold-dark shadow-2xl animate-pulse-slow">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <Badge variant="outline" className="mb-6 px-5 py-2 border-white/30 text-white backdrop-blur-sm">
              <Users className="w-3 h-3 ml-2" />
              {t('cta.badge')}
            </Badge>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-gold-light to-white bg-clip-text text-transparent">
                {t('cta.title')}
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-neutral-300 mb-14 leading-relaxed max-w-3xl mx-auto">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                asChild
                size="xl"
                className="group relative overflow-hidden bg-gradient-to-r from-white to-neutral-100 
                          text-neutral-900 hover:text-neutral-900 px-12 py-7 rounded-full 
                          font-semibold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 
                          transition-all duration-500 min-w-[220px]"
              >
                <Link href="/contact">
                  <MessageCircle className="ml-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
                  <span>{t('cta.contactButton')}</span>
                </Link>
              </Button>
              
              <Button
                asChild
                size="xl"
                variant="outline"
                className="group relative overflow-hidden border-2 border-white/30 hover:border-white 
                          text-white hover:bg-white/10 px-12 py-7 rounded-full 
                          font-semibold text-xl backdrop-blur-sm hover:scale-105 
                          transition-all duration-500 min-w-[220px]
                          before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 
                          before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000"
              >
                <a
                  href="https://wa.me/989302809250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  <span>{t('cta.whatsappButton')}</span>
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-neutral-400 text-sm">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-primary-gold ml-2" />
                {t('cta.guarantee1')}
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-primary-gold ml-2" />
                {t('cta.guarantee2')}
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-primary-gold ml-2" />
                {t('cta.guarantee3')}
              </div>
            </div>
            
            <p className="text-neutral-500 mt-12 text-sm">
              {t('cta.footer')} <span className="text-primary-gold">سعید - علی شهبازی</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
