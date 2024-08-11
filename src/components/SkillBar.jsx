import React from 'react'

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-black-800">{name}</span>
      <span className="text-sm font-medium text-blue-700">{proficiency}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: `${proficiency}%` }}
      ></div>
    </div>
  </div>
  )
}

export default SkillBar
