import React, { useState } from 'react'

function MainCanvas() {
    const [isStartPointDone, setIsStartPointDone] = useState(false);
    const [startPoint, setStartPoint] = useState([-10, -10]);
    const [isEndPointDone, setIsEndPointDone] = useState(false);
    const [endPoint, setEndPoint] = useState([-10, -10]);

    const stateArray = {
        "startBool": [isStartPointDone, value => setIsStartPointDone(value)],
        "start": [startPoint, value => setStartPoint(value)],
        "endBool": [isEndPointDone, value => setIsEndPointDone(value)],
        "end": [endPoint, value => setEndPoint(value)],
    };

    return (
        <div className="canvasContainer">
            <canvas id="mainCanvas" width={800} height={800}
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
    var endBoolArray = stateArray["endBool"];
    var endArray = stateArray["end"];

    if(!startBoolArray[0]) {
        startBoolArray[1](true);
        startArray[1]([x, y]);
    }
    else if(startBoolArray[0] && !endBoolArray[0]) {
        startBoolArray[1](false);
        endBoolArray[1](false);
        endArray[1]([x, y]);
        console.log("START: ", startArray[0][0], startArray[0][1]);
        console.log("END: ", x, y);
        
        const mainContext = elem.getContext('2d');
        mainContext.strokeStyle = 'blue';
        mainContext.beginPath();
        mainContext.moveTo(startArray[0][0], startArray[0][1]);
        mainContext.lineTo(x, y);
        mainContext.stroke();

        /*mainContext.fillStyle = 'green';
        mainContext.fillRect(startArray[0][0], startArray[0][1], 1, 1);
        mainContext.fillRect(x, y, 1, 1);*/
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

export default MainCanvas;
