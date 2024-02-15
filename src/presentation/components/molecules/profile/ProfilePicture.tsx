import calvo from './../../../assets/header/calvo.webp';
import './profilePicture.css';

const ProfilePicture = () => {
  return (
    <div className='container-profile-img'>
      <div className='background-img'/>
      <div className='foreground-img'>
          <img className='img-profile' src={calvo} alt="calvo" />
        </div>
    </div>
  )
};

export default ProfilePicture;
