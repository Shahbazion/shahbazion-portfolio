'use client'

import { Project } from '@/types'
import Image from 'next/image'
import { ExternalLink, ArrowLeft } from 'lucide-react'

interface FeaturedProjectsProps {
  project: Project
}

export default function FeaturedProjects({ project }: FeaturedProjectsProps) {
  return (
    <div className="project-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center pt-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 space-x-reverse text-gold-600 hover:text-gold-700 font-medium text-sm"
          >
            <span>مشاهده دمو</span>
            <ExternalLink size={16} />
          </a>
          <button className="flex items-center space-x-1 space-x-reverse text-gray-500 hover:text-gray-700 text-sm font-medium">
            <span>جزئیات بیشتر</span>
            <ArrowLeft className="rotate-180" size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}