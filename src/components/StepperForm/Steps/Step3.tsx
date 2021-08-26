import React,{useState,useRef} from 'react'
import '../StepperForm.scss'


const Step3 =()=>{ 
    const[hasBusiness,setHasBusiness]=useState(false)
    const[activeButton,setActiveButton]=useState("")

    const onChangeYear=(e:any)=>{
        if(e.target.value==="Yes"){
            setHasBusiness(true)
            setActiveButton("Yes")
            e.preventDefault();
    } else {
            setHasBusiness(false)
            setActiveButton("No")
            e.preventDefault();
        }
    }

    return(
        <>
         <form action="" className="row ">
                <div className={`col-12`}>
                    <div className=" align-items-center " >
                        <label className="ml-2 mb-3" style={{width:"80%"}} htmlFor="">Are opening a new business?</label>
        
                            <div className="d-flex">
                                    
                                <button value="Yes" className={`btn-simple w-50 ${activeButton==="Yes"?"btn-full-bgcolor":"btn-border"}`} onClick={(e)=>onChangeYear(e)}>
                                    Yes
                                </button>

                                <button value="No" className={`btn-simple  w-50 ${activeButton==="No"?"btn-full-bgcolor":"btn-border"}`} onClick={(e)=>onChangeYear(e)}>
                                    No
                                </button>

                            </div>
                    </div>
                </div>

                <div className={`col-12 mt-3 mb-2`}>
                    <div className={`${hasBusiness===true?"":"d-none"} `}  >
                        <label className="mb-3" htmlFor="years">How long do you have own business?</label>
                            <select className="w-100" name="years" id="years">
                                <option value="default">Choose an option</option>
                                <option value="1">1 to 2 year</option>
                                <option value="2">3 to 5 year</option>
                                <option value="2">5 or more year</option>

                            </select>
                    </div>
                </div>
         </form>
        </>
    )
}

export default Step3