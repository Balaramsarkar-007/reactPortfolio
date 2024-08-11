import React from 'react'

function Card({imgpath, srcPth, title,description, skills, index}) {
  return (
        <div className='bg-[white] rounded-[10px] p-[20px] min-w-[25rem] mx-[0] my-4 [box-shadow:0_4px_6px_rgba(0,_0,_0,_0.1)] [transition:transfrom_0.3s_ease] duration-300 ease-[ease] delay-[0ms] [transition-property:transform] hover:cursor-pointer hover:-translate-y-[10px]'>
            <a href={srcPth} className='no-underline text-[#000000]'>
                <div className='bg-[#E5E5E5] h-[200px] flex items-center justify-center rounded-[8px] mb-[15px] text-[#999]'>
                    <img src={imgpath} className='w-full h-full object-cover rounded-[8px] overflow-hidden' alt='project image' />
                </div>
                <h2 className='text-[1.2rem] mb-[10px] text-[#000000]'>{title}</h2>
                <p className='text-[0.9rem] text-[#000000] mb-[15px] leading-[1.4]'>{description}</p>
                <div className='flex gap-[10px]'>
                    {skills.map((skill, index) => <span key={index}>{skill}</span>)}
                </div>
            </a>
        </div>    
  )
}

export default Card
