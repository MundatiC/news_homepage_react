import React from 'react';

const Navbar = () => {
  return (
    <div className="nav navBar">
      <img className="logo" src="./images/logo.svg" alt="" />
      <img className="icon-menu" src="./images/icon-menu.svg" alt="" />

      <div className="navText">
        <span>Home</span>
        <span>New</span>
        <span>Popular</span>
        <span>Trending</span>
        <span>Categories</span>
      </div>
    </div>
  );
};

export default Navbar;
