import {delay, motion} from "framer-motion";
import "./about.css";


const listContainer = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
        delay: 0.8,
        duration: 1,
      staggerChildren: 0.5
    }
  }
};

const listItem = {
  hidden: { opacity: 0, x: -40 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5
    }
  })
};

function About() {
    return (
        <motion.section 
                id="about" 
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
                        variants={listContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                    <motion.li variants={listItem} custom={0}> Hi, I’m Shivanna M — a Computer Science Engineering student specializing in 
                        Artificial Intelligence at NxtWave Institute of Advanced Technology, in 
                        collaboration with Yenepoya School of Engineering and Technology, Mangaluru.
                    </motion.li>
                    <motion.li variants={listItem} custom={1}>
                        I’m passionate about building intelligent digital experiences and exploring 
                        the future of AI-driven technology. My interests revolve around Artificial Intelligence, 
                        Machine Learning, and Data Science, where I enjoy understanding how intelligent systems 
                        can analyze data, learn patterns, and solve real-world problems
                    </motion.li>
                    <motion.li variants={listItem} custom={2}>
                        Beyond academics, I actively participate in hackathons, workshops, and collaborative tech communities,
                         where I experiment with ideas, learn from others, and build innovative solutions.
                    </motion.li>
                    <motion.li variants={listItem} custom={3}>
                        I believe the future belongs to those who can blend intelligent technology with thoughtful design, 
                        creating solutions that are smart, meaningful, and impactful.
                    </motion.li>
                    </motion.div>
                </div>
            </motion.section>   
    )
}

export default About;