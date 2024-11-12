import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile">
        <img className='profile-img mt-3' src="/images/boxycropshirt.jpg" alt="User Profile" />
      </div>
      <div className="profile-details">
        <form>
          <label className='mt-3'>Name:</label> 
          <input  type="text" name="name" /> 
          <label>Email:</label> 
          <input type="email" name="email" /> 
          <label>Contact Number:</label> 
          <input type="text" name="contact" /> 
          <label>Delivery Address:</label> 
          <input type="text" name="address" /> 
          <div className="profile-buttons mb-5">
            <button className="btn btn-danger" type="button">View Purchases</button>
            <button className="btn btn-danger" type="button">Change Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
