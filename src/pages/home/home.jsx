import Certificate from "../../components/certificates/certificate";
import Projects from "../../components/projects/project";
import SkillsOrbit from "../../components/skills/skills";
import Email from "../navbar/navbar";
import "./home.css";

function home() {
    return (
        <>

            {/* Home section */}

            <section id="home" className="section">
                <div className="pic-w-home">
                    <div className="pic-container">
                        <img src="../../../vite.svg" alt="image" className="pic"/>
                    </div>
                    <div className="home">
                    <h1 className="header">Hi, I'm Shivanna M.</h1>
                    <h2 className="heading">Building <span className="span">Modern</span> Web & <span className="span">AI</span> Experiences</h2>
                    <p>Passionate AI specialist engineering intelligent, ethical solutions for the future.</p>
                    <p>Passionate developer focused on building beautiful interfaces, scalable systems, and innovative digital solutions.</p>
                    <div className="btns">
                        <a href="#projects" className="btn">View My Projects</a>
                        <a href="#contact" className="btn">Contact Me</a>
                    </div>
                    </div>
                </div>
            </section>

            {/* About section */}

            <section id="about" className="section">
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
            </section>

            {/* Skills section */}

            <section id="skills" className="section">
                <div className="skills">
                    <h1 className="header">Skills and Expertise</h1>
                    <h2 className="heading">My focus is on Intelligent Solutions, Clean Design <br/> and Continuous Innovation.</h2>
                    <p>I’m continuously developing my technical abilities across Artificial Intelligence, Machine Learning, Data Science, and modern web technologies.</p>
                    <div>                       
                        <SkillsOrbit />                   
                    </div>
                </div>
            </section>
            <section id="projects" className="section">                
                <div className="skills">
                    <h1 className="header">Projects & Innovations</h1>
                    <h2 className="heading">Things I’ve Built & Experimented With</h2>
                    <p>A collection of projects where I explore ideas, build practical solutions, and apply my knowledge in AI, 
                        data science, and modern web technologies while continuously improving my problem-solving skills.</p>
                    <div>                       
                        <Projects />                 
                    </div>
                </div>
            </section>
            <section id="certificates" className="section">
                <Certificate />
            </section>
            <section id="contact" className="section">
                <Email />
            </section>
            
        </>
    )
}

export default home;