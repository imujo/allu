import React, { useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs';


function Article({title, oneLiner, category, type, language, articleText, views, likes, comments}) {

    const [isPlaying, setisPlaying] = useState(false)

    return (
        <div className='articleDiv'>
            <div className='articleImage'  />

            <div className="categoryImageFont articleCategory">{category}</div>

            <div className="articleText">
                <div className="text">
                    <h6>{title}</h6>
                    <div className="oneLinerFont oneLiner">{`"${oneLiner}"`}</div>
                </div>

                {
                    type === 'listen' ?
                        <div className="playAudio" onClick={()=>setisPlaying(!isPlaying)} >
                            <BsFillPlayFill size='25px' color='#d5ccfd' />
                        </div>
                    :
                    <></>
                }
                
            </div>

            {
                type === 'listen' && isPlaying ?

                    <div className="audioTrack">
                        <div className="switchAuthFont">0:54</div>
                        <div className="emptyTrack">
                            <div className="fullTrack" style={{width:'80%'}}></div>
                        </div>
                    </div>
                :
                <></>
            }
        </div>
    )
}

export default Article

// style={{backgroundImage: `url(${background})`  }}