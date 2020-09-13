import React from 'react';
import House from '../pages/house.js';
import SliderComponent from "../pages/slider";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const InnerContainer=(props)=>{
    return (
        <div className="inner-container">
            <BrowserRouter>
            <Switch>
        <Route exact path="/" render={()=><House />}/>
        <Route path="/slider" render={()=><SliderComponent />} />
      </Switch>
            </BrowserRouter>   
        </div>
    )
}




export default InnerContainer;
