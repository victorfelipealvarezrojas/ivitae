import calvo from './../../../assets/header/calvo.webp';
import './profilePicture.css';

const ProfilePicture = () => {
  return (
    <div>
      <div>
        <img style={{ margin: '0px', borderRadius:'100%' }} height="200" src={calvo} alt="calvo" />
      </div>
    </div>
  )
};

export default ProfilePicture;
