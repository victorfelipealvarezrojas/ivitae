import { ProfileDetailName } from "../../molecules/profile/ProfileDetailName"
import { ProfileDetailsRole } from "../../molecules/profile/ProfileDetailsRole"
import { ProfileOptions } from "../../molecules/profile/ProfileOptions"
import { ProfilePicture } from "../../molecules/profile/ProfilePicture"
import { SocialMedia } from "../../molecules/socialMedia/SocialMedia"

import './profile.css'

export const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className="profile-details">
                    <SocialMedia />
                    <ProfileDetailName />
                    <ProfileDetailsRole />
                    <ProfileOptions />
                </div>
                <div className="profile-picture" >
                    <ProfilePicture />
                </div>

            </div>
        </div>
    )
}
