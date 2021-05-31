import React from 'react';
import camera from '../../../images/camera.png';
import'./HeaderMain.css';
 

const HeaderMain = () => {
    return (
        <section  className="bg-light py-5 text-dark header-color">
        <div >
          <div className="row">
            <div className="col-lg-6 col-md-12 my-2">
              <img src={camera} className="img-fluid rounded" alt="" />   
            </div>
            <div className="col-lg-6 col-md-12 mt-2">
              <h1>Let Us Capture Your <br/> Beautiful Moment </h1>
              <p className="py-4">ImageBay   is a team of experienced professional photographer . We will capture the spirit, fun, joy and beauty of your day.</p>
         
                
                <div>
               <button className="btn btn-block btn-primary btn-style text-center ">  Explore </button>
                </div>
               
      
           
            </div>
          </div>
        </div>
        
        </section>
        
        
    );
};

export default HeaderMain;