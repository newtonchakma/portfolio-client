import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/muSkill">My Skill</Link></li>
    <li><Link to="/project">Project</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-content text-white top-0 shadow-lg py-5 px-2">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-52 text-2xl">
      {menuItems}
      </ul>
    </div>
    <a className=" pl-5 text-4xl font-bold">Newton Chakma</a>
  </div>
  <div className="navbar-center hidden lg:flex navbar-end">
    <ul className="menu menu-horizontal p-0 text-2xl">
      {menuItems}
    </ul>
  </div>
 
  <div className="">
 
        
        </div> 
  
</div>
    );
};

export default Navbar;