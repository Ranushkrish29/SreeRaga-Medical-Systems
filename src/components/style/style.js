
//for change background color
// function backgroundcolorchangefun(){
//     var i = 1;                
//     var imgarr=[
//     ['./images/bg1/1.png','./images/bg1/2.png','./images/bg1/3.png','./images/imgforweb/ecg monitor.png','./images/imgforweb/x-ray2.png','./images/imgforweb/x-ray1.png','./images/imgforweb/icu bed.png'],
//     ['./images/bg2/1.png','./images/bg2/2.png','./images/bg2/3.png','./images/imgforweb/wheel chairs.png','./images/imgforweb/pluse oximeter.png','./images/imgforweb/oxygenregulator.png','./images/imgforweb/bp mointer.png'],
//     ['./images/bg3/1.png','./images/bg3/2.png','./images/bg3/3.png','./images/imgforweb/digital themometer.png','./images/imgforweb/Thermal paper.png','./images/imgforweb/ECG cables.png','./images/imgforweb/Thermal paper1.png'],
//     ['./images/bg4/1.png','./images/bg4/2.png','./images/bg4/3.png','./images/imgforweb/sanitizer.png','./images/imgforweb/kn95mask.png','./images/imgforweb/digital themometer.png','./images/imgforweb/gloves.png']]
//     function myLoop() {        
//     setTimeout(function() {
//         var welcomeback;
//         var welcome="welcomecolor"+i;
//         var addcolor= document.getElementById("welcomesectioncolor");
//         if(i===1){welcomeback="welcomecolor4"; }
//         else{welcomeback="welcomecolor"+(i-1);}
//         addcolor.classList.remove(welcomeback);
//         addcolor.classList.add(welcome);
//         console.log(welcome);
//         for (var imgi=1;imgi<=7;imgi++){
//             var name ="id"+imgi;
//             document.getElementById(name).src=imgarr[i-1][imgi-1];
//         }
//         i++;                   
//         if (i < 5) {          
//         myLoop();             
//         }                      
//     }, 7000)
//     }
//     myLoop(); 
// }
//  backgroundcolorchangefun();
// setInterval(backgroundcolorchangefun,28000);


// function animatecontent(){
   
//     for (var i=4;i<=7;i++){
//         var name ="id"+i;
//           document.getElementById(name).classList.remove("animate__fadeOutDownBig");
//             document.getElementById(name).classList.add("animate__fadeInUpBig");
//     }
// }
// function wellcomefun() {
//     animatecontent();
// }
// setTimeout(wellcomefun,1500);

// function animatedown(){
//     for (var i=4;i<=7;i++){
//         var name ="id"+i;
//         document.getElementById(name).classList.remove("animate__fadeInUpBig");
//         document.getElementById(name).classList.add("animate__fadeOutDownBig");
//     }
// }
//  function animateup(){
//     animatecontent();
//     setTimeout(animatedown,6000);
// }
//  setInterval(animateup, 8000);

