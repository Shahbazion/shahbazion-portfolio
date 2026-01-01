import ProjectCard from '@/components/ProjectCard'
import { PROJECTS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowLeft, Filter } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            همه پروژه‌ها
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            مجموعه‌ای از پروژه‌های اجرا شده توسط سعید علی شهبازی
          </p>
        </div>

        {/* Filters (Placeholder) */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">فیلتر بر اساس تکنولوژی</h2>
            <button className="flex items-center space-x-2 space-x-reverse text-gold-600 hover:text-gold-700">
              <Filter size={20} />
              <span>فیلترها</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-gold-100 text-gold-700 rounded-full font-medium hover:bg-gold-200 transition-all">
              همه
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all">
              PHP
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all">
              React
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all">
              JavaScript
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all">
              SEO
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all">
              Responsive
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} variant="detailed" />
          ))}
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