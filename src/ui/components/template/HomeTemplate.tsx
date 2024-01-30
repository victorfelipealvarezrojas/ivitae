import { Profile } from "../organism/profile/Profile"

import './homeTemplate.css'

export const HomeTemplate = () => {
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        }}>
            <Profile />
            <div className="back-ground-container">
               Content
            </div>
        </div>

    )
}