import React, { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import Stats from './3-Stats'
import Comments from './4-Comments'


function ArticleHeader({title, user, clicks, comments, likes, category}) {

    const [liked, setliked] = useState(false)

    return (
        <div className='articleHeaderDiv' >
            <div className="articlePageTitleSection">
                <h1>{title}</h1>
                <div className="user">
                    <h2>by {user}</h2>
                    <div className="like" onClick={()=>setliked(!liked)}>
                        {
                            liked ?
                                <AiFillHeart className='like' color='#837e9f' />
                            :
                            <AiOutlineHeart className='like' color='#837e9f' />
                        }
                    </div>
                </div>
            </div>

            <div className="articleStatsSection">
                <Stats clicks={clicks} comments={comments} likes={likes} />
            </div>
            <div className="comments">
                <Comments comments={comments} />
            </div>
            <div className="articlePageImageSection">
                <img alt='articleImage' src={`http://localhost:9000/categoryImages/${category}.svg`} className="articlePageImage"  ></img>
            </div>
            
        </div>
    )
}

export default ArticleHeader

// style={{backgroundImage: `url(${background})`}}