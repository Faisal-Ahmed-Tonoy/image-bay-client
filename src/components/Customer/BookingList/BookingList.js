import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import SideBar from '../../DashBoard/SideBar/SideBar';
import CardList from './CardList/CardList';
 

const BookingList = () => {
     
        const [booking,setBooking] =useState([]) ;
        const [ loggedInUser, setLoggedInUser]=useContext(UserContext)
        useEffect(() =>{
            fetch('https://whispering-mountain-91991.herokuapp.com/order?email='+ loggedInUser.email)
            .then(res =>res.json())
            .then(data =>setBooking(data));
        },[])
        
        const totalPrice = booking.reduce(
            (sum, amount) => sum + parseInt(amount.price),
            0
          );
        
    return (
         
        
        <section class=" d-flex" style={{ padding: "30px 0 30px 50px" }}>
        <div class="col-md-3">
          <img
            style={{ height: "40px", marginBottom: "40px" }}
            src={logo}
            alt=""
          />
          <div className="service-part" style={{marginLeft:"10px"}}>
            <SideBar></SideBar> 
          </div>
        </div>
        <div class="col-md-10" >
          <div class="d-flex">
            <div class="col-md-9">
              <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>
                Service List
              </h5>
            </div>
            <div class="col-md-2">
              <h5 style={{ marginBottom: "20px", textTransform: "uppercase" }}>
                {loggedInUser.name}
              </h5>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#E5E5E5",
              height: "auto",
              padding: " 45px 100px 0 30px",
            }}
            class="d-flex"
          >
            <div class="row">
              {booking.map((item) => ( <CardList item={item} key={item._id}></CardList> 
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
export default BookingList;