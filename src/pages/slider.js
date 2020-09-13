import React from 'react';
import ProgressBar from "../components/progressBar";
import Slider from "@material-ui/core/Slider";
import { withStyles } from '@material-ui/core';


const marks = [
    {
      value: 0,
      label: '$100K',
    },
    {
      value: 25,
      label: '$250K',
    },
    {
      value: 50,
      label: '$750K',
    },
    {
      value: 75,
      label: '$1M',
    },
    {
        value: 100,
        label: '$5M'
    }
  ];

const valueLabelFormat=(value)=>{
    return marks.findIndex((mark) => mark.value === value) + 1;
}

const CustomSlider = withStyles({
    root:{
        color:"#3eaeef",
        height: 8,
    }
})(Slider)

const SliderComponent=(props)=>{
    return (
        <div className="slider">
            <ProgressBar percentage="20"></ProgressBar>
            
            <div className="inner-container--heading">
                <h1><h4>What is your estimated <b>Home</b></h4></h1>
            </div> 
            <div className="slider-body">
            <CustomSlider
                defaultValue={0}
                valueLabelFormat={valueLabelFormat}
                aria-labelledby="continous-slider-restrict"
                step={null}
                // valueLabelDisplay="auto"
                marks={marks}
                className='slider-bar'
            />
            <div className="button">
                <button className="inner-container--button">Continue</button>
                <div>
                <a href="/">Back</a>
                </div>
            </div>
            
            </div>
            
            </div>
            )
    }

export default SliderComponent;
