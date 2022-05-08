import React from 'react'

function Teensy() {
    var leftCoords = [];
    for(var x = 120; x <= 580; x+=20) {
        leftCoords = [...leftCoords, x];
    }

    const handlePinClick = (e) => {
        console.log(e.currentTarget.id);
    }

    return(
        <div id='teensyBase'>
            {
                leftCoords.map((coord, id) => {
                    var styleTop = {
                        left: coord-115,
                        top: "5px",
                    }
                    var styleBottom = {
                        left: coord-115,
                        top: "125px",
                    }
                    var topID = id.toString()+"t";
                    var botID = id.toString()+"b";

                    return (
                        <React.Fragment key={id}>
                            <button key={topID} id={topID} style={styleTop} className="pin" onClick={handlePinClick}></button>
                            <button key={botID} id={botID} style={styleBottom} className="pin" onClick={handlePinClick}></button>
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
}

export default Teensy;
