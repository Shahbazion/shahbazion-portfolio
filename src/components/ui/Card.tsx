import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
}

export default function Card({ 
  children, 
  className, 
  hover = false,
  padding = 'md'
}: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: ''
  }

  return (
    <div className={cn(
      'bg-white rounded-2xl border border-gray-200 shadow-sm',
      paddingStyles[padding],
      hover && 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
      className
    )}>
      {children}
    </div>
  )
}