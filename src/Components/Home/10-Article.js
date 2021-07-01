import React, { useEffect, useRef, useState } from 'react'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom'
import {startTimer, onPlay} from '../../State/AudioFunctions'
import AudioTimeline from './AudioTimeline'


function Article({title, oneLiner, category, type, id, language, articleText, views, likes, comments}) {

    const history = useHistory()

    const redirectToArticle = () => {
        history.push(`/article/${id}/${trackProgress}`)
    }
    const [hover, setHover] = useState(0)


    const [isPlaying, setisPlaying] = useState(false)
    const [time, setTime] = useState('00:00')   
    const [trackPercentage, settrackPercentage] = useState(0)
    const [trackProgress, settrackProgress] = useState(0)
   


    const audioRef = useRef(new Audio( `http://localhost:9000/audio/${id}.mp3`))
    const intervalRef = useRef()
    const {duration} = audioRef.current;
       


    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            audioRef.current.pause();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            clearInterval(intervalRef.current)
        }
    }, [])


    return (
        <div 
            className='articleDiv' 
            hover={hover}   
            // onMouseEnter={type === 'read' ? ()=> setHover(1) : undefined}
            onMouseEnter={()=>console.log(id,`http://localhost:9000/audio/${id}.mp3`===  audioRef.current.src)}
            onMouseLeave={type === 'read' ? ()=> setHover(0) : undefined}
            onClick={type === 'read' ? ()=>redirectToArticle() : undefined}
        >
            <img 
                alt='articleImage' 
                src={`http://localhost:9000/categoryImages/${category}.svg`} 
                className='articleImage' 
                onClick={type === 'listen' ? ()=>redirectToArticle() : undefined}
                onMouseEnter={type === 'listen' ? ()=> setHover(1) : undefined}
                onMouseLeave={type === 'listen' ? ()=> setHover(0) : undefined}
            />

            <div className="categoryImageFont articleCategory">{category}</div>

            <div className="articleText" >
                <div 
                    className="text" 
                    onClick={type === 'listen' ? ()=>redirectToArticle() : undefined} 
                    onMouseEnter={type === 'listen' ? ()=> setHover(1) : undefined}
                    onMouseLeave={type === 'listen' ? ()=> setHover(0) : undefined}
                >
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
                                <BsFillPauseFill 
                                    size='25px' 
                                    color='#d5ccfd' 
                                    onClick={()=>{audioRef.current.pause();setisPlaying(false); console.log(id)}} />
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
                            
               
                    :
                    <></>
                }
                
            </div>

            {
                type === 'listen' && isPlaying ?

                    <div className="audioTrack"  >
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
                    
                :
                <></>
            }
        </div>
    )
}

export default Article
