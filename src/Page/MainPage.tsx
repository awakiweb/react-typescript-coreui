import React,{useState} from 'react';
import '../index.css';
import "@coreui/coreui/scss/coreui.scss";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import StepperForm from '../components/StepperForm/StepperForm';


const  MainPage = () =>{


const[visible,setVisible] = useState(false)

const stepper =()=>{
  return <h1>steppper</h1>
}

  return (
      <div className="c-app c-default-layout">
      <Sidebar visible={visible} onClickOutSideClosed={()=>setVisible(!visible)}/>
      <div className="c-wrapper">
          <Header onClickVisible={()=>setVisible(!visible)}/>
          <div className="c-body">
           
              <Switch>
                <Route  exact path="/"   component={Dashboard} />
            </Switch>
          </div>
     
      </div>
    </div>


    
  );
}

export default MainPage;