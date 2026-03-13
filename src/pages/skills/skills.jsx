import { delay, motion } from "framer-motion";
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

      <motion.section 
          id="skills" 
          className="section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
      >
          <div className="skills">
              <motion.h1 
                className="header"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Skills and Expertise
              </motion.h1>
              <motion.h2 
                className="heading"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                My focus is on Intelligent Solutions, Clean Design <br/> and Continuous Innovation.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I’m continuously developing my technical abilities across Artificial Intelligence, Machine Learning, Data Science, and modern web technologies.
              </motion.p>
              <div>  
                  <div className="skill-card">
                    <div className="skill-type-card">
                      <motion.h1 
                        className="skill-title" 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      >
                        Professional Skills
                      </motion.h1>
                      <ul className="pro-skills">
                        {professionalSkills.map((skill, index) => 
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.1 }}
                            viewport={{ once: true }}
                          >
                            {skill.name}
                          </motion.li>
                        )}
                      </ul>
                    </div>
                      
                    <div className="skill-type-card">
                      <motion.h1 
                        className="skill-title" 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      >
                        Frameworks & Libraries
                      </motion.h1>
                      <ul className="pro-skills">
                        {framWorks.map((skill, index) => 
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.1 }}
                            viewport={{ once: true }}
                          >
                            {skill.icon}
                          </motion.li>
                        )}
                      </ul>
                    </div>
                      
                    <div className="skill-type-card">
                      <motion.h1 
                        className="skill-title" 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      >
                        Programming Languages
                      </motion.h1>
                      <ul className="pro-skills">
                        {programingLanguages.map((skill, index) => 
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.1 }}
                            viewport={{ once: true }}
                          >
                            {skill.icon}
                          </motion.li>
                        )}
                      </ul>
                    </div>
                      
                    <div className="skill-type-card">
                      <motion.h1 
                        className="skill-title" 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      >
                        Devtools & Platforms
                      </motion.h1>
                      <ul className="pro-skills">
                        {devTools.map((skill, index) => 
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.1 }}
                            viewport={{ once: true }}
                          >
                            {skill.icon}
                          </motion.li>
                        )}
                      </ul>
                    </div>  
                      
                  </div>

              </div>
          </div>
      </motion.section>
    </>
  )
}

export default Skills;