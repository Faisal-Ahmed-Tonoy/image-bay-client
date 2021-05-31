import React from "react";
import'./Contact.css';
 


const Contact = () => {
	return (
        <section  className="py-5 contact-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="info-contact">
                <h2 className="display-4">Get In Touch</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, cumque.</p>
              </div>
              <form>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                       
                    </div>
                    <input type="text" placeholder="Email" className="form-control form-control-lg" />
                  </div>
                </div>
                <br/>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                       
                    </div>
                    <input type="text" placeholder="Name" className="form-control form-control-lg" />
                  </div>
                </div>
                
                
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      
                    </div>
                  </div>
                </div>
                <br/>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      
                    </div>
                    <textarea placeholder="Message" name="message" rows={5} className="form-control form-control-lg" defaultValue={""} />
                  </div>
                </div>
                <br></br>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Submit" />
                </div>
              </form>
            </div>
           
          </div>
        </div>
      </section>
	);
};

export default Contact;
