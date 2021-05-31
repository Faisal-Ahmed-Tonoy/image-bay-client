import React, { useContext,useState ,useEffect} from "react";
import { UserContext } from "../../../App";
import SideBar from "../../DashBoard/SideBar/SideBar";
import ProductList from './ProductList/ProductList';
import logo from '../../../images/logo.png';

const ManageService = () => {
    const [products,setProducts]= useState([]);
    const deleteProduct =(_id) =>{
      
      fetch('https://whispering-mountain-91991.herokuapp.com/delete/'+_id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((result) => {
     
      const newProducts =products.filter((product) =>product._id !== _id);
      setProducts(newProducts);
    });

  }  
    useEffect(() =>{ 
        fetch('https://whispering-mountain-91991.herokuapp.com/services')
        .then(res =>res.json())
        .then(data =>setProducts(data))
 
        
    },[])
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
        <section>{isAdmin && 
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
               Manage Service
                    </h5>
                    {  
      
               
            
      products.map(product => <ProductList  key={product._id} deleteProduct={deleteProduct} product={product}></ProductList>)
    }
               </div>
                
           
        </div>}
          </section>
     
    );
};

export default ManageService;