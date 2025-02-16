import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { logOut } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("navDark");
      } else {
        navRef.current.classList.remove("navDark");
      }
    });
  }, []);
  return (
    <div ref={navRef} className="navbar">
      <div className="navbarLeft">
        <img src={logo} alt="Netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My Lists</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbarRight">
        <IoMdSearch className="icons" />
        <p>Children</p>
        <IoMdNotificationsOutline className="icons" />
        <div className="navbarProfile">
          <FaRegUser className="profile" />
          <IoMdArrowDropdown />
          <div className="dropdown">
            <p
              onClick={() => {
                logOut();
              }}
            >
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
