import React from 'react'
import Card from './Card'

function Projects() {

    const projects = [
        {
          id: 1,
          title: "Quickbyte",
          description: "A full-stack online snack ordering platform with secure payments and inventory management.",
          image: "https://res.cloudinary.com/dh8molerc/image/upload/v1720064509/quickbyte_DEV/xkjffxwlyuiiknn71gvq.webp",
          srcPth: "https://quickbyte.balaram.tech/",
          skills: ["EJS", "Express", "Node.js", "MongoDB"]
        },
        {
          id: 2,
          title: "Weather App",
          description: "A weather application providing data with an accuracy range of 80-90%.",
          image: "https://res.cloudinary.com/dh8molerc/image/upload/v1722882304/Screenshot_2024-08-05_235448_qaw7pj.png",
          srcPth: "https://github.com/Balaramsarkar-007/Weather-App",
          skills: ["React", "Material-UI", "CSS"]
        },
        {
          id: 3,
          title: "Todo Application",
          description: "A React-based application utilizing advanced concepts such as Context API and local storage.",
          image: "https://res.cloudinary.com/dh8molerc/image/upload/v1722883443/Screenshot_2024-08-06_001135_uaaemr.png",
          srcPth: "https://github.com/Balaramsarkar-007/todoContextLocal",
          skills: ["React"]
        },
        {
          id: 4,
          title: "Rock Paper Scissors",
          description: "An interactive game built with HTML, CSS, and JavaScript.",
          image: "https://res.cloudinary.com/dh8molerc/image/upload/v1722882642/Screenshot_2024-08-06_000029_uly7os.png",
          srcPth: "https://balaramsarkar-007.github.io/Rock-Paper-Game/",
          skills: ["HTML", "CSS", "JavaScript"]
        }
      ];
      
    
      const getSkillColor = (skill) => {
        const colors = {
          "EJS": "bg-yellow-100 text-yellow-800",
          "Express": "bg-blue-100 text-blue-800",
          "Node.js": "bg-green-100 text-green-800",
          "MongoDB": "bg-green-100 text-green-800",
          "React": "bg-blue-100 text-blue-800",
          "Material-UI": "bg-purple-100 text-purple-800",
          "CSS": "bg-pink-100 text-pink-800",
          "HTML": "bg-orange-100 text-orange-800",
          "JavaScript": "bg-yellow-100 text-yellow-800"
        };
        return colors[skill] || "bg-gray-100 text-gray-800";
      };

  return (
    <section className="text-[0.8rem] px-[8px] py-[3px] rounded-[15px]" id='projects'>
        <h1 className="text-3xl font-bold text-center mb-12">Projects & Skills</h1>
      <div className="flex gap-16 overflow-x-auto pb-[20px] mx-8 my-[0]">
        {projects.map((projects) => (
            <Card
                key={projects.id}
                index={projects.id}
                imgpath={projects.image}
                srcPth={projects.srcPth}
                title={projects.title}
                description={projects.description}
                skills={projects.skills.map((skill) => (
                <span
                    key={skill}
                    className={`text-[0.8rem] px-[8px] py-[3px] rounded-[15px] ${getSkillColor(skill)}`}
                >
                    {skill}
                </span>
                ))}
            />
        ))}
      </div>
    </section>

  )
}

export default Projects
