import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';


function Article({type}) {

    const background = '/static/media/astronaut.9f78152b.svg'

    return (
        <div className='articleDiv'>
            <div className='articleImage'  />
            {/* <div className="imageOverlay"></div> */}

            <div className="categoryImageFont articleCategory">Category</div>

            <div className="articleText">
                <div className="text">
                    <h6>Article Title</h6>
                    <div className="oneLinerFont oneLiner">One-Liner</div>
                </div>

                {
                    type === 'audio' ?
                        <div className="playAudio">
                            <BsFillPlayFill size='25px' color='#d5ccfd' />
                        </div>
                    :
                    <></>
                }
                
            </div>

            {
                type === 'audio' ?

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