import React from "react";
import {Link, Navigate} from "react-router-dom"
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  
  const logout = ()=>{
    console.log("log")
    return <Navigate to= "/" />
  }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/login">Login page</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=> logout() }>Logout </button>
    </div>
  );
};

export default Navbar;
