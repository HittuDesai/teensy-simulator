import React from 'react'

function SDCard() {
    var topCoords = [];
    for(var y = 25; y <= 105; y+=20) {
        topCoords = [...topCoords, y];
    }

    var sdpinCoords = [];
    for(var z = 30; z <= 110; z+=10) {
        sdpinCoords = [...sdpinCoords, z];
    }

    const handlePinClick = (e) => {
        console.log(e.currentTarget.id);
    }
    

    return(
        <div id='sdcard'>
            {
                topCoords.map((coord, id) => {
                    var style = {
                        top: coord,
                    }
                    
                    var ID = id.toString()+"sd";

                    return (
                        <button key={ID} id={ID} style={style} className="pin" onClick={handlePinClick}></button>
                    );
                })
            }
            <div id='sdcardmodule'>
                <div id='sdcardpins'>
                    {
                        sdpinCoords.map((coord, id) => {
                            var style = {
                                top: coord-28,
                            }

                            var ID = id.toString()+"sdpin";

                            return (
                                <button key={ID} id={ID} style={style} className="sdpin" onClick={handlePinClick}></button>
                            );
                        })
                    }
                    
                </div>
                
            </div>
        </div>
    );
}

export default SDCard;
