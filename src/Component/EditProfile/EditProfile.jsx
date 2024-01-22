// EditProfileForm.js
import React, { useState } from 'react';
import { updateProfile } from 'firebase/auth';
// import auth from '../../fireConfige/FirebaseConfig';
import './editProfile.css'
// import auth from '../../fireConfig/FirebaseConfig';
import { auth } from './../../fireConfig/FirebaseConfig';

function EditProfile({ onClose }) {
  const [newDisplayName, setNewDisplayName] = useState('');

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(auth.currentUser, {
        Name: newDisplayName,
        // Add other fields you want to update
      });

      // You can add more logic like showing a success message or redirecting
      console.log('Profile updated successfully');

      // Close the edit profile form
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div className='edidProfileContainer'>
      <h3>Edit Profile</h3>
      <label>
        New Name:
        <input
          type="text"
          value={newDisplayName}
          onChange={(e) => setNewDisplayName(e.target.value)}
        />
      </label>
      {/* Add other input fields for updating other profile information */}
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}

export default EditProfile;
