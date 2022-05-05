import React from 'react'

function MainCanvas() {
    return (
        <div className="canvasContainer">
            <canvas id="mainCanvas" width={1280} height={720} onClick={e => handleMouseClick(e)} onLoad={handleOnLoad()}></canvas>
        </div>
    );
}

function handleMouseClick(e) {
    var pixel = 10;
    var rect = e.currentTarget.getBoundingClientRect();
    var clickX = e.pageX - rect.left;
    var clickY = e.pageY - rect.top;
    console.log(clickX);
    console.log(clickY);

    var highlightX = (Math.round(clickX/pixel))*pixel;
    var highlightY = (Math.round(clickY/pixel))*pixel;
    
    const mainCanvas = document.getElementById("mainCanvas");
    const mainContext = mainCanvas.getContext('2d');
    mainContext.fillStyle = 'red';
    mainContext.fillRect(highlightX, highlightY, 1, 1);
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
