import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import './style/style.js';
const color1={
    backgroundImage: "linear-gradient(to top, #bc382e,#bc382e)",
    transition: "1s"
}
const color2={
    backgroundImage: "linear-gradient(to top, #bc382e,#bc382e)",
    transition: "1s"
}
const color3={
    backgroundImage: "linear-gradient(to top, #bc382e,#bc382e)",
    transition: "1s"
}
const color4={
    backgroundImage: "linear-gradient(to top, #bc382e,#bc382e)",
    transition: "1s"
}
var x=1;
function backgroundcolor(){
    var welcomeback;
    var welcome="welcomecolor"+x;
    var addcolor= document.getElementById("welcomesectioncolor");
    if(x<2){welcomeback="welcomecolor4"; }
    else{welcomeback="welcomecolor"+(x-1);}
    addcolor.classList.remove(welcomeback);
    addcolor.classList.add(welcome);
    if(x<4){
        x++; 
    }else{x=1;}
    
}
function animatecontent(){
     for (var i=4;i<=7;i++){
        var name ="id"+i;
          document.getElementById(name).classList.remove("animate__fadeOutDownBig");
            document.getElementById(name).classList.add("animate__fadeInUpBig");
    }
}
function animatedown(){
        for (var i=4;i<=7;i++){
            var name ="id"+i;
            document.getElementById(name).classList.remove("animate__fadeInUpBig");
            document.getElementById(name).classList.add("animate__fadeOutDownBig");
        }
    }
class Welcome extends Component {
    
    constructor(p){
        super(p);
        this.state={
            first:true,
            second:false,
            third:false,
            fourth:false,
            count:0           
        }
        
     }
   
   
    render() { 
        
        return ( 
           
            <div id="welcomesectioncolor" className="welcomecolor1   animate__fadeIn animate__animated "> 
                
            <div  className=" welcometexttop animate__fadeIn animate__animated animate__delay-1s ">
                <h1 className="welcometext fontsty" id="text" >SREE RAGA MEDICAL SYSTEMS</h1>
                <hr className="w-25"/>
                <p className=" text-light sty2">Medical Equipment  <span className="fontsty "> SALES</span> and <span className="fontsty"> SERVICES</span>   all over INDIA</p>
               
                        
                {this.state.first && <div className="animloca"> 
                    <div id="wcsection1">
                        <div id="id1" className="d01"></div>
                        <div id="id2"  className="d02"></div>
                        <div id="id3" className="d03"></div>
                        <img src="./images/imgforweb/x-ray2.png" className="img-fluidw1 animate__animated animate__fadeInUpBig animate__slower " id="id4"/>
                        <img src="./images/imgforweb/x-ray2.png" className="img-fluidw1 animate__animated animate__fadeInUpBig animate__slow" id="id5"/>
                        <img src="./images/imgforweb/icu bed.png"className="img-fluidw1  animate__animated animate__fadeInUpBig  animate__slower" id="id6"/>
                        <img src="./images/imgforweb/ecg monitor.png" className="img-fluidw1  animate__animated animate__fadeInUpBig animate__slow" id="id7"/>
                       
                    </div>
                    
                  
                </div>}
                {this.state.second && <div className="animloca"> 
                    <div id="wcsection1">
                        <div id="id1"  className="d21"></div>
                        <div id="id2" className="d22"></div>
                        <div id="id3" className="d23"></div>
                        <img src="./images/imgforweb/wheel chairs.png" className="img-fluidw animate__animated animate__fadeInUpBig animate__slower " id="id4"/>
                        <img src="/images/imgforweb/pluse oximeter.png" className="img-fluidw animate__animated animate__fadeInUpBig animate__slow" id="id5" />
                        <img src="./images/imgforweb/oxygenregulator.png" className="img-fluidw animate__animated animate__fadeInUpBig  animate__slower" id="id6"/>
                        <img src="./images/imgforweb/bp mointer.png" className="img-fluidw animate__animated animate__fadeInUpBig animate__slow" id="id7"/>
                       
                    </div>
                    
                  
                </div>}
                {this.state.third && <div className="animloca"> 
                    <div id="wcsection1">
                        <div id="id1"  className="d11"></div>
                        <div id="id2"  className="d12"></div>
                        <div id="id3"  className="d13"></div>
                        <img src="./images/imgforweb/digital themometer.png" className="img-fluidw animate__animated animate__fadeInUpBig animate__slower " id="id4"/>
                        <img src="./images/imgforweb/Thermal paper.png" className="img-fluidw animate__animated animate__fadeInUpBig animate__slow" id="id5" />
                        <img src="./images/imgforweb/ECG cables.png" className="img-fluidw animate__animated animate__fadeInUpBig  animate__slower" id="id6"/>
                        <img src="./images/imgforweb/Thermal paper1.png" className="img-fluidw animate__animated animate__fadeInUpBig animate__slow" id="id7"/>
                       
                    </div>
                    
                  
                </div>}
                {this.state.fourth && <div className="animloca"> 
                    <div id="wcsection1">
                        <div id="id1"  className="d31"></div>
                        <div id="id2"  className="d32"></div>
                        <div id="id3"  className="d33"></div>
                        <img src="./images/imgforweb/sanitizer.pngg" className="img-fluidw animate__animated animate__fadeInUpBig animate__slower " id="id4"/>
                        <img src="./images/imgforweb/kn95mask.png" className="img-fluidw animate__animated animate__fadeInUpBig animate__slow" id="id5" />
                        <img src="./images/imgforweb/digital themometer.png" className="img-fluidw animate__animated animate__fadeInUpBig  animate__slower" id="id6"/>
                        <img src="./images/imgforweb/gloves.png" className="img-fluidw animate__animated animate__fadeInUpBig animate__slow" id="id7"/>
                       
                    </div>
                    
                  
                </div>}
            </div>
        </div>
         );
    }
    componentDidMount(){
        this.myInterval=setInterval(()=>{
             
            if(this.state.count==0){
                this.setState({
                    first:true,
                    second:false,
                    third:false,
                    fourth:false}
                )
            }
            else if(this.state.count==1){
                this.setState({
                    first:false,
                    second:true,
                    third:false,
                    fourth:false}
                )
            }
            else if(this.state.count==2){
                this.setState({
                    first:false,
                    second:false,
                    third:true,
                    fourth:false}
                )
            }else{
                this.setState({
                    first:false,
                    second:false,
                    third:false,
                    fourth:true}
                )
            }
            if (this.state.count<3){
                this.setState(prevState=>({
                    count:prevState.count+1
                    
            }))}else{
                this.setState({
                    count:0
            })
            }
            backgroundcolor();
            animatecontent();
            this.innerinterval=setTimeout(()=>animatedown(),8000);
            
        },8800)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
        clearTimeout(this.innerinterval);
    }
}
 
export default Welcome;
