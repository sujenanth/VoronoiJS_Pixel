import {Slider} from "@material-ui/core";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import React, {useState} from 'react'
import {Button} from '@material-ui/core';

export default function CanvasContainer(props){
    const [value, setValue] = useState(3);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    function printValue(value){
        return '2'
    }



    return(
            <ScrollAnimation animateIn="fadeIn" className={"canvas_container"}>
                <div className={"canvas_container_desc"}>
                    <h1 id={"b_title"}>Start</h1>
                    <div className={"value_circle"}>
                        <h1>Anzahl Kreise: </h1>
                        <Slider
                            style={{color: 'grey'}}
                            id={"slidervalue"}
                            value={value}
                            getAriaValueText={() => printValue()}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            marks
                            max={10}
                            min={2}
                            onChange={handleChange} />
                    </div>
                    <div className={"canvas_buttons"}>
                        <Button id={"startButton"}>Start</Button>
                    </div>
                </div>
                <div className={"canvas_container_canvas"}>
                    <canvas id={"voronoi_canvas"} width={"500"} height={"500"}/>
                </div>
            </ScrollAnimation>
    )
}