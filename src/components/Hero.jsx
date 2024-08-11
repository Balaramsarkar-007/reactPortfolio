import React from 'react'


function Hero() {
  return (
            <section className="flex flex-col md:flex-row justify-between items-center py-8 md:py-16 px-4 md:px-16">
                <div className="max-w-full md:max-w-2xl mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-bold">
                        Crafting <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Digital</span>
                        <p>Experiences</p>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        Student developer from Odisha, India. Turning
                        <br className="hidden md:inline" />
                        ideas into elegant, functional code.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">View Portfolio</button>
                        <a href='#contact' className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold border border-gray-300 hover:bg-gray-100 transition duration-300">Contact Me</a>
                    </div>
                </div>
                <div className="w-full md:w-[26rem]">
                    <img src="https://res.cloudinary.com/dh8molerc/image/upload/v1723299799/WhatsApp_Image_2024-04-17_at_12.18.55_AM_pwosqh.jpg" alt="Workspace with laptop showing code" className="rounded-lg shadow-lg overflow-hidden object-cover w-full h-64 md:w-[26rem] md:h-[20rem]" />
                </div>
            </section>
  )
}

export default Hero
