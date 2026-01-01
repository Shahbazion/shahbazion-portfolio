"use client"

import { Skill } from "@/types"

interface SkillsSectionProps {
  skill: Skill
}

export default function SkillsSection({ skill }: SkillsSectionProps) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-gray-900">{skill.name}</span>
        <span className="text-gold-600 font-bold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-gray-500">
        {skill.level >= 90 && "تخصص کامل"}
        {skill.level >= 75 && skill.level < 90 && "تسلط بالا"}
        {skill.level >= 60 && skill.level < 75 && "سطح متوسط"}
        {skill.level < 60 && "در حال یادگیری"}
      </div>
    </div>
  )
}
