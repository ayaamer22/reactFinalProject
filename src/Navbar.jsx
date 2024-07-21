import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Store</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
