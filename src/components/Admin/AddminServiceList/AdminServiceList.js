import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import SideBar from '../../DashBoard/SideBar/SideBar';
import Admin from '../Admin/Admin';
import AdminServiceCart from './AdminServiceListCart/AdminServiceCart';

const AdminServiceList = () => {
    const [service,setService] = useState([]);
    const [ loggedInUser, setLoggedInUser]=useContext(UserContext)
    useEffect(() =>{
        fetch('https://whispering-mountain-91991.herokuapp.com/adminServiceList')
        .then(res =>res.json())
        
        .then(data =>setService(data));
    
    },[])
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
    
    return (     <section>{isAdmin && 
      <div className=" d-flex" style={{ padding: "30px 0 30px 50px"}} >
    <div className="col-md-2">
  <img
    style={{ height: "40px", marginBottom: "40px" }}
    src={logo}
    alt=""
  />
  <SideBar></SideBar>
</div>
       
         <div className="col-md-9">
         <h5 style={{ marginBottom: "20px", marginLeft: "30px" }}>
              All  Service Oder List
              </h5>
         {  

         
      
service.map(pd =>  <AdminServiceCart   key={pd._id} pd={pd}  ></AdminServiceCart  >
  )
}
         </div>
          
     
  </div>}
    </section>




 
      
          
    );
};

export default AdminServiceList;