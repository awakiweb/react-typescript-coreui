import React, { useState } from "react";
import {CChartDoughnut, CChartLine} from "@coreui/react-chartjs";
//import {getColor, deepObjectsMerge} from '@coreui/utils';
import './Donut.scss'



const Donut = (props:any) => {

    const pie = {
        datasets: [
          {
            data: [(100/props.countstep)*props.step,100-(100/props.countstep*props.step)],
            backgroundColor: [
              '#1435a0',
              '#9c9c9c42',
            ],
         
            borderWidth:0,
          
         
          }],
      };
    
    
      const  op={
      options: {
        borderWidth:1,
        cutoutPercentage: 75,
        tooltips: {enabled: false},
       
        legend: {
            display: false,
     
        },
        animation: {
            animateScale: false,
            animateRotate: false,
            duration: 1000,
            
           
        }
        
    }
    }


    return (
        <>
            <div className={`${props.step>0?"active":""} containerChart`} style={{height:"140px " ,width:"140px",backgroundColor:'white',borderRadius:"50%"}}>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <span className="label1">{Math.round(100/props.countstep*props.step)} %</span>
                    <span className="label2">complete</span>
                </div>


        <CChartDoughnut
            style={{height: '14rem',width:"14rem",position:"absolute",top:"14px"}}
            datasets={pie.datasets} 
            options={op.options}
        />


</div> 
        </>
    )
}

export default Donut;