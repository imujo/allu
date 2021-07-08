import React, { useEffect, useRef, useState } from 'react'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import {startTimer, onPlay, currentTimeToPercentage, currentTimeToTime} from '../../State/AudioFunctions'
import AudioTimeline from '../Home/AudioTimeline'


function AudioTrackFooter({trackProgressLast, audiofile}) {
    const [isPlaying, setisPlaying] = useState(false)
    const [time, setTime] = useState('00:00')   
    const [trackPercentage, settrackPercentage] = useState(0)
    const [trackProgress, settrackProgress] = useState(0)

    const audioRef = useRef(new Audio(`${process.env.REACT_APP_SERVER_DOMAIN}/audio/${audiofile}`))
    const intervalRef = useRef()
    const {duration} = audioRef.current;
    
    useEffect(() => {   
        audioRef.current.currentTime = trackProgressLast
        settrackProgress(audioRef.current.currentTime)
        settrackPercentage(currentTimeToPercentage(audioRef))
        setTime(currentTimeToTime(audioRef))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            audioRef.current.pause();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div className='audioTrackFooterDiv' > 
            <div className="playAudio">
            {
                isPlaying ?
                    <div className="playAudio"> 
                    <BsFillPauseFill 
                        size='25px' 
                        color='#d5ccfd' 
                        onClick={()=>{audioRef.current.pause();setisPlaying(false)}} />
                    </div>
                    
                    :
                    <div className="playAudio"> 
                        <BsFillPlayFill 
                            size='25px' 
                            color='#d5ccfd' 
                            onClick={()=>onPlay(
                                audioRef, 
                                intervalRef, 
                                setTime, 
                                settrackProgress, 
                                settrackPercentage, 
                                setisPlaying, 
                                startTimer
                            )} 
                        />
                    </div>
            }
            </div>
            <div className="articlePageTimeline">
                <AudioTimeline 
                    time={time}
                    setTime={setTime}

                    trackProgress={trackProgress}
                    settrackProgress={settrackProgress}

                    trackPercentage={trackPercentage}
                    settrackPercentage={settrackPercentage}

                    isPlaying={isPlaying}
                    setisPlaying={setisPlaying}

                    intervalRef={intervalRef}
                    audioRef={audioRef}
                    duration={duration}
                />
            </div>
        </div>
    )
}

export default AudioTrackFooter
