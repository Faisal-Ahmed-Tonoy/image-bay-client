import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import'./ServiceDetail.css';

const ServiceDetail = (props) => {
    const {_id,imageURL,price,description,name} =props.service
    const history = useHistory()
    const handleProceed =() =>{
        history.push('/service/'+_id)
    }
   
    
  
 
    return (
        <div className="col-md-4 text-center service-container mt-5">
            <img style={{height:'150px',backgroundColor:'#6D63E8',  borderRadius: '10px 10px'}} src={imageURL} alt=""/>
            <h5 className=" mt-3" >Price ${price}</h5>
            <p> {description}</p>
          <div>
            <button style={{height:'40px',backgroundColor:'#6D63E8',  borderRadius: '10px 10px'}}  onClick={handleProceed}   className="btn btn-primary my-2 btn-style" type="button">          <Link to= {"/service/"+_id}>  <h6  style={{color:'white', textDecoration: 'none' }}>{name}</h6></Link>  </button>
          </div>
            
        </div>
    );
};

export default ServiceDetail;