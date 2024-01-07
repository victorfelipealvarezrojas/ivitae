import { useTypewriter } from 'react-simple-typewriter'

import './Profile.style.css'

export const Profile = () => {

    const [typeEffect] = useTypewriter({
        words: [
            'React Js',
            'Next Js',
            'Node Js',
            'Spring Boot Framework',
            'Typescript',
            'Docker',
            'Docker Compose',
            'Apache Kafka',
            'AWS (Elastic Beanstalk)'
        ],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 80,
        delaySpeed: 1000,
    })


    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href='https://api.whatsapp.com/send?phone=56944905069' target='_blank'>
                                <i className='fa fa-whatsapp'></i>
                            </a>
                            <a href='mailto:victorfelipealvarezrojas@hotmail.com'>
                                <i className='fa fa-envelope'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/v%C3%ADctor-felipe-%C3%A1lvarez-rojas-548a43182/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px'

                        }} className="primary-text">
                            Hola , Soy  <span
                                style={{
                                    marginLeft: '9px',
                                    marginTop: '1px'
                                }}
                                className="highlighted-text"
                            >Victor Alvarez</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text ">
                            <h1>{typeEffect}</h1>
                            <span className="profile-role-tagline">
                                Habilidad para crear aplicaciones con operaciones de fron y back-end
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn'>
                            Acerca de mi
                        </button>
                        <a
                            href="../../../document/victoralvarezCV.pdf"
                            download='victor felipealvarez rojas.pdf'
                        >
                            <button className='btn highlighted-btn'>Obten Reumen</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}
