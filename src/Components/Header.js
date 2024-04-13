import { useState } from "react";
import {LOGO_URL} from "../utils/constants.js"
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  
  const onlineStatus = useOnlineStatus();
    const[btnNameReact,setBtnNameReact]=useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
          <li>Online Status: {onlineStatus ? '✅' : '⛔'}</li>
             <li>
                <Link to="/">

                Home

                </Link>
              </li>
              <li>
                <Link to="/About">

                About Us

                </Link>
              </li>
              <li>
                <Link to="/Contact">

                Contact Us

                </Link>
              </li>
          
              <li>
                <Link to="/Cart">

                Cart

                </Link>
              </li>
      
            <button onClick={()=>
            {
             
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");

            }}>{btnNameReact}</button>

          </ul>
        </div>
      </div>
    );
  };
  export default Header;