import React from 'react';

const AdminServiceCart = ({pd}) => {
 
    return (
        <div style={{textAlign:"center",backgroundImage:" linear-gradient(to right, #4776E6, #8E54E9)"}}>
        
        <h5  style={{color:"white",marginTop:"10px",padding:"8px"}}> Product Name: {pd.name} | Price: {pd.price} | Email: {pd.email}    </h5>
        {/* <button className="btn btn-primary" > Pending</button> */}
        
        
  </div>     
    );
};

export default AdminServiceCart;