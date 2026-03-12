import './project.css';

const projects = [

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
    }
    
]

function project() {
    return [
        <>
            <div className='projects-card-container'>
                {projects.map((project, index) => (
                    <div className='project-card' key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3 className='title'>{project.title}</h3>
                        <p>{project.desc}</p>
                        <div className='btns'>
                            <a type='button' href={project.link} className='project-btn'>In github</a>
                            <a type='button' href={project.link} className='project-btn'>In live</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    ]
}

export default project;