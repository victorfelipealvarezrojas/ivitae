import { Profile } from "../organism/profile/Profile"

import './homeTemplate.css'

export const HomeTemplate = () => {
    return (
        <div>
            <Profile />
            <div className="back-ground-container">
               Content
            </div>
        </div>

    )
}