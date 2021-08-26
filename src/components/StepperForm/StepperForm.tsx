import React,{useState,useRef} from 'react'
import './StepperForm.scss';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';



const StepperForm =()=>{ 

    const [step,setStep]= useState(1)


    const Next=()=>{
        step<4?setStep(step +1):setStep(1)
    }


    const Back=()=>{
        step===1 ?window.location.href=('https://www.google.com'):setStep(step -1)
    } 
    

    return(
        <>
            <div >
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center  " style={{ height:"100vh",backgroundColor:"rebeccapurple"}}>
                        <div className="p-4 bg-white w-50 d-flex flex-column justify-content-center sizecontainer" style={{borderRadius:'12px', }}>

                            <div className="col-12 d-flex mb-5 w-100 justify-content-center align-items-center">
                                <div className={`stepnumber ${step>=1?"active":""}`}>1</div>
                                <div className={`line ${step>=2 ?"active":""}`}></div>
                                <div className={`stepnumber ${step>=2 ?"active":""}`}>2</div>
                                <div className={`line ${step>=3 ?"active":""}`}></div>
                                <div className={`stepnumber ${step>=3 ?"active":""}`}>3</div>
                                <div className={`line ${step===4 ?"active":""}`}></div>
                                <div className={`stepnumber ${step===4?"active":""}`}>4</div>
                            </div>

                            <div className=" mt-2 mb-4 col-12 d-flex align-items-center justify-content-between">
                                <h3 className="font-weight-bold" >Business Information</h3>
                                <span>step {step}-4</span>
                            </div>

                            <div>

                                <div className={`containerForm  ${step===1?"active":""}`}>
                                    <Step1/>
                                </div>

                                <div className={`containerForm  ${step===2?"active":""}`}>
                                    <Step2/>
                                </div>

                                <div className={`containerForm  ${step===3?"active":""}`}>
                                    <Step3/>
                                </div>

                                <div className={`containerForm  ${step===4?"active":""}`}>
                                    <Step4/>
                                </div>

                            </div>

                            <div className="col-12 mt-4 d-flex justify-content-center">
                                <button className={`btn-simple btn-border  ${step===1?"": ""}`} onClick={()=>Back()}>
                                    {
                                    step ===1 ?"Sign Up":"back"
                                    }
                                </button>

                                <button className={`btn-simple btn-full-bgcolor ${step!=4?"": "d-none"}`} onClick={()=>Next()}>
                                    {
                                    step ===1 ?"Get Quote":"next"
                                    }
                                </button>
                                <button className={`btn-simple btn-full-bgcolor ${step===4?"": "d-none"}`}>submit</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepperForm