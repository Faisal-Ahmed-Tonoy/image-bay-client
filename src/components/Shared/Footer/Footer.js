import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import'./Footer.css';

const Footer = () => {
    return (
        <footer className="text-center text-light py-5 footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>ImageBay</h2>
             
            <button type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#contactModal"> Contact US</button>
            
              <ul  className = "social-media list-inline" >
        <li  className = "list-inline-item" > < a href = "//facebook.com" > < FontAwesomeIcon className = "icon active-icon" icon = { faFacebookF }/></a > </li> 
        <li  className = "list-inline-item" > < a href = "//google.com" > < FontAwesomeIcon className = "icon"icon = { faGooglePlusG }/></a ></li> 
        <li  className = "list-inline-item" > < a href = "//instagram.com" > < FontAwesomeIcon className = "icon"icon = { faInstagram }/></a > </li>
         </ul>
         <p> Copyright {
            (new Date()).getFullYear() 
        } 
           All Rights Reserved </p> 
         
        
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;