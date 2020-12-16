import React from 'react';
import emailjs from "emailjs-com";
import './style/style.css';
import './style/style.js';


import Background1 from './contactusimg1.png';
  var sectionStyle1 = {
    backgroundImage:`url(${Background1})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
export default function Contactus() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_0gdim2j', 'sreeragamedical_temp', e.target, 'user_3RjgX7cZ7MxHl95my8uap')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      } 
    return (
    
        <div  className="welcomecolor7  sty4 text-light align-middle">
         <h3 className="text-center fontsty pt-5">contact-us</h3>
         <div className=" row m-auto ">
            <form className=" col-xl-6 "onSubmit={sendEmail} id="formalign" style={sectionStyle1}>

                <div className=" bg-form">
                <div className=" col m-auto btn btn-primary">Get Quote</div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control bgblue"placeholder="Name"  name="name"/>
                    </div>
                    <div class="form-group">
                    <label>Gmail</label>
                        <input type="email" class="form-control bgblue" name="mailid"placeholder="Please, Enter a Vaild Gamil :)" />
                    </div>
                    <div class="form-group">
                    <label>PH-Number</label>
                        <input type="number" class="form-control bgblue"name="phonenumber"placeholder="Please, Enter a Vaild Ph-number :)" />
                    </div>
                    <div class="form-group">
                    <label>How can we help you?</label>
                        <textarea type="message" class="form-control helpme bgblue"name="message"placeholder="I was wondering about availbility and rates . I need  help with the following:" ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary col " value="Send">Submit</button>
                    </div>
            </form>
            <div className=" col-xl-6 text-center addresalign" >
                <div className="row container m-auto text-dark "  >
                    <div className="col-md-12 mt-4">
                        <div className="bg-light row p-3 col-11 m-auto">
                        <div className="col-md-4">
                        <h1 className="fas fa-phone-alt"></h1><hr/>
                        <a href="" className="btn btn-primary btn-sm"> call now</a> 
                        </div>
                        <div className="col-md">
                        <div className="mt-4">
                        office number:<br/> 9444451840 <br/> 8939374965<br/>9962812035<br/>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-4">
                    <div className="bg-light row  p-4 col-11 m-auto">
                        <div className="col-md-4">
                        <h1 className="fas fa-map-marker-alt"></h1><hr/>
                        <a href="" className="btn btn-primary btn-sm"> Address</a> 
                        </div>
                        <div className="col-md">
                        <div className="mt-4">
                        No1,Anjugam street ,sri meenakshi amman nagar ,alwarthiru nagar Chennai, Tamil Nadu 600087 India
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row container  m-auto p-3 text-dark  text-center"  >
                    <div className="col-md-12 mt-2">
                        <div className="bg-light p-3 row col-11 m-auto">
                        <div className="col-md-4">
                        <h1 className="fas fa-door-open mt-2 "></h1><hr/>
                        <p  className="btn btn-primary btn-sm"> opening hours</p></div> 
                        <div className="col-md">
                            <div className="">
                                Mon:	9:00 am – 9:00 pm<br/>
                            Tue:	9:00 am – 9:00 pm<br/>
                            Wed:	9:00 am – 9:00 pm<br/>
                            Thu:	9:00 am – 9:00 pm<br/>
                            Fri:	9:00 am – 9:00 pm<br/>
                            Sat:	9:00 am – 9:00 pm<br/>
                            Sun:	Closed
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 my-4">
                    <div className="bg-light row col-11 pt-3 m-auto">
                        <div className="col-md-4"><h1 className="fas fa-map-marker-alt"></h1><hr/>
                        <a href="https://www.google.com/maps/dir//SREE+RAGA+MEDICAL+SYSTEMS/@13.0538748,80.1125356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a52613a03c93647:0x51d98def167bc3f!2m2!1d80.1825761!2d13.0538842" className="btn btn-sm btn-primary"  >get direction</a> 

                        </div>
                        <div className="col-md">
                        <iframe className="col-12 p-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7137434437327!2d80.18038741482286!3d13.05388419080195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613a03c93647%3A0x51d98def167bc3f!2sSREE%20RAGA%20MEDICAL%20SYSTEMS!5e0!3m2!1sen!2sin!4v1607788212332!5m2!1sen!2sin"  height="200"  frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
                    </div>
                    </div>
                </div>
               
            </div>
            
        </div>
        <footer className="bg-dark text-center p-3 ">
            <div className="col mt-5 ">We Bridging the gap between the demand and supply of medical technology.</div>
            <hr className="bg-ligt w-50"/>
        <h4 class="fas fa-chevron-circle-up col "></h4>
        <hr className="bg-light w-25"/>
        <div className="">Website Designed & Developed by Ranush Krishna</div>
        </footer>
        </div>

    )
}
