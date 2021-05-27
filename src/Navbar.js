import React from 'react';
import { NavLink } from "react-router-dom";
import justLogoIcon from './assets/justLogoIcon.png'


function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-start mb-0 h3" id="navbarNav">
            <ul className="navbar-nav flex-nowrap">
              <li className="nav-item">
                  <NavLink className="navbar-brand" to="/" exact >
                    <img src={justLogoIcon} alt="logo icon" width="45" height="40" className="d-inline-block align-text-top"/>
                </NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link" to="/" exact > Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/meals" exact> Menu </NavLink>
              </li>
              </ul>
              <ul className="navbar-nav ms-auto flex-nowrap">
                <li className="nav-item ">
                <NavLink className="nav-link" to="/cart/:id" exact> 
                {/* image for the cart */}
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg> 
                </NavLink>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    )

}

export default Navbar