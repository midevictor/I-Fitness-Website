import React from "react";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [isNavShowing, setNavShowing] = useState(false);
 return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={()=> setNavShowing(false)}>
          <img src={Logo} alt="logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? `show_nav` : `hide_nav`}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className= {({isActive}) => isActive ? 'active-nav' : ''}  onClick={() => setNavShowing(prev => !prev)} end>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav_toggle-btn" onClick={() => setNavShowing(prev => !prev)}>
         {
            isNavShowing ? <AiOutlineClose/> : <GoThreeBars />
         }
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
