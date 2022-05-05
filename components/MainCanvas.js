import React, { useState } from 'react'

function MainCanvas() {
    const [startPoint, setStartPoint] = useState([-10, -10]);
    const [endPoint, setEndPoint] = useState([-10, -10]);
    return (
        <div className="canvasContainer">
            <canvas id="mainCanvas" width={800} height={800}
            onMouseDown={e => handleMouseDown(e, setStartPoint)}
            onMouseUp={e => handleMouseUp(e, setEndPoint)}
            onClick={e => handleMouseClick(e, startPoint, endPoint)}
            onLoad={handleOnLoad()}></canvas>
        </div>
    );
}

function handleMouseClick(e, startPoint, endPoint) {
    var elem = e.currentTarget;
    const mainContext = elem.getContext('2d');
    mainContext.fillStyle = 'red';
    mainContext.fillRect(startPoint[0], startPoint[1], 1, 1);
    mainContext.fillRect(endPoint[0], endPoint[1], 1, 1);
}

function handleMouseDown(e, setStartPoint) {
    var elem = e.currentTarget;
    var rect = elem.getBoundingClientRect();
    var mouseX = e.pageX - rect.left;
    var mouseY = e.pageY - rect.top;

    var pixel = 10;
    var nearestX = (Math.round(mouseX/pixel))*pixel;
    var nearestY = (Math.round(mouseY/pixel))*pixel;

    setStartPoint([nearestX, nearestY]);
}

function handleMouseUp(e, setEndPoint) {
    var elem = e.currentTarget;
    var rect = elem.getBoundingClientRect();
    var mouseX = e.pageX - rect.left;
    var mouseY = e.pageY - rect.top;

    var pixel = 10;
    var nearestX = (Math.round(mouseX/pixel))*pixel;
    var nearestY = (Math.round(mouseY/pixel))*pixel;
    
    setEndPoint([nearestX, nearestY]);

    
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
