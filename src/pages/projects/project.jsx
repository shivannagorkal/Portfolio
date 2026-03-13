import './project.css';
import { delay, motion, stagger } from "framer-motion";

const projects = [

    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
        live_link: "",
        github_link: ""
    },
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
        live_link: "",
        github_link: ""
    },
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
        live_link: "",
        github_link: ""
    },
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
        live_link: "",
        github_link: ""
    }
    
]   


const container = {
  hidden: {},
  show: {
    transition: {
        delay: 0.9,
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0
  }
};


function project() {
    return [
        <>

            <motion.section 
                id="projects" 
                className="section"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >                
                <div className="projects">
                    <motion.h1 
                        className="header"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                        viewport={{once: true}}
                    >
                        Projects & Innovations
                    </motion.h1>
                    <motion.h2 
                        className="heading"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.5}}
                        viewport={{once: true}}
                    >
                        Things I’ve Built & Experimented With.
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.7}}
                        viewport={{once: true}}
                    >
                        A collection of projects where I explore ideas, build practical solutions, and apply my knowledge in AI, 
                        data science, and modern web technologies while continuously improving my problem-solving skills.
                    </motion.p>
                    <div>           
            <div 
                className='projects-card-container'
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div 
                        className='project-card' 
                        key={index}
                        variants={item}
                        transition={{ delay: index * 2, duration: 0.8 }}
                    >
                        <motion.img 
                            src={project.image} 
                            alt={project.title} 
                            whileHover={{
                              y: -10,
                              scale: 1.03,
                              boxShadow: "0px 20px 40px rgba(0,0,0,0.2)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                        <motion.h3 className='title'>{project.title}</motion.h3>
                        <motion.p>{project.desc}</motion.p>
                        <motion.div className='btns'>
                            <a type='button' href={project.github_link} className='project-btn'>View on GitHub</a>
                            <a type='button' href={project.live_link} className='project-btn'>View in live</a>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

                </div>
                </div>
            </motion.section>

        </>
    ]
}

export default project;