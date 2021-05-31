import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import SideBar from '../../DashBoard/SideBar/SideBar';
import logo from '../../../images/logo.png';
 
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
 
 

const Book = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {_id} =useParams(); 
  const [book,setBook] = useState({});
  const {name,price,description,imageURL}= book;
  const [shippingData,setShippingData] =useState(null);
 const onSubmit= data =>{
   setShippingData(data);
 }
  useEffect(() =>{
    fetch('https://whispering-mountain-91991.herokuapp.com/service/'+_id)
    .then(res =>res.json())
    .then(data =>setBook(data));

  },[_id])
  console.log(book);
  
  
  const handlePaymentSuccess =paymentId =>{
    const newOrder ={...loggedInUser,
      name,
      price,
      description
      ,imageURL,
      paymentId,shipment:shippingData}
    
 fetch('https://whispering-mountain-91991.herokuapp.com/placeOrder',{
   method:'POST',
   headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(newOrder)
 })
.then(res =>res.json())
.then(data =>{



});  
}
 
  return (
    
  
      
    <section class=" d-flex" style={{ padding: "30px 0 30px 50px" }}>
    <div class="col-md-2">
      <img
        style={{ height: "40px", marginBottom: "40px" }}
        src={logo}
        alt=""
      />
  <SideBar></SideBar>
    </div>
    <div class="col-md-10">
      <div class="d-flex" style={{backgroundImage: 'linear-gradient(to right, #4776E6, #8E54E9)'}}>
        <div class="col-md-11">
          <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>
 Book
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
          backgroundColor: '#FFFFF',
          height: "500px",
          padding: " 45px 0px 20px 30px",
        }}
        class="d-flex"
      >
         <form style={{
            padding: "30px",
            width: "909px",
            height: "300px",
            background: "#FFFFFF",
            borderRadius: " 20px",display:shippingData? 'none':'block'}} onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  placeholder={loggedInUser.email}ref={register({required:true})} className="form-control"/>
                {errors.email && <span className="text-danger"><small>Email cannot be empty</small></span>}
                <label htmlFor="name">Name</label>
                <input type="name" id="email" name="name"  placeholder={loggedInUser.name}ref={register({required:true})} className="form-control"/>
                {errors.email && <span className="text-danger"><small>Email cannot be empty</small></span>}
                <br/>
                Service Name: {name} 
                <br/>
                Price: {price}  
                <br></br>
                <input type="submit" className="btn btn-primary"value="Checkout"/>
                </form>
                <h1 style={{width:"250px",display:shippingData? 'block':'none'}}><ProcessPayment  handlePayment={handlePaymentSuccess}></ProcessPayment> </h1> 
       
       
 
        
   
    
 
    

   

   
 
    

         
       
      </div>
    </div>
  </section>
  
      
  );
};
 
export default Book;