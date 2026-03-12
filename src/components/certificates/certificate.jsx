
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
        
        </>
    )
}

export default certificate;