import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Certificate from "../../components/certificates/certificate";
import Projects from "../../components/projects/project";
import SkillsOrbit from "../../components/skills/skills";
import Email from "../../services/email";
import "./home.css";



function Home() {

    const text = "Building Modern Web & AI Experiences.";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let i = 0;

      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;

        if (i === text.length) {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }, []);

    return (
        <>

            {/* Home section */}
            
            <motion.section 
                id="home" 
                className="section"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="pic-w-home">
                    <motion.div className="pic-container" initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}>
                        <img src="../../../vite.svg" alt="image" className="pic"/>
                    </motion.div>
                    <div className="home">
                    <motion.h1 
                        className="header" 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Hi, I'm Shivanna M.
                    </motion.h1>
                    <motion.h2
                      initial={{opacity: 0, y: 30}}
                      animate={{ opacity: 1, y: 0}}
                      transition={{ duration: 1}}
                      className="heading"
                    >
                      {displayText}
                    </motion.h2>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      Passionate AI specialist engineering intelligent, ethical solutions for the future.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                    >
                      Passionate developer focused on building beautiful interfaces, scalable systems, and innovative digital solutions.
                    </motion.p>
                    <motion.div className="btns"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <a href="#projects" className="btn">View My Projects</a>
                        <a href="#contact" className="btn">Contact Me</a>
                    </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* About section */}

            <motion.section 
                id="about" 
                className="section"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="about">
                    <h1 className="header">About Me</h1>
                    <h2 className="heading">See a little about my background and interests.</h2>
                    <div className="paras">
                    <li> Hi, I’m Shivanna M — a Computer Science Engineering student specializing in 
                        Artificial Intelligence at NxtWave Institute of Advanced Technology, in 
                        collaboration with Yenepoya School of Engineering and Technology, Mangaluru.
                    </li>
                    <li>
                        I’m passionate about building intelligent digital experiences and exploring 
                        the future of AI-driven technology. My interests revolve around Artificial Intelligence, 
                        Machine Learning, and Data Science, where I enjoy understanding how intelligent systems 
                        can analyze data, learn patterns, and solve real-world problems
                    </li>
                    <li>
                        Beyond academics, I actively participate in hackathons, workshops, and collaborative tech communities,
                         where I experiment with ideas, learn from others, and build innovative solutions.
                    </li>
                    <li>
                        I believe the future belongs to those who can blend intelligent technology with thoughtful design, 
                        creating solutions that are smart, meaningful, and impactful.
                    </li>
                    </div>
                </div>
            </motion.section>

            {/* Skills section */}

            <motion.section 
                id="skills" 
                className="section"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="skills">
                    <h1 className="header">Skills and Expertise</h1>
                    <h2 className="heading">My focus is on Intelligent Solutions, Clean Design <br/> and Continuous Innovation.</h2>
                    <p>I’m continuously developing my technical abilities across Artificial Intelligence, Machine Learning, Data Science, and modern web technologies.</p>
                    <div>                       
                        <SkillsOrbit />                   
                    </div>
                </div>
            </motion.section>

{/* Project Section */}

            <motion.section 
                id="projects" 
                className="section"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >                
                <div className="projects">
                    <h1 className="header">Projects & Innovations</h1>
                    <h2 className="heading">Things I’ve Built & Experimented With.</h2>
                    <p>A collection of projects where I explore ideas, build practical solutions, and apply my knowledge in AI, 
                        data science, and modern web technologies while continuously improving my problem-solving skills.</p>
                    <div>                       
                        <Projects />                 
                    </div>
                </div>
            </motion.section>

{/* certficates Section */}

            <motion.section 
                id="certificates" 
                className="section"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="projects">
                    <h1 className="header">Certifications & Achievements</h1>
                    <h2 className="heading">Recognizing My Learning Journey.</h2>
                    <p>A collection of certifications from workshops, courses, and hackathons that reflect
                         my continuous learning and dedication to developing skills in Artificial Intelligence,
                          Data Science, and modern technologies.</p>
                    <div>                       
                        <Certificate />                
                    </div>
                </div>
                
            </motion.section>

{/* Contact Section */}

            <motion.section 
                id="contact" 
                className="section"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="projects">
                    <h1 className="header">Contact & Connect</h1>
                    <h2 className="heading">Let’s Build Something Meaningful Together.</h2>
                    <p>I’m always open to discussing ideas, collaborations, and opportunities related to Artificial Intelligence,
                        technology, and innovative projects. Feel free to reach out if you'd like to connect or work together.</p>
                    <div>
                        <Email />               
                    </div>
                </div>
            </motion.section>
            
        </>
    )
}

export default Home;