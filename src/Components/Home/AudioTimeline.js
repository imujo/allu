import React from 'react'
import {onScrub, onScrubEnd} from '../../State/AudioFunctions'


function AudioTimeline({time, trackProgress, duration, intervalRef, audioRef, setTime, settrackPercentage, settrackProgress, isPlaying, setisPlaying, trackPercentage}) {



    return (
        <div className='audioTimelineDiv' >
            <div className="switchAuthFont">{time}</div>
            <div className="track">
                <input 
                    type='range' 
                    className='emptyTrack' 
                    value={trackProgress}
                    step="2"
                    min="0"
                    max={duration ? duration : `${duration}`}

                    onChange={(e) => onScrub(e.target.value, intervalRef, audioRef, setTime, settrackPercentage, settrackProgress)}

                    onMouseUp={()=>onScrubEnd(isPlaying, setisPlaying, intervalRef, audioRef, setTime, settrackProgress, settrackPercentage)}
                    
                    onKeyUp={()=>onScrubEnd(isPlaying, setisPlaying, intervalRef, audioRef, setTime, settrackProgress, settrackPercentage)}
                >
                </input>
                <div className="fullTrack" style={{width: `${trackPercentage}%` }} ></div>
            </div>
        </div>
    )
}

export default AudioTimeline
