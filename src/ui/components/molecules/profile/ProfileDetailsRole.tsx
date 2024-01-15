import { useTypewriter } from "react-simple-typewriter"
import './profileDetailsRole.css'


export const ProfileDetailsRole = () => {

    const [typeEffect] = useTypewriter({
        words: [
            'GitHub',
            'GraphQL',
            'Nest Js',
            'React Js',
            'Next Js',
            'Node Js',
            'Spring Boot Framework',
            'Typescript',
            'Docker',
            'Docker Compose',
            'Apache Kafka',
            'AWS Elastic Beanstalk',
            'AWS S3'
        ],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 80,
        delaySpeed: 1000,
    })

    return (
        <div className="profile-details-role">
            <span className="primary-text ">
                <h1>{typeEffect}</h1>
                <span className="profile-role-tagline">
                    Habilidad para crear aplicaciones con operaciones de fron y back-end
                </span>
            </span>
        </div>
    )
}
