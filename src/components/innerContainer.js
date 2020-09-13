import React from 'react';
import ProgressBar from "./progressBar";
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
            {/* <ProgressBar percentage="10"></ProgressBar>
            
            <div className="inner-container--heading">
                <h1>{props.heading}</h1>
            </div>
            <div className="inner-container--body">
                <div className="grid-item-family">
                    <img src={require("../images/ghar1.png?3em x 2em")} alt="House not available"/>
                    <div>
                      <button className="inner-container--button">Single Family</button>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={require("../images/ghar2.png")} alt="House not available"/>
                    <div>
                    <button className="inner-container--button">Multi Family</button>
                    </div>
                    
                </div>
                <div className="grid-item">
                    <img src={require("../images/ghar3.png")}  alt="House not available"/>
                    <div>
                    <button className="inner-container--button">Townhouse</button>
                    </div>
                    
                </div>
                <div className="grid-item">
                    <img src={require("../images/ghar4.png")} alt="House not available"/>
                    <div>
                        <button className="inner-container--button">Condominium</button>
                        </div>
                </div>
            </div>
                <a href="#">Other</a> */}
            
        </div>
    )
}




export default InnerContainer;
