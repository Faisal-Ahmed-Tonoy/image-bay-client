import React, { useState, useEffect } from "react";
import wedding from '../../../images/wedding-rings.png';
import portrait from '../../../images/frame.png';
import event from '../../../images/event.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

 

const Services = () => {
    const [services,setServices] =  useState([]);
    useEffect(()=>{
fetch('https://whispering-mountain-91991.herokuapp.com/services')
.then(res =>res.json())
.then(data =>setServices(data))
    },[])
    return (
      <section style={{color:"linear-gradient(to right, #4776E6, #8E54E9)"}} className="services-container  mt-5">
            <div className="text-center">
                 <h2>Services We Provide</h2>
            </div>
            <div className="row">
                  {
                      services.map(service=><ServiceDetail service={service} key={service._id}></ServiceDetail> )
                  }
            </div>


      </section>
    );
};

export default Services;