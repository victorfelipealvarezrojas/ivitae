import { useTypewriter } from "react-simple-typewriter"
import './profileDetailsRole.css'


export const ProfileDetailsRole = () => {

    const [typeEffect] = useTypewriter({
        words: [
            'Desarrollador FullStack',
        ],
        typeSpeed: 50,
        deleteSpeed: 80,
        delaySpeed: 1000,
    })

    return (
        <div className="profile-details-role">
            <span className="primary-text ">
                <h1>{typeEffect}</h1>
            </span>
        </div>
    )
}
