import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./home.css";



function Home() {

    const text = "SHIVANNA. ";
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
                id="Home" 
                className="section"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="pic-w-home">
                    <motion.div className="pic-container" initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }}>
                        <img src="../../../public/profile_pic.jpg" alt="image" className="pic"/>
                    </motion.div>
                    <div className="home">
                    <motion.h1 
                        className="head-line"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                      {displayText}
                    </motion.h1>
                    <motion.h2
                      initial={{opacity: 0, y: 30}}
                      animate={{ opacity: 1, y: 0}}
                      transition={{ duration: 1}}
                    >
                      Building Modern Web & AI Experiences.
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
                        <a href="#Projects" className="btn">View My Projects</a>
                        <a href="#Contact" className="btn">Contact Me</a>
                    </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* About section */}

             
            
        </>
    )
}

export default Home;