import calvo from './../../../assets/header/calvo.webp';
import './profilePicture.css';

const ProfilePicture = () => {
  return (
    <div className='container-profile-img'>
      <div className='background-img water-drop'>
        <img className='img-profile' height="230" src={calvo} alt="calvo" />
      </div>
    </div>
  )
};

export default ProfilePicture;
