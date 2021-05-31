import axios from 'axios';
import React, { useContext,useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import SideBar from '../../DashBoard/SideBar/SideBar';

 

const Review = () => {
    const {register, handleSubmit, errors, reset} = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
console.log(loggedInUser)
    const onSubmit = data => {
     
        const api = 'https://whispering-mountain-91991.herokuapp.com/addReview'
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              
            },
            body: JSON.stringify(data)
        }).then(res => {
               (window.confirm('Your Review Posted To The Home Page'))
        })
        .catch(err => console.log(err))
        console.log(data)
    };
    return (
      
  <section>
       <section>

  <div class=" d-flex" style={{ padding: "30px 0 30px 50px" }}>

<div class="col-md-2">
  <img
    style={{ height: "40px", marginBottom: "40px" }}
    src={logo}
    alt=""
  />
<SideBar></SideBar>
</div> 
<div class="col-md-10" >
  <div class="d-flex">
    <div class="col-md-11">
      <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>
        Review
      </h5>
    </div>
    <div class="col-md-1">
      <h5 style={{ marginBottom: "20px", textTransform: "uppercase" }}>
        {loggedInUser.name}
      </h5>
    </div>
  </div>
  <div
    style={{
      backgroundImage: 'linear-gradient(to right, #4776E6, #8E54E9)',
      height: "500px",
      padding: " 45px 0px 20px 30px",
    }}
    class="d-flex"
  >
    <form onSubmit={handleSubmit(onSubmit)}
      style={{
        padding: "30px",
        width: "909px",
        height: "300px",
        background: "#FFFFFF",
        borderRadius: " 20px",
      }} >
       <div class="col-md-6"></div>
       <textarea name="review" placeholder="Your Each And Every Word Is Important For Us." cols="30" rows="10" className="form-control" ref={register({required: true})}></textarea>
                {errors.review && <span className="text-danger"><small>You can't submit without write anything. </small></span>}
                <br></br>
 


                <input type="hidden" name="name" ref={register} defaultValue={loggedInUser.name}/>
                <input type="hidden" name="photoURL" ref={register} defaultValue={loggedInUser.photoURL}/>
 

 

                <input type="submit" className="btn btn-primary btn-block"value="Submit"/>
     
    </form>
  </div>
</div>
</div>
</section>
  </section>
    );
};

export default Review;