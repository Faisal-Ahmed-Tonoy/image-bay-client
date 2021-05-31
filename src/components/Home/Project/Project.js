import React from 'react';
import photo1 from '../../../images/photo-1.jpg';
import photo2 from '../../../images/photo-2.jpg';
import photo3 from '../../../images/photo-3.jpg';


 

const Project = () => {

    return (
        <section  className="py-5 text-center "  >
        <div className="container">
          <div className="row mb-3">
            <div  className="col mb-5">
              <h2>Our Projects</h2>
              
            </div>
          </div>
          <div style={ {opacity: '0.7'}} className="row">
            <div  className="col-md-4 mb-5" >
              <div >
               
                  <img src={photo1}alt="" className="img-fluid" />
                
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div>
            
                  <img src={photo2}alt="" className="img-fluid" />
           
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div>
               
                  <img src={photo3} alt="" className="img-fluid" />
                
              </div>
            </div>
          </div>
      
        </div>
      </section>
    );
};

export default Project;