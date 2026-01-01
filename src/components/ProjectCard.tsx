'use client'

import Image from 'next/image'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { Project } from '@/types'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'detailed'
}

export default function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  if (variant === 'detailed') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          {/* Project Image */}
          <div className="lg:col-span-1">
            <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Project Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                <span>مشاهده دمو</span>
                <ExternalLink size={18} />
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 space-x-reverse border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all"
                >
                  <span>مشاهده کد</span>
                  <Github size={18} />
                </a>
              )}
              <button className="inline-flex items-center space-x-2 space-x-reverse text-gold-600 hover:text-gold-700 font-medium">
                <span>جزئیات بیشتر</span>
                <ArrowLeft className="rtl:rotate-180" size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
    >
      {/* Image */}
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
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
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
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
            className="inline-flex items-center space-x-1 space-x-reverse text-gold-600 hover:text-gold-700 font-medium text-sm"
          >
            <span>مشاهده دمو</span>
            <ExternalLink size={16} />
          </a>
          <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
            جزئیات بیشتر
          </button>
        </div>
      </div>
    </motion.div>
  )
}