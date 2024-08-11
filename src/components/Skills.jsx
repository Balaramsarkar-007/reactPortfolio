import React from 'react'
import SkillBar from './SkillBar'

function Skills() {
    const skills = [
        { name: 'HTML', proficiency: 90 },
        { name: 'CSS', proficiency: 85 },
        { name: 'JavaScript', proficiency: 80 },
        { name: 'React', proficiency: 85 },
        { name: 'Node Js', proficiency: 80 },
        { name: 'C', proficiency: 60 },
        { name: 'Git and Github', proficiency: 70 },
        { name: 'Express Js', proficiency: 80 },
        { name: 'Bootstrap', proficiency: 83 },
        { name: 'TailwindCss', proficiency: 75 },
        { name: 'MongoDB', proficiency: 80 },
        { name: 'MySQL', proficiency: 60 },
        { name: 'Java + DSA', proficiency: 68 },
        { name: 'Material-UI', proficiency: 65 },
    ];


  return (
    <div className="bg-blue-50 min-h-screen py-[1rem]" id='skills'>
      <div className="max-w-full mx-auto">
        <h2 className="text-[2.5rem] font-bold my-[5rem] pl-[40%]">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
