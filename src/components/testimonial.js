import React, { useState } from 'react';
import './style/style.css';
import './style/style.js';
import {Carousel} from 'react-bootstrap'

import Background1 from './about-us.png';
  var sectionStyle1 = {
    backgroundImage:`url(${Background1})`,
    backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  };
 function Testimonial() {
     
  const [more,setmore]=useState(false);   
  const [more1,setmore1]=useState(false);
    
    return (
        <div > 
       <div id="sectiontestimonial" className="welcomecolor6">
            <div className="pt-5 fontsty text-center">
               <h1>Testimonial</h1>
               <hr className="w-25 bg-light"/> 
            </div>
            <div className="text-center">
            <Carousel className="carouselplace">
                <Carousel.Item interval={4000} className="carouselitem">
                    <h3><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h3>
                    <p className="text-light sty4">Service is good .One of the fastest service Quality is good.I loved itv`,
                    </p><h6 className="text-light ">-ranush</h6>
                </Carousel.Item>
                <Carousel.Item className="carouselitem" interval={4000}>
                <h3><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h3>
                    <p className="text-light sty4">Service is good .One of the fastest service Quality is good.I loved itv`,
                     </p><h6 className="text-light ">-ranush</h6>
                </Carousel.Item >
                <Carousel.Item className="carouselitem" interval={4000}>
                <h3><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></h3>
                    <p className="text-light sty4">Service is good .One of the fastest service Quality is good.I loved itv`,
                    </p><h6 className="text-light ">-ranush</h6>
                </Carousel.Item>
            </Carousel>
                

            </div>
             
       <img src="./images/t9.png" className="img-fluid w-25 m-auto" />
                        
        </div>
        <div  className=" text-light sty4 " style={sectionStyle1} >
        <div className="row m-auto">
        <div className=" p-5 col-md-6" id="about-us">
           <h1 className="fontsty pt-3 text-center">About us</h1>
            < hr className="w-25 bg-light"/> 
                <p className="mt-3 p">Shree Raga Medical System in Chennai is one of the leading businesses in the Medical Equipment Dealers.
                 Also known for Medical Equipment Dealers, Medical Equipment Repair and Services and much more.
                 We are having a great experience in this field for more than 18 years.And also we are having our best service engineer's and our sales team for your medical services </p>
                 <p className=" p">
                        Established in the year 1997, Shree Raga Medical System in Alwarthirunagar, Chennai is a top player in the category Medical Equipment Dealers in the
                        Chennai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Chennai. Over the course
                        of its journey, this business has established a firm foothold in it’s industry. {!more && <spam className=" btn btn-sm p text-warning" onClick ={()=>{setmore(!more) }} >(more).........</spam>}{more && <spam>The belief that customer satisfaction is as important as their products
                        and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that
                            are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, 
                            this business aims to expand its line of products and services and cater to a larger client base. In Chennai, this establishment occupies a prominent location
                            in Alwarthirunagar. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at Anjugam Street,
                            Sri Meenakshi Amman Nagar, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories:
                            Medical Equipment Dealers, Medical Equipment Repair and Services. </spam>}</p>
                            <p className=" p">Products and Services offered:
                        Shree Raga Medical System in Alwarthirunagar has a wide range of products and / or services to cater to the
                        varied requirements of their customers. The staff at this establishment are courteous and prompt at providing any
                        assistance.
                        {!more1 && <spam className=" btn btn-sm p text-warning" onClick ={()=>{setmore1(!more1) }} >(more)............</spam>}{more1 && <spam> They readily answer any queries or questions that you may have. Pay for the product or service with ease
                        by using any of the available modes of payment, such as Cash, Cheques. This establishment is functional from 10:00 - 19:00.</spam>}</p>
            </div>
            <div className=" p-5 col-md-6 text-center " >
                            <h3 className="col-8  m-auto  bg-yellowcs  ">
                                    18 years of experience</h3>
                            <br/>
                            <h3 className="col-8 m-auto   bg-yellowcs  ">
                                    1500+  happy customers </h3>
                                    <br/>
                            <h3 className="col-8 m-auto  bg-yellowcs  ">
                                    1500+  happy customers </h3>
            </div>
        </div>
        </div>
        
    </div>

    )
}
export default Testimonial;