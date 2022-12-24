import React from "react";
import Sketch from "react-p5";

function P5Sketch(){

    let x = 0;
    let y = 0;

    function setup(p5, canvasParentRef){
        p5.createCanvas(500, 500).parent(canvasParentRef);
    }

    function draw(p5){
        p5.background(0);
        p5.ellipse(x, y, 70, 70);

        x++;
    }

    return <Sketch setup={setup} draw={draw} />;
}

export default P5Sketch;