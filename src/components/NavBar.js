import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user/1">Profile</Link></li> {/* Assuming user ID 1 */}
      </ul>
    </nav>
  );
}

export default Navbar;
