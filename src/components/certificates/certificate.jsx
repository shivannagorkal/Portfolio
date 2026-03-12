
import "./certificate.css";

const certificates = [
        
    ]


function certificate() {

    return (
        <>
            <div>
            {
                certificates.map((certificate, index) => (
                    <div key={index}>
                        <img src={certificate.image} alt={certificate.name} />
                        <h3>{certificate.name}</h3>
                        <p>{certificate.description}</p>
                    </div>
                ))
            }
            </div>
        
        </>
    )
}

export default certificate;