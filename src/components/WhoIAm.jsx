import React from 'react'

function WhoIAm() {
  const socials = [
    {
      id: 1,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/balaram-sarkar-b81377263/',
      icon: 'fab fa-linkedin'
    },
    {
      id: 2,
      name: 'Github',
      link: 'https://github.com/Balaramsarkar-007',
      icon: 'fab fa-github text-2xl'
    },
    {
      id: 3,
      name: 'Mail',
      link: 'https://mail.google.com/mail/u/1/?view=cm&fs=1&to=balaramsarkar8658@gmail.com&tf=1',
      icon: 'fas fa-envelope text-2xl'
    },
  ]

  return (
      <section id='about' className="py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-center mb-12">About Me & Contact</h1>
        <div className="bg-blue-50 min-h-screen flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%]">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">Who I Am</h1>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex flex-col items-center">
                <img
                  src="https://res.cloudinary.com/dh8molerc/image/upload/v1723299799/WhatsApp_Image_2024-04-17_at_12.18.55_AM_pwosqh.jpg"
                  alt="Balaram"
                  className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover mb-4"
                />
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <a href={social.link} className="text-gray-700 hover:text-blue-600" key={social.id}>
                      <i className={`${social.icon} text-xl sm:text-2xl`} key={Date.now()}></i>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  I'm Balaram, a passionate student developer from Odisha, India. My journey in tech is driven by
                  curiosity and a desire to create impactful digital solutions. I specialize in full-stack development,
                  constantly expanding my skill set to stay at the forefront of technology trends.
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  Join me in exploring the ever-evolving tech landscape, where each project showcases my passion
                  for learning and problem-solving. Beyond coding, discover my adventures and travels, reflecting
                  my curiosity and adventurous spirit. Explore my portfolio, where every click unveils a new chapter
                  in my quest to innovate and inspire.
                </p>
                
                <div className="bg-blue-100 rounded-lg p-3 sm:p-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2 sm:mb-3">Quick Facts</h2>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                    <li>Full-stack developer with a focus on web technologies</li>
                    <li>Passionate about AI and machine learning</li>
                    <li>Open-source contributor</li>
                    <li>Constantly learning and exploring new technologies</li>
                    <li>Love to do DSA and solve challenging problems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default WhoIAm
