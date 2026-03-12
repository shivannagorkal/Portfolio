import './project.css';

const projects = [
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check.",
        link: ""
    },
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check.",
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
        desc: "This is trail one to check.",
        link: ""
    },
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check.",
        link: ""
    },
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check.",
        link: ""
    },
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check.",
        link: ""
    },
    {
        image: "./vite.svg",
        title: "Project 01",
        desc: "This is trail one to check.",
        link: "https://www.google.com"
    }
]

function project() {
    return [
        <>
            <div className='projects-card-container'>
                {projects.map((project, index) => (
                    <div className='project-card' key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className='text'>
                        <h3 className='title'>{project.title}</h3>
                        <p>{project.desc}</p>
                        <a type='button' href={project.link} className='project-btn'>View my Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    ]
}

export default project;