 
 
 import React from "react";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
import SideBar from "../../DashBoard/SideBar/SideBar";
 
 
import AddServices from '../AddServices/AddServices';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
 

 
 const Admin = () => {
     return (
   
            <section class=" d-flex"  >
            <div class="col-md-3">
            
        <SideBar></SideBar>
            </div>
            <div class="col-md-9">
              <div class="d-flex">
                
               
              </div>
      
       
            </div>
          </section>
      
);
     
 };
 
 export default Admin;