import React, { Component } from 'react';
let medicalEquipents=[
    {name:"dental X-ray",img:"https://images-na.ssl-images-amazon.com/images/I/617tn8p%2B86L._SL1500_.jpg",para:"hjgdfjhgbdgjhfbjfghdnbfjhcgfbdgjv"},
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
    {name:"vacuum plant"}];

class Homesection extends Component {
    constructor(p){
        super(p);
        this.state={
            secone:true,
            sectwo:false,
            secthree:false,
            sliceStart:0,
            sliceEnd:0,
            selectNumber:0,
            category:"",
        }
    }
    backfun(){
        this.setState({
            secone:true,
            sectwo:false,
            secthree:false,
        })
    }
     chagestatefunone2two(start ,end,name){

        this.setState({
            secone:false,
            sectwo:true,
            sliceStart:start,
            sliceEnd:end,
            category:name,
            }
            );
    }
    chagestatefuntwo2three(productnumber){

        this.setState({
            secthree:true,
            sectwo:false,
            selectNumber:productnumber,
            }
            );
    }
    backfun2(){
        this.setState({
            secone:false,
            sectwo:true,
            secthree:false,
        })
    }
    render() { 
        return ( 
            <div className="text-center " >
            <h2 className=" text-dark  fontsty mb-3 mt-5">300+ Medical Equipment </h2>
            <div></div>
            <div id="sectionsearch">
                {this.state.secone &&
                <div className=" p-3 animate__animated animate__fadeIn animate__faster">
                <sub className="">select the category</sub>
                <div class="row m-auto alignsearch ">
							<div className=" text-center p-3">
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(0,5,"X - RAY")}>X - RAY </button>
                				<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(5,10,"THEATRE")}>THEATRE</button>
                                <button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(10,15,"ICU")} >ICU</button>
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(15,20,"HDU")} >HDU</button>
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(20,25,"CSSD")} >CSSD</button>
                                <button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(25,30,"PHARMACY ")} >PHARMACY </button>
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(30,35,"EYE UNIT")} >EYE UNIT</button>
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(35,40,"ENT")} >ENT </button>
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(40,45,"DENTAL UNIT")} >DENTAL UNIT</button>
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(45,50,"Dental Lab")} >Dental Lab</button>
                                <button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(50,55,"MCH/FP")} >MCH/FP</button>
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(55,60,"WARD")} >WARD</button>
                                <button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(60,65,"OUT PATIENT DEPARTMENT")} >OUT PATIENT DEPARTMENT</button>
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(55,60,"Theatre, maternity")} >Theatre, maternity</button>
								<button type="button" class="btn btn-inf btn-sm " onClick={()=>this.chagestatefunone2two(5,25,"PHSYSIOTHERAPY")} >PHSYSIOTHERAPY</button>
                               
							</div>
				</div>
             </div>
             }{this.state.sectwo &&
                <div>
            <center className="row container m-auto animate__animated animate__fadeIn animate__faster" id="topsearchname">
                <h1 className="text-left lead text-info col-2" onClick={()=>this.backfun()}><i class="fas fa-chevron-circle-left" type="button" ></i></h1>
                <button type="button" className="btn btn-inf1 my-3 btn-sm m-auto ">{this.state.category}</button>
                <div className="col-2"></div>
            </center><hr className="w-50"/>
             <div className="alignsearch animate__animated animate__fadeIn animate__faster">
                <div className="row " >
                    <div className=" text-center p-3">
                            {medicalEquipents.slice(this.state.sliceStart,this.state.sliceEnd).map((medicalEquipent,index)=>{
                    return( <button   className="btn list-of-products sty4"onClick={()=>this.chagestatefuntwo2three(this.state.sliceStart+index)} >{medicalEquipent.name}</button>)
                })}
            
                        </div>
                </div>
            </div>
            </div>
            }{this.state.secthree &&
                <div>
                <center className="row container m-auto " id="topsearchname">
                <h1 className="text-left lead text-info col-2" onClick={()=>this.backfun2()}><i class="fas fa-chevron-circle-left" type="button" ></i></h1>
                <div type="button" className="btn btn-inf1 my-3 m-auto btn-sm">{this.state.category}</div>
                <div className="col-2"></div>
            </center>
            <div className="alignsearch animate__animated animate__fadeIn animate__faster">
            
            <div className=" row alignsearch mx-auto sectionimgsearch">
                <div className="col-md-6">
                    <img src={medicalEquipents[this.state.selectNumber].img} className="img-fluid w-75"/>
                </div>
                <div className="col-md-6">
                    <h1 className="text-center text-uppercase ">{medicalEquipents[this.state.selectNumber].name}</h1>
                    <hr className="w-50"/>
                    <p>{medicalEquipents[this.state.selectNumber].para}</p>
                </div>

            </div>
            </div></div>}
                
            </div>
        </div>
         );
    }
}
 
export default Homesection;