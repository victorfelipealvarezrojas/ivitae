import './profileDetailName.css'

export const ProfileDetailName = () => {
    return (
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
    )
}
