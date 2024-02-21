import React from 'react';
import{Link} from 'react-router-dom'

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:7300/api/users/logout', {
        method: 'POST', 
        credentials: 'include', // include cookies in the request
      });

      
      if (response.ok) {
        // You can redirect or perform other actions after successful logout
        console.log('User logged out');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
  <Link to="/home">  <button onClick={handleLogout}>
      Logout
    </button></Link>
  );
};

export default Logout;
