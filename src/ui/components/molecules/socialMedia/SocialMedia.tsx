import { Link } from '../../atoms/link/Link'
import './socialMedia.css'

export const SocialMedia = () => {

    const valuesLink = [
        {
            href: 'https://api.whatsapp.com/send?phone=56944905069',
            image_icon: 'fa fa-whatsapp',
            label: 'WhatsApp'
        },
        {
            href: 'mailto:victorfelipealvarezrojas@hotmail.com',
            image_icon: 'fa fa-envelope',
            label: 'Email'
        },
        {
            href: 'https://www.linkedin.com/in/v%C3%ADctor-felipe-%C3%A1lvarez-rojas-548a43182/',
            image_icon: 'fa fa-linkedin-square',
            label: 'LinkedIn'
        }
    ]


    return (
        <div className="colz">
            <div className="colz-icon">
                {
                    valuesLink.map((e, i) => (
                        <Link key={i} href={e.href} target='_blank'>
                            <i className={e.image_icon} aria-label={e.label}></i>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
