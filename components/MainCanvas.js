import React from 'react'

function MainCanvas() {
    return (
        <div className="canvasContainer">
            <canvas id="mainCanvas" width={800} height={800} onClick={e => handleMouseClick(e)} onLoad={handleOnLoad()}></canvas>
        </div>
    );
}

function handleMouseClick(e) {
    var elem = e.currentTarget;
    var rect = elem.getBoundingClientRect();
    var clickX = e.pageX - rect.left;
    var clickY = e.pageY - rect.top;

    var pixel = 10;
    var highlightX = (Math.round(clickX/pixel))*pixel;
    var highlightY = (Math.round(clickY/pixel))*pixel;
    console.log(highlightX);
    console.log(highlightY);
    
    const mainContext = elem.getContext('2d');
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
