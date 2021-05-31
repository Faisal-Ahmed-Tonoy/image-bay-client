import React, { useContext, useEffect, useState } from "react";

import'./SideBar.css';
import logo from '../../../images/logo.png';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart,
    faCommentAlt,
    faShoppingBasket,
    faPlus,
    faUserPlus,
    faTrash,
    faHome
  } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
 

const SideBar = () => {
  const [loggedInUser,setLoggedInUser] =useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://whispering-mountain-91991.herokuapp.com/isAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
 
    return (
        <div >
        {isAdmin &&    <div>    
          <div className="side-bar">
              <Link to ="/admin/manageService">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faTrash}
                />
        ManageService
              </Link>

              
            </div>
           <div className="side-bar">
              <Link to="/admin/addService">
                <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faPlus} />
                Add Service
              </Link>
            </div>
  
          <div>
            <div className="side-bar">
              <Link to="/admin/adminServiceList">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faShoppingBasket}
                />
                Service list
              </Link>
            </div>
           
            <div className="side-bar">
              <Link to="/admin/makeAdmin">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faUserPlus}
                />
                Make Admin
              </Link>
            </div>
          </div>
          </div>}
            
     
          <div>
            <div className="side-bar">
              <Link to=  "/service/:_id"><FontAwesomeIcon icon={faShoppingCart} className="mr-2"/>Book</Link>
            </div>
            <div className="side-bar">
              <Link to="/bookingList">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faShoppingBasket}
                />
             Booking
              </Link>
            </div>
            <div className="side-bar">
              <Link to="/review">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faCommentAlt}
                />
                Review
              </Link>

              
            </div>
            <div className="side-bar">
              <Link to="/">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faHome}
                />
             Home
              </Link>
            </div>
         
         
           
          </div>
 
      </div>
    );
};

export default SideBar;