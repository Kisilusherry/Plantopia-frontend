import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      {user ? (
        <div style={styles.profile}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url(/path/to/indoor-plant.jpg)',
    backgroundSize: 'cover',
    color: 'white',
  },
  profile: {
    padding: '20px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: '10px',
  },
};

export default UserProfile;
