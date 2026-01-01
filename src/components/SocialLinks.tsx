import { Github, Linkedin, Send, Instagram, MessageCircle, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

interface SocialLinksProps {
  variant?: 'default' | 'compact' | 'icons-only'
  className?: string
}

export default function SocialLinks({ variant = 'default', className = '' }: SocialLinksProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />
      case 'LinkedIn': return <Linkedin size={20} />
      case 'Telegram': return <Send size={20} />
      case 'Instagram': return <Instagram size={20} />
      case 'WhatsApp': return <MessageCircle size={20} />
      default: return null
    }
  }

  if (variant === 'icons-only') {
    return (
      <div className={`flex gap-3 ${className}`}>
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all ${social.color}`}
            title={social.name}
          >
            {getIcon(social.name)}
          </a>
        ))}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all ${social.color}`}
          >
            {getIcon(social.name)}
            <span className="text-sm font-medium">{social.name}</span>
          </a>
        ))}
      </div>
    )
  }

  // Default variant
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center space-x-4 space-x-reverse p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all hover:scale-[1.02] ${social.color}`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${social.name === 'WhatsApp' ? 'bg-green-100 text-green-600' : social.name === 'Telegram' ? 'bg-blue-100 text-blue-600' : social.name === 'Instagram' ? 'bg-pink-100 text-pink-600' : social.name === 'LinkedIn' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
            {getIcon(social.name)}
          </div>
          <div className="flex-1">
            <div className="font-bold text-gray-900">{social.name}</div>
            <div className="text-sm text-gray-600 truncate">{social.url.replace('https://', '')}</div>
          </div>
          <div className="text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  )
}