import './profile.css'
import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../fireConfige/FirebaseConfig';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import auth from '../../fireConfig/FirebaseConfig';
// import Profile from './Profile';
import { auth } from './../../fireConfig/FirebaseConfig';

function Profile() {
  const [user] = useAuthState(auth);
  console.log(user)
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const openEditProfile = () => {
    setIsEditProfileOpen(true);
  };

  const closeEditProfile = () => {
    setIsEditProfileOpen(false);
  };

  return (
    <>
    <div className="profileSection">
      <h2>User Profile</h2>
      {user ? (
        <>
          <div className='profileContainer'>
            <div className="profileImg">
              {user.photoURL && <img src={user.photoURL} alt="User" />}
            </div>
            <div className="profileContent">
              <p>Name: {user.displayName}</p>
              <p>Email: {user.email}</p>
              <p>Number: {user.phoneNumber}</p>
            </div>
          </div>

          <div className='profileDiv'>
            <NavLink className='profileEdit' to="/editprofile" onClick={openEditProfile}>
              Edit Profile
            </NavLink>
          </div>

          {isEditProfileOpen && (
            <EditProfileForm onClose={closeEditProfile} />
          )}
        </>
      ) : (
        <p>User not signed in</p>
      )}
    </div>    
  </>
 );
}

export default Profile;
