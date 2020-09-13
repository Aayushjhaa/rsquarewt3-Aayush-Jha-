import React from 'react';
import ProgressBar from "../components/progressBar";

const House=(props)=>{
    return (
        <div className="house">
            <ProgressBar percentage="10"></ProgressBar>
            
            <div className="inner-container--heading">
                <h1><h4>What <b>Type of Home</b> are you looking to sell. </h4></h1>
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
                <a href="/slider">Other</a>
            
        </div>
    )
}




export default House;
