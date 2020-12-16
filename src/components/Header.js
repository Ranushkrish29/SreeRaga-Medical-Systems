import React from 'react';
import './style/style.css';
import './style/style.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap'
import Background from './ecgapaper.png';
var sectionStyle = {
  backgroundImage:`
  linear-gradient(to bottom, #302726b0,#302726b0),url(${Background})`
};
function header(){
  
      function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("navbarlist").classList.remove("animate__fadeOut");
        document.getElementById("navbarlist").classList.remove("animate__faster");
        document.getElementById("navbarlist").classList.add("animate__backInLeft");
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("navbarlist").classList.remove("animate__backInLeft");
        document.getElementById("navbarlist").classList.add("animate__fadeOut");
        document.getElementById("navbarlist").classList.add("animate__faster");
      }
      function openNav1() {
        document.getElementById("mySidenav2").style.width = "100%";
        document.getElementById("navbarlist1").classList.remove("animate__fadeOut");
        document.getElementById("navbarlist1").classList.remove("animate__faster");
        document.getElementById("navbarlist1").classList.add("animate__backInRight");
      }

      function closeNav1() {
        document.getElementById("mySidenav2").style.width = "0%";
        document.getElementById("navbarlist1").classList.remove("animate__backInRight");
        document.getElementById("navbarlist1").classList.add("animate__fadeOut");
        document.getElementById("navbarlist1").classList.add("animate__faster");
        
      }
      
    return (
      <div >
        <div id="mySidenav" class="sidenav bg-custom1" >
						<a href="javascript:void(0)" class="btn " onClick={closeNav}>&times;</a>
            
              <div className="">
              <h1 className="fontsty text-center col navbarbrand ">SREE RAGA MEDICAL SYSTEMS</h1>
              <hr className="w-50 bg-white"/> 
              
						<div class="container m-auto row animate__animated  " id="navbarlist">
								<a class="nav-link navlinks welcomecolor7 col" href="#portraitsection"><i class="fas fa-home "></i> <br/>home</a>
								<a class="nav-link navlinks welcomecolor3 col"  onClick={closeNav} href="#sales"><i class="fas fa-rupee-sign"></i><br/>sales</a>
								<a class="nav-link navlinks welcomecolor4 col" href="#gallerysection"><i class="fas fa-wrench"></i><br/>Service</a>
								<a class="nav-link navlinks welcomecolor1 col" href="#pricingsection"><i class="fas fa-tools "></i><br/>Calibration</a>
								<a class="nav-link navlinks welcomecolor2 col" href="#about-us"><i class="fas fa-hospital-alt"></i><br/>AMC_Service</a>
								<a class="nav-link navlinks col"style={sectionStyle} href="#about-us"><i class="fab fa-hotjar"></i><br/>Hot_sale</a>
								<a class="nav-link navlinks bg-light text-dark col" href="#about-us"><i class="fas fa-search"></i> <br/>search</a>
                <a class="nav-link navlinks welcomecolor4 col" href="#about-us"><i class="fas fa-hospital-user"></i><br/>Testimonial</a>
                <a class="nav-link navlinks welcomecolor7 col" href="#about-us"><i class="fas fa-users"></i><br/>About-us</a>
                <a class="nav-link navlinks welcomecolor3 col " href="#about-us"><i class="far fa-handshake"></i><br/>contact-us</a>
            </div>
					   
            </div>
				</div>
        <div id="mySidenav2" class="sidenavright sty4 text-right bg-custom1" >
						<a href="javascript:void(0)" class="btn " onClick={closeNav1}>&times;</a>
            
              <div className="">
              <h1 className="fontsty text-center col navbarbrand ">Contact-Us</h1>
              <hr className="w-50 bg-white"/> 
              
						<div class="container m-auto row animate__animated  " id="navbarlist1">
								<a class="nav-link navlinks col welcomecolor1" href="#portraitsection">
                        <i className="fas fa-phone-alt animate__animated "></i><br/>
                        call_now
                </a>
								<a class="nav-link navlinks welcomecolor4 col"  href="#sales">
                <i class="fas fa-envelope-open"></i><br/>
                        get_quest
                </a>
								<a class="nav-link navlinks welcomecolor3 col"  href="#about-us">
                <i class="fas fa-map-marked-alt"></i><br/>
                        get_direction

                  </a>
                  <a class="nav-link navlinks welcomecolor2 col" style={sectionStyle} href="#about-us">
                  <i class="fab fa-hotjar"></i><br/>
                        hot_sale 

                  </a>
                  <div class="container   row animate__animated " >
                  <a class="nav-link navlinks welcomecolor4 col-6"  href="#sales">
                  Address:<br/>
                No1,Anjugam street ,sri meenakshi amman nagar ,alwarthiru nagar Chennai, Tamil Nadu 600087 India

                </a>
                <a class="nav-link navlinks pt-4 welcomecolor1" href="#portraitsection">
                        office numbers:<br/> 9444451840 <br/> 8939374965<br/>9962812035<br/>
                </a>
								
                 
            </div>
                 
            </div>
            
					   
            </div>
				</div>
        <nav  class="fixed-top bglight  row" >
          
          <a  class=" col-2 "><i className="fas fa-bars text-left menubaricon text-light  text-left" onClick={openNav} ></i></a>
          <a class="btn col-8 "><img src="./images/t1.png" alt="" className="imglogo "/></a>
          <a class=" col-2 text-right ">
            <i class="fas  fa-phone-alt menubaricon1  text-light" onClick={openNav1}></i>
          </a>
          
        </nav>
    </div>
    )
}

export default header;