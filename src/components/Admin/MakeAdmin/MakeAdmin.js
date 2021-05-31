import React, { useContext,useState ,useEffect} from "react";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";
import logo from '../../../images/logo.png';
 
import SideBar from '../../DashBoard/SideBar/SideBar';

const MakeAdmin = () => { 
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    fetch("https://whispering-mountain-91991.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Admin added");
      });
      
  };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
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
  <section>
    {isAdmin &&
      <div class=" d-flex" style={{ padding: "30px 0 30px 50px" }}>
      <div class="col-md-2">
        <img style={{ height: "40px", marginBottom: "40px" }}src={logo} alt=""/>
        <SideBar></SideBar> 
      </div>
      <div class="col-md-10">
        <div class="d-flex">
          <div class="col-md-12">
            <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>
              Add Admin
            </h5>
          </div>
          
        </div>
        <div style={{  backgroundImage: 'linear-gradient(to right, #4776E6, #8E54E9)', height: "500px", padding: " 45px 0px 20px 30px",}}class="d-flex">
        <div >
            <form style={{
            padding: "30px",
            width: "909px",
            height: "300px",
            background: "#FFFFFF",
            borderRadius: " 20px",
          }} onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  ref={register({required:true})} className="form-control"/>
                {errors.email && <span className="text-danger"><small>Email cannot be empty</small></span>}
                <br></br>
                <input type="submit" className="btn btn-primary"value="Submit"/>
            </form>
        </div>
        </div>
      </div>
    </div>
}
  </section>
  );
};

export default MakeAdmin;
