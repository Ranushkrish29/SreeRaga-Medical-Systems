import React,{ useState } from 'react'
import {Row} from 'react-bootstrap'
import './style/style.css';
import './style/style.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
 function Homesection(props) {
    const [input, setInput]= useState("");
    let medicalEquipents=[
        {name:"dental X-ray"},
        {name:"dental x-ray film processor"},
        {name:"mobile x-ray unit"},
        {name:"mobile x-ray unit with image intensifier"},
        {name:"x-ray safe light"},
        {name:"ultra sound unit(general)"},
        {name:"x-ray viewer(single screen)"},
        {name:"x-ray viewer(double screen)"},
        {name:"cassettee pass-box"},
        {name:"film marker"},
        {name:"general x-ray unit"},
        {name:"automatic film processor"},
        {name:"manual film processor"},
        {name:"film drier"},
        {name:"film hopper"},
        {name:"x-ray cassettes(see annex)"},
        {name:"OPG unit"},
        {name:"screening unit"},
        {name:"mammography unit"},
        {name:"darkroom accessories(sets)"},
        {name:"analytic balance"},
        {name:"binocular microscope"},
        {name:"blood bank refrigerator"},
        {name:"blood cell counter,electrical"},
        {name:"calorimeter"},
        {name:"centrifuge"},
        {name:"glucose analyzer"},
        {name:"haemoglobinometer,electronic"},
        {name:"weighing scale adult"},
        {name:"HIV screening machine/test kits"},
        {name:"hot air oven"},
        {name:"bilirubin meter"},
        {name:"incubator,laboratory"},
        {name:"kerosene stove"},
        {name:"PH meter"},
        {name:"trip balance"},
        {name:"vaccine transport box"},
        {name:"water bath"},
        {name:"water de-ionizer"},
        {name:"water distiller"},
        {name:"glass ware set,laboratory"},
        {name:"hand tally counter"},
        {name:"slide warmer"},
        {name:"mixer"},
        {name:"electrophoresis apparatus"},
        {name:"digital count pen"},
        {name:"neuberchamber"},
        {name:"autoclave"}, 
        {name:"anaesthetic machine"},
        {name:"defibrillator"},
        {name:"ECG monitor"},
        {name:"laryngoscope"},
        {name:"oxygen regulator"},
        {name:"vital signs monitor"},
        {name:"resuscitation bag,adult"},
        {name:"resuscitation bag,infant"},
        {name:"autoclave"},
        {name:"electrosurgical unit"},
        {name:"operating theatre lamp,ceiling mounted"},
        {name:"instrument cabinet"},
        {name:"instrument table(MAYO)"},
        {name:"operating theatre lamp,mobile "},
        {name:"operating theatre table,major"},
        {name:"spot light"},
        {name:"surgeon's stool"},
        {name:"surgeon foot step"},
        {name:"vacuum plant"},
       
    
    ];
    
    
    return (
        <div className="text-center " id="sectionsearch">
            <h2 className=" text-dark  fontsty mb-3 mt-5">300+ Medical Equipment </h2>
            <div>
                {
                <div className=" p-3">
                <sub className="">select the category</sub>
                <div class="row m-auto alignsearch ">
							<div className=" text-center p-3">
								<button type="button" class="btn btn-inf btn-sm ">X - RAY </button>
                				<button type="button" class="btn btn-inf btn-sm ">THEATRE</button>
                                <button type="button" class="btn btn-inf btn-sm " >ICU</button>
								<button type="button" class="btn btn-inf btn-sm " >HDU</button>
								<button type="button" class="btn btn-inf btn-sm " >CSSD</button>
                                <button type="button" class="btn btn-inf btn-sm " >PHARMACY </button>
								<button type="button" class="btn btn-inf btn-sm " >EYE UNIT</button>
								<button type="button" class="btn btn-inf btn-sm " >ENT </button>
								<button type="button" class="btn btn-inf btn-sm " >DENTAL UNIT</button>
								<button type="button" class="btn btn-inf btn-sm " >Dental Lab</button>
                                <button type="button" class="btn btn-inf btn-sm " >MCH/FP</button>
								<button type="button" class="btn btn-inf btn-sm " >WARD</button>
                                <button type="button" class="btn btn-inf btn-sm " >OUT PATIENT DEPARTMENT</button>
								<button type="button" class="btn btn-inf btn-sm " >Theatre, maternity</button>
								<button type="button" class="btn btn-inf btn-sm " >PHSYSIOTHERAPY</button>
                               
							</div>
				</div><hr/>
             </div>
             }
             <div className="alignsearch">
                
                <div type="button" className="btn btn-inf1 my-3">hjfdfgh</div>
                <h1 className="text-left lead text-info"><i class="fas fa-chevron-circle-left" type="button" ></i></h1>
                <div className="row " >
                    <div className=" text-center p-3">
                            {medicalEquipents.slice(0,15).map((medicalEquipent,index)=>{
                    return( <button   className="list-of-products sty4">{medicalEquipent.name}</button>)
                })}
            
                        </div>
                </div>
            </div>
            <div className="container">
            <div type="button" className="btn btn-inf1 my-3">hjfdfgh</div>
            <h1 className="text-left lead text-info"><i class="fas fa-chevron-circle-left" type="button" ></i></h1>
            <div className=" row alignsearch mx-auto sectionimgsearch">
                <div className="col-md-6">
                    <img src="./images/t8.png" className="img-fluid w-75"/>
                </div>
                <div className="col-md-6">
                    <h1 className="text-center ">Product Name</h1>
                    <p>hjdskjfhksjdfkjbfdhvndf vhnmfbd hjvnmfdmnf kjfmnkvmnfk,mxnv kfnm cvnbf nnmnmnmnmm</p>
                </div>

            </div>
            </div>
                
            </div>
            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           
        </div>
    )
}
export default Homesection;