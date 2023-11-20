import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navStyle = {
    display: "grid",
  };

  return (
    <div className='navbar' style={navStyle}>
      <NavLink to='/' exact>
        Home
      </NavLink>
      <NavLink to='/Movies'>Movies</NavLink>
      <NavLink to='/directors'>Directors</NavLink>
      <NavLink to='/actors'>Actors</NavLink>
    </div>
  );
}

export default NavBar;
