import React,{useState} from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import '../styles/Navbar.css';
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";
const Navbar = () => {
    const [isMobile,setIsMobile]=useState(false);
  return (
    <Router>
    <nav className="navbar">
      <h3 className="logo">Unqueue</h3>
      <ul className={isMobile?"nav_links_mobile":"nav_links"}>
        <Link to="/" className="nav_link">
          <li>Home</li>
        </Link>
        <Link to="/dashboard" className="nav_link">
          <li>Dashboard</li>
        </Link>
        <Link to="/create-qroom" className="nav_link">
          <li>Create Qroom</li>
        </Link>
        <Link to="/login" className="nav_link login_link">
          <li>Partner Login</li>
        </Link>
        <Link to="/about" className="nav_link">
          <li>About Us</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={()=>isMobile?setIsMobile(false):setIsMobile(true)}>
          {isMobile?(<AiOutlineCloseSquare/>):(<MdOutlineMenu/>)}
      </button>
    </nav>
    </Router>
  );
};

export default Navbar;
