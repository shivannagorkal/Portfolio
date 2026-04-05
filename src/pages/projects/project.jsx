import './project.css';
import { color, motion } from "framer-motion";

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
    },
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
        live_link: "",
        github_link: ""
    },
    {
        unique_id: 0,
        image: "../../../public/projects/moreicon.png",
        desc: "See more projects on my github",
        github_link: "https://github.com/shivannagorkal?tab=repositories"
    }
]   



function Project() {
    return (
        <>

            <motion.section 
                id="Projects" 
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
                initial={{ opacity:0, y:20}}
                whileInView={{ opacity:1, y:0}}
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    project.unique_id !== undefined ? (
                        <motion.div 
                            className='project-card' 
                            key={index}
                            whileHover={{
                                  scale: 1.03,
                                  boxShadow: "0px 20px 40px rgba(0,0,0,0.2)"
                                }}
                            transition={{ duration: 0.8 }}
                        >
                                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                    <motion.img 
                                        src={project.image} 
                                        alt="See more projects" 
                                        whileHover={{
                                            y: -10,
                                            duration: 0.8,
                                            scale: 1.03,
                                            boxShadow: "0px 20px 40px rgba(0,0,0,0.2)"
                                        }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    />
                                    </a>
                            <motion.a href={project.github_link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '20px' }} initial={{ opacity:0, y:20}} whileInView={{ opacity: 1, y:0 }} transition={{ duration:0.8, delay:0.2 }} viewport={{ once:true }}>{project.desc}</motion.a>
                        </motion.div>
                    ) : (
                        <motion.div 
                            className='project-card' 
                            key={index}
                            whileHover={{
                                  scale: 1.03,
                                  boxShadow: "0px 20px 40px rgba(0,0,0,0.2)"
                                }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.img 
                                src={project.image} 
                                alt={project.title} 
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <motion.h3 initial={{ opacity:0, y:20}} whileInView={{ opacity: 1, y:0 }} transition={{ duration:0.8, delay:0.0 }} viewport={{ once:true }} className='title' >{project.title}</motion.h3>
                            <motion.p initial={{ opacity:0, y:20}} whileInView={{ opacity: 1, y:0 }} transition={{ duration:0.8, delay:0.2 }} viewport={{ once:true }}>{project.desc}</motion.p>
                            <motion.div initial={{ opacity:0, y:20}} whileInView={{ opacity: 1, y:0 }} transition={{ duration:0.8, delay:0.0 }} viewport={{ once:true }} className='btns'>
                                <motion.a initial={{ opacity:0, y:20}} whileInView={{ opacity: 1, y:0 }} transition={{ duration:0.8, delay:0.4 }} viewport={{ once:true }} type='button' href={project.github_link} className='project-btn'>View on GitHub</motion.a>
                                <motion.a initial={{ opacity:0, y:20}} whileInView={{ opacity: 1, y:0 }} transition={{ duration:0.8, delay:0.9 }} viewport={{ once:true }} type='button' href={project.live_link} className='project-btn'>View in live</motion.a>
                            </motion.div>
                        </motion.div>
                    )
                ))}
            </div>

                </div>
                </div>
            </motion.section>

        </>
    )
}

export default Project;