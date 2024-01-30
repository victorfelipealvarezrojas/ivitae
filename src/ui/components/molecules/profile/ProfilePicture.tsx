import calvo from './../../../assets/png/calvo.png'
import './profilePicture.css'

export const ProfilePicture = () => {
  return (
    <div>
      <div>
        <img style={{ margin: '20px' }} height="180" src={calvo} alt="calvo" />
      </div>
    </div>
  )
}
