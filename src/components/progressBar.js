import React from 'react';

const ProgressBar=(props)=>{
    return (
        <div className="progress-bar">
            <div className="completed" style={{flex:props.percentage}}></div>
            <div className="left" style={{flex:100-props.percentage}}></div>
        </div>
    )
}

export default ProgressBar;