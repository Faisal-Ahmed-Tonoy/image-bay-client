import axios from 'axios';
import React, { useContext,useState ,useEffect} from "react";
 
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import SideBar from '../../DashBoard/SideBar/SideBar';


const AddServices = () => {
    const { register, handleSubmit, watch,   errors } = useForm();
    const [imageURL,setIMageURL] = useState(null);
   
    const onSubmit = data =>  {
      const eventData ={
        name:data.name,
        price:data.price,
        description:data.description,
        imageURL:imageURL
      };
      const url = 'https://whispering-mountain-91991.herokuapp.com/addService';
      console.log(eventData);
      fetch(url,{
        method: 'POST',
        headers:{ 
         'content-type': 'application/json'
        },
        body:JSON.stringify(eventData)
      })
      .then(res => console.log('server site response'))
     };
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

    const  handleImageUpload = event =>{ 
      console.log(event.target.files[0])
        const imageData =new FormData();
        imageData.set('key','f9ddb3dab982c8e822f3464eac3237d7');
        imageData.append('image',event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setIMageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });  

    }

   
  
    return (  <section>

      {isAdmin &&    <div class=" d-flex" style={{ padding: "30px 0 30px 50px" }}>

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
              Add Services
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
          <label  htmlFor="name" className="p-2" >
             Service Name:
          </label>
      <input name="name" defaultValue="Enter Name" ref={register} />
      
      <br/>
      <label htmlFor="price" className="p-2" >
           Add  Price
          </label>
      <input name="price" defaultValue="Enter Price" ref={register} />
      
      <br/>
      
      
      <br/>
      <p>Description</p>
<input name="description" defaultValue="Lorem ipsum, dolor sit " ref={register({ required: true })} placeholder="Enter description" />
<br/>
       
      <input  name="imageURL" className="mt-2" type="file"  
       
      onChange ={handleImageUpload}  />   
    
      
       <br/>
      
      <input className="btn btn-primary mt-2" type="submit" />
           
          </form>
        </div>
      </div>
    </div>}
    </section>
    );
};

export default AddServices;