
import "./skills.css";

const professionalSkills = [
  { name: "Teamwork" },
  { name: "Leadership" },
  { name: "Communication" },
  { name: "Time management" },
  { name: "Organization" },
  { name: "Problem-solving" },
  { name: "Critical thinking" }
]

const framWorks = [
  { icon: "Nodejs" },
  { icon: "Nextjs" },
  { icon: "APIs" },
  { icon: "React + vite" },
  { icon: "Node + Express" },
  { icon: "Full stack" },
  { icon: "MERN" }
]

const programingLanguages = [
  { icon: "HTML & CSS" },
  { icon: "Javascript" },
  { icon: "React" },
  { icon: "Python"},
  { icon: "C++"},
  { icon: "Mongodb" },
  { icon: "Bootstrap" },
  { icon: "Tailwind" },
  { icon: "Mysql" }
  
]

const devTools = [
  { icon: "git" },
  { icon: "github" },
  { icon: "npm" },
  { icon: "VS Code" },
  { icon: "Versel" }
]

function Skills() {

  return (
    <>
      <div className="skill-card">
        <div className="skill-type-card">
          <h1 className="skill-title">Professional Skills</h1>
          <ul className="pro-skills">
            {professionalSkills.map((skill, index) => 
              <li key={index}>{skill.name}</li>
            )}
          </ul>
        </div>

        <div className="skill-type-card">
          <h1 className="skill-title">Frameworks & Libraries</h1>
          <ul className="pro-skills">
            {framWorks.map((skill, index) => 
              <li key={index}>{skill.icon}</li>
            )}
          </ul>
        </div>
        
        <div className="skill-type-card">
          <h1 className="skill-title">Programming Languages</h1>
          <ul className="pro-skills">
            {programingLanguages.map((skill, index) => 
              <li key={index}>{skill.icon}</li>
            )}
          </ul>
        </div>

        <div className="skill-type-card">
          <h1 className="skill-title">Devtools & Platforms</h1>
          <ul className="pro-skills">
            {devTools.map((skill, index) => 
              <li key={index}>{skill.icon}</li>
            )}
          </ul>
        </div>  

      </div>
    </>
  )
}

export default Skills;