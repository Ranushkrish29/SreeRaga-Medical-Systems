import React from 'react'
import './style/style.css'


import Background from './ecgapaper.png';

var sectionStyle = {
  backgroundImage:`
  linear-gradient(to bottom, #302726b0,#302726b0),url(${Background})`
};
 function Addressingcom() {
    

    return (
        <>
            {/* section 2(sales products) */}
            <div id="sales" className="welcomecolor5  section2 row col m-auto">
            <img src="./images/t9.png" className="img-fluid w-25" id="productsecimg" />
                <div className="col-md-6  text-light">
                    <div className="alignsectiontext">
                        <div className="display-4 fontsty "> sales <spam className="lead">Medical Equipments </spam></div>
                        <p className="sty4 p-1 lead">Medicines, medical Equipments and health products are important for addressing 
                            health problems and improve quality of lives. In <spam className="text-uppercase ">sree raga medical systems, </spam> 
                            <i class="fas fa-hand-holding-medical"></i>Bridging the gap between the demand and supply of medical technology.
                        </p>
                        <button className="btn btn-light shadowbox sty4"> search products</button>
                    </div>
                </div>
                <div className="col-md-6 "></div>
            </div>
            {/* section 2(service) */}
            <div className="welcomecolor4  section2 row col m-auto">
            <img src="./images/t8.png" className="img-fluid w-25" id="servicesecimg" />
                <div className="col-md-6  text-light ml-auto">
                    <div className="alignsectiontext1 text-right">
                        <div className="display-4 fontsty "><spam className="lead">Medical Equipments </spam>Service</div>
                        <p className="sty4 p-1 lead">medical equipment  management and maintenance
                            is an essential part of running an effective and safe medical 
                            facility. Patients expect to be treated to a high standard in 
                            decent diagnostic facilities.We provide on-site service and 
                            support nationwide. Our field engineers are well trained and 
                            have extensive field experience in servicing and 
                            supporting various types of medical equipment.
                        </p>
                        <button className="btn btn-light shadowbox2 sty4">products</button>
                    </div>
                </div>
            </div>
            {/* section 2(calibration products) */}
            <div className="welcomecolor1  section2 row col m-auto">
            <img src="./images/t9.png" className="img-fluid w-25" id="productsecimg" />
                <div className="col-md-6  text-light">
                    <div className="alignsectiontext">
                        <div className="display-4 fontsty ">Calibration</div>
                        <p className="sty4 p-1 lead">Calibration is the act of checking or comparing accuracy of measuring
                            medical equipment with a Standard under specified conditions. the accuracy and 
                            precision of the instruments  is of the utmost importance. 
                            We have decades of experience managing calibration programs in highly 
                            regulated industries and provide innovative solutions to optimize even
                            the most complex asset pools
                        </p>
                        <button className="btn btn-light shadowbox3 sty4"> search products</button>
                    </div>
                </div>
                <div className="col-md-6 "></div>
            </div>
            {/* section 2(AMC service) */}
            <div className="welcomecolor2  section2 row col m-auto">
            <img src="./images/t8.png" className="img-fluid w-25" id="servicesecimg" />
                <div className="col-md-6  text-light ml-auto">
                    <div className="alignsectiontext1 text-right">
                        <div className="display-4 fontsty "><spam className="lead"></spam>AMC Service</div>
                        <p className="sty4 p-1 lead"> Sree Raga Medical Systems is engaged in providing cost-effective and reliable medical equipment AMC 
                        services to hospitals and healthcare service providers
                        .We have a team of trained technicians and engineers, who are capable of troubleshooting technical problems and
                        providing them with permanent solutions. We maintain a recent stock of medical equipment spares and
                        parts, which helps us in fixing the breakdown problems on the spot. Clients under AMC
                        contract with us stay assured for the fast resolution of the problems in their costly medical equipment.
                        </p>
                        <button className="btn btn-light shadowbox2 sty4">products</button>
                    </div>
                </div>
            </div>
            {/* section 2(ecg paper) */}
            <div className="section3 row  m-auto py-5" style={sectionStyle}>
            {/* <img src="./images/1.png" className="img-fluid w-25" id="servicesecimg" />
            <img src="./images/1.png" className="img-fluid w-25" id="productsecimg" /> */}
                <div className="col-12  text-light ml-auto">
                    
                    <div className=" text-center">
                        <div className="display-4 fontsty mb-4 ">Hot sale</div>
                        <div className="row  m-auto justify-content-around">
                        <div className="col-md-6 row">
                                <div class=" col-6 my-3" >
                                    <img class="card-img-top " src="./images/repair1.jpg" alt="Card image"/>
                                    <div class="card-img-overlay">
                                        <a href="#" class="btn btn-dark btn-sm sty4">See Profile</a>
                                    </div>
                                </div>
                                <div class=" col-6 my-3" >
                                    <img class="card-img-top " src="./images/repair3.jpg" alt="Card image"/>
                                    <div class="card-img-overlay">
                                        <a href="#" class="btn btn-dark btn-sm sty4">See Profile</a>
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-6 row">
                                <div class=" col-6 my-3" >
                                    <img class="card-img-top " src="./images/repair1.jpg" alt="Card image"/>
                                    <div class="card-img-overlay">
                                        <a href="#" class="btn btn-dark btn-sm sty4">See Profile</a>
                                    </div>
                                </div>
                                <div class=" col-6 my-3" >
                                    <img class="card-img-top " src="./images/repair3.jpg" alt="Card image"/>
                                    <div class="card-img-overlay">
                                        <a href="#" class="btn btn-dark btn-sm sty4">See Profile</a>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div className="row  m-auto justify-content-around">
                        <div className="col-md-6 row">
                                <div class=" col-6 my-3" >
                                    <img class="card-img-top " src="./images/repair1.jpg" alt="Card image"/>
                                    <div class="card-img-overlay">
                                        <a href="#" class="btn btn-dark btn-sm sty4">See Profile</a>
                                    </div>
                                </div>
                                <div class=" col-6 my-3" >
                                    <img class="card-img-top " src="./images/repair3.jpg" alt="Card image"/>
                                    <div class="card-img-overlay">
                                        <a href="#" class="btn btn-dark btn-sm sty4">See Profile</a>
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-6 row">
                                <div class=" col-6 my-3" >
                                    <img class="card-img-top " src="./images/repair1.jpg" alt="Card image"/>
                                    <div class="card-img-overlay">
                                        <a href="#" class="btn btn-dark btn-sm sty4">See Profile</a>
                                    </div>
                                </div>
                                <div class=" col-6 my-3" >
                                    <img class="card-img-top " src="./images/repair3.jpg" alt="Card image"/>
                                    <div class="card-img-overlay">
                                        <a href="#" class="btn btn-dark btn-sm sty4">See Profile</a>
                                    </div>
                                </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Addressingcom