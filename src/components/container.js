import React from "react";
import InnerContainer from "./innerContainer"

const Container=()=>{
    return (
        <div className="container">
            <img src={require("../images/gola.png")} alt="gola not found" className="gola"/>
            <img src={require("../images/logo.png")} alt="logo not found" className="logo"/>
            <InnerContainer />
        </div>
    )
}

export default Container;
