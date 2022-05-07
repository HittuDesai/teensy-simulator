import React, { useState } from 'react'

function MainCanvas() {
    const [isStartPointDone, setIsStartPointDone] = useState(false);
    const [startPoint, setStartPoint] = useState([-10, -10]);
    const [linePoints, setLinePoints] = useState([]);

    const stateArray = {
        "startBool": [isStartPointDone, value => setIsStartPointDone(value)],
        "start": [startPoint, value => setStartPoint(value)],
        "linePoints": [linePoints, value => setLinePoints(value)],
    };

    return (
        <div className="canvasContainer">
            <canvas id="mainCanvas" width={690} height={690}
            onClick={e => handleMouseClick(e, stateArray)}
            onLoad={handleOnLoad()}></canvas>
        </div>
    );
}

function handleMouseClick(e, stateArray) {
    var elem = e.currentTarget;
    var rect = elem.getBoundingClientRect();
    
    var pixel = 10;
    var x = e.clientX-rect.left;
    x = (Math.round(x/pixel))*pixel;
    var y = e.clientY-rect.top;
    y = (Math.round(y/pixel))*pixel;

    var startBoolArray = stateArray["startBool"];
    var startArray = stateArray["start"];
    var linePointsArray = stateArray["linePoints"];

    if(!startBoolArray[0]) {
        startBoolArray[1](true);
        startArray[1]([x, y]);
    }
    else if(startBoolArray[0]) {
        startBoolArray[1](false);
        
        const obj = {
            "start": startArray[0],
            "end": [x, y],
        }
        var newLinePointsArray = [...linePointsArray[0], obj];
        drawCanvas(newLinePointsArray);
        linePointsArray[1](newLinePointsArray);
    }
}

function handleOnLoad() {
    const mainCanvas = document.getElementById("mainCanvas");
    if(mainCanvas) {
        var rect = mainCanvas.getBoundingClientRect();
        var pixel = 10;
        var numPointsX = rect.width/pixel;
        var numPointsY = rect.height/pixel;

        const mainContext = mainCanvas.getContext('2d');
        mainContext.fillStyle = 'white';

        for(let i = 0; i <= numPointsX; i++) {
            for(let j = 0; j <= numPointsY; j++) {
                mainContext.fillRect(i*pixel, j*pixel, 1, 1);
            }
        }
    }
}

function drawCanvas(linePoints) {
    if(linePoints.length == 0) {
        console.log("ZERO LENGTH");
        return;
    }
    console.log("DRAWING LINE");
    linePoints.map(line => {
        var startX = line["start"][0];
        var startY = line["start"][1];
        var endX = line["end"][0];
        var endY = line["end"][1];

        const mainContext = document.getElementById("mainCanvas").getContext('2d');
        mainContext.strokeStyle = 'blue';
        mainContext.beginPath();
        mainContext.moveTo(startX, startY);
        mainContext.lineTo(endX, endY);
        mainContext.stroke();

        mainContext.fillStyle = 'green';
        mainContext.fillRect(startX, startY, 1, 1);
        mainContext.fillRect(endX, endY, 1, 1);
    });
}

export default MainCanvas;
