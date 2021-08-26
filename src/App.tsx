import React,{useState} from 'react';
import './index.css';
import "@coreui/coreui/scss/coreui.scss";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StepperForm from './components/StepperForm/StepperForm';
import MainPage from './Page/MainPage';


const  App = () =>{

  return (
      <div >
          <Switch>
              <Route  path="/stepper"  component={StepperForm} />
              <Route  path="/"   component={MainPage} />
          </Switch>   
      </div>

  );
}

export default App;