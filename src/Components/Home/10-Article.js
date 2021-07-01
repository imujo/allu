import React, { useRef, useState } from 'react'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom'
import {currentTimeToTime, currentTimeToPercentage} from '../../State/StateFunctions'


function Article({title, oneLiner, category, type, id, language, articleText, views, likes, comments}) {

    const history = useHistory()

    const redirectToArticle = () => {
        history.push(`/article/${id}`)
    }
    const [isPlaying, setisPlaying] = useState(false)
    const [time, setTime] = useState('00:00')   
    const [trackPercentage, settrackPercentage] = useState(0)
    const [trackProgress, settrackProgress] = useState(0)

    const audioRef = useRef(new Audio('http://localhost:9000/audio/1.mp3'))
    const intervalRef = useRef()
    const {duration} = audioRef.current;


    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                setisPlaying(false)
            } else {
                currentTimeToTime(audioRef.current.currentTime, setTime)
                settrackProgress(audioRef.current.currentTime)
                settrackPercentage(currentTimeToPercentage(audioRef));
            }
        }, [1000]);
    }

    const onScrub = (value) => {
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      
      settrackPercentage(currentTimeToPercentage(audioRef));
      settrackProgress(audioRef.current.currentTime);

    }
    
    const onScrubEnd = () => {
      if (!isPlaying) {
        setisPlaying(true);
      }
      startTimer();
    }
    

    
    return (
        <div className='articleDiv' >
            <img alt='articleImage' src={`http://localhost:9000/categoryImages/${category}.svg`} className='articleImage' onClick={() =>redirectToArticle()} />

            <div className="categoryImageFont articleCategory">{category}</div>

            <div className="articleText" >
                <div className="text" onClick={() =>redirectToArticle()} >
                    <h6>{title}</h6>
                    <div 
                        className="oneLinerFont oneLiner"
                        
                        >
                        {`"${oneLiner}"`}
                    </div>
                </div>

                {
                    type === 'listen' ?
                            
                                isPlaying ?
                                <div className="playAudio"> 
                                <BsFillPauseFill size='25px' color='#d5ccfd' onClick={()=>{audioRef.current.pause();setisPlaying(false)}} />
                                </div>
                              
                                :
                                <div className="playAudio"> 
                                    <BsFillPlayFill size='25px' color='#d5ccfd' onClick={()=>{audioRef.current.play(); setisPlaying(true); startTimer()}} />
                                </div>
                            
               
                    :
                    <></>
                }
                
            </div>

            {
                type === 'listen' && isPlaying ?

                    <div className="audioTrack"  >
                        <div className="switchAuthFont">{time}</div>
                        <div className="track">
                            <input 
                                type='range' 
                                className='emptyTrack' 
                                value={trackProgress}
                                step="1"
                                min="0"
                                max={duration ? duration : `${duration}`}
                                onChange={(e) => onScrub(e.target.value)}
                                onMouseUp={onScrubEnd}
                                onKeyUp={onScrubEnd}
                            >
                            </input>
                            <div className="fullTrack" style={{width: `${trackPercentage}%` }} ></div>
                        </div>
                        
                    </div>
                    
                :
                <></>
            }
        </div>
    )
}

export default Article
