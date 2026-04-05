import { motion } from "framer-motion";
import "./about.css";


function About() {
    return (
        <motion.section 
                id="About" 
                className="section"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="about">
                    <motion.h1 
                        className="header"
                        initial={{ opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.8}}
                        viewport={{once: true}}
                    >
                        About Me
                    </motion.h1>
                    <motion.h2 
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 0.5}}
                        viewport={{once: true}}
                        className="heading"
                    >
                        See a little about my background and interests.
                    </motion.h2>
                    <motion.div
                        className="paras"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 0.8}}
                        viewport={{once: true}}
                    >
                    <motion.li
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 0.8}}
                        viewport={{once: true}}
                    > Hi, I’m Shivanna M — a Computer Science Engineering student specializing in 
                        Artificial Intelligence at NxtWave Institute of Advanced Technology, in 
                        collaboration with Yenepoya School of Engineering and Technology, Mangaluru.
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 1.0}}
                        viewport={{once: true}}
                    >
                        I’m passionate about building intelligent digital experiences and exploring 
                        the future of AI-driven technology. My interests revolve around Artificial Intelligence, 
                        Machine Learning, and Data Science, where I enjoy understanding how intelligent systems 
                        can analyze data, learn patterns, and solve real-world problems
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 1.2}}
                        viewport={{once: true}}
                    >
                        Beyond academics, I actively participate in hackathons, workshops, and collaborative tech communities,
                         where I experiment with ideas, learn from others, and build innovative solutions.
                    </motion.li>
                    <motion.li
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 1.4}}
                        viewport={{once: true}}
                    >
                        I believe the future belongs to those who can blend intelligent technology with thoughtful design, 
                        creating solutions that are smart, meaningful, and impactful.
                    </motion.li>
                    </motion.div>
                </div>
            </motion.section>   
    )
}

export default About;