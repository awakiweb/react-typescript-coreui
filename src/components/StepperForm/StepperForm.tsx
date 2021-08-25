import React,{useState,useRef} from 'react'
import './StepperForm.scss'


const StepperForm =()=>{ 

    const [step,setStep]= useState(1)

    const Next=()=>{
        step<4?setStep(step +1):setStep(1)
    }


    const Back=()=>{
        step>1?setStep(step -1):setStep(4)
    }

    return(
        <>

<div >
           <div className="container-fluid">
            <div className="row justify-content-center align-items-center  " style={{ height:"100vh",backgroundColor:"rebeccapurple"}}>
            <div className="p-4 bg-white w-50 d-flex flex-column justify-content-center" style={{borderRadius:'12px'}}>

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
    <h3>Account Information</h3>
    <span>step {step}-4</span>
</div>

<div>
    <div className={`containerForm  ${step===1?"active":""}`}>
        <form className="d-flex align-items-start flex-column" action="">
            <label htmlFor="">first name</label>
            <input type="text" />
            <label htmlFor="">Telephone Number</label>
            <input type="text" />
            <label htmlFor="">email</label>
            <input type="text" />
        </form>
    </div>

    <div className={`containerForm  ${step===2?"active":""}`}>
        <form className="d-flex align-items-start flex-column" action="">
            <label htmlFor="">first name</label>
            <input type="text" />
            <label htmlFor="">Telephone Number</label>
            <input type="text" />
            <label htmlFor="">email</label>
            <input type="text" />
        </form>
    </div>

    <div className={`containerForm  ${step===3?"active":""}`}>
        <form className="d-flex align-items-start flex-column" action="">

            <label htmlFor="">first name</label>
            <input type="text" />
            <label htmlFor="">Telephone Number</label>
            <input type="text" />
            <label htmlFor="">email</label>
            <input type="text" />
        </form>
    </div>

    <div className={`containerForm  ${step===4?"active":""}`}>
        <form className="d-flex align-items-start flex-column" action="">

            <label htmlFor="">first name</label>
            <input type="text" />
            <label htmlFor="">Telephone Number</label>
            <input type="text" />
            <label htmlFor="">email</label>
            <input type="text" />
        </form>
    </div>


</div>

<div className="col-12 mt-4 d-flex justify-content-center">
    <button className={`btn-simple btn-border  ${step===1?"d-none": ""}`} onClick={()=>Back()}>back</button>
    <button className={`btn-simple btn-full-bgcolor ${step!=4?"": "d-none"}`} onClick={()=>Next()}>next</button>
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