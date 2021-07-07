import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import Stats from './3-Stats'
import Comments from './4-Comments'
import { fetchPostLike, fetchComments } from '../../State/StateFunctions'
import { BackendContext } from '../../State/BackendState'


function ArticleHeader({title, clicks, username, likes, category, liked, setliked, articleid, type}) {

    const {userGlobal, isAuthGlobal} = useContext(BackendContext)
    const [user, ] = userGlobal
    const [isAuth, ] = isAuthGlobal

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments(setComments, type, articleid)
        
    }, [type, articleid, setComments])

    return (
        <div className='articleHeaderDiv' >
            <div className="articlePageTitleSection">
                <h1>{title}</h1>
                <div className="user">
                    <h2>by {username}</h2>
                    <div 
                        className="like" 
                        onClick={isAuth ? ()=>fetchPostLike(type, articleid, user.id, setliked, liked) : undefined}>
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
                <Comments comments={comments} setcomments={setComments} type={type} articleid={articleid} username={user.username} />
            </div>
            <div className="articlePageImageSection">
                <img 
                    alt='articleImage' 
                    src={`${process.env.REACT_APP_SERVER_DOMAIN}/categoryImages/${category}.svg`} 
                    className="articlePageImage"  
                />
            </div>
            
        </div>
    )
}

export default ArticleHeader
