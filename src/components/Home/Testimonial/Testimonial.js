 
import React, { useContext,useState } from "react";
 
import { UserContext } from "../../../App";

const Testimonial = (props) => {
    const {name,  review, photoURL} = props.testimonial;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    return (
        
      
            
       
         <div className="col-md-4 text-center testimonial-container mt-5">
         <img style={{height:'150px',backgroundColor:'#6D63E8',  borderRadius: '10px 10px'}} src={photoURL} alt=""/>
         <h5 className=" mt-3" >{name}</h5>
         <p>  {review} </p>
        
     </div>
    );
};

export default Testimonial;