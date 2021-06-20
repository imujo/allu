import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';


function AudioTrackFooter() {
    return (
        <div className='audioTrackFooterDiv' > 
            <div className="playAudio">
                <BsFillPlayFill size='25x' color='#d5ccfd' />
            </div>
            <div className="track">
                <div className="switchAuthFont">0:54</div>
                <div className="trackEmpty">
                    <div className="trackFull" style={{width: '80%'}} ></div>
                </div>
            </div>
        </div>
    )
}

export default AudioTrackFooter
