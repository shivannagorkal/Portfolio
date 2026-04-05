import{ motion } from "framer-motion";
import "./certificate.css";

const certificates = [
        {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
        link: ""
        },
        {
            image: "./vite.svg",
            title: "Project 01",
            desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
            link: ""
        },
        {
            image: "./vite.svg",
            title: "Project 01",
            desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
            link: ""
        },
        {
            image: "./vite.svg",
            title: "Project 01",
            desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
            link: ""
        },
        {
            image: "./vite.svg",
            title: "Project 01",
            desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
            link: ""
        },
        {
            image: "./vite.svg",
            title: "Project 01",
            desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
            link: ""
        },
        {
            image: "./vite.svg",
            title: "Project 01",
            desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
            link: ""
        },
        {
            image: "./vite.svg",
            title: "Project 01",
            desc: "This is trail one to check. to the great of the righty fo , fgjd kdhffj ifhthjf jdjshss dfjfhf iufhfy",
            link: "https://www.google.com"
        }
    ]


function certificate() {

    return (
        <>

            <motion.section 
                id="Certificates" 
                className="section"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <motion.div className="projects">
                    <h1 className="header">Certifications & Achievements</h1>
                    <h2 className="heading">Recognizing My Learning Journey.</h2>
                    <p>A collection of certifications from workshops, courses, and hackathons that reflect
                         my continuous learning and dedication to developing skills in Artificial Intelligence,
                          Data Science, and modern technologies.</p>
                    <div>   

            <div className="certificate-card-container">
            {
                certificates.map((certificate, index) => (
                    <div className='certificate-card' key={index}>
                        <img src={certificate.image} alt={certificate.title} />
                        <div className='text'>
                            <h3 className='title'>{certificate.title}</h3>
                            <p>{certificate.desc}</p>
                            <a type='button' href={certificate.link} className='certificate-btn'>View my Project</a>
                        </div>
                    </div>
                ))
            }
            </div>                          
                    </div>
                </motion.div>
                
            </motion.section>
        
        </>
    )
}

export default certificate;