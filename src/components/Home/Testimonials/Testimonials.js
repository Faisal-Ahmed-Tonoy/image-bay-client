import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
 
 
 
 
const Testimonials = () => {
    const[testimonials,setTestimonials] =useState([])
    useEffect(() =>{
        fetch('https://whispering-mountain-91991.herokuapp.com/review')
        .then(res =>res.json())
        .then(data =>setTestimonials(data))
    },[])

    return (
    
         <section   className="services-container  mt-5">
         <div className="text-center">
              <h2>Testimonials</h2>
         </div>
         <div className="row">
               {
                    testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
               }
         </div>


   </section>
    );
};

export default Testimonials;