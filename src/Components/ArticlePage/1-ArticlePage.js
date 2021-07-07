import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Home/2-Nav'
import ArticleHeader from './2-ArticleHeader'
import ArticleText from './5-ArticleText'
import AudioTrackFooter from '../Random/AudioTrackFooter'
import {useParams} from 'react-router-dom'
import { fetchArticle, fetchComments, fetchLikes, fetchUserArticleLike} from '../../State/StateFunctions'
import {BackendContext} from '../../State/BackendState'
import Auth from '../Random/Auth'




function ArticlePage() {

    const {type, id, trackProgress} = useParams();

    const {authOpenGlobal, userGlobal, isAuthGlobal} = useContext(BackendContext)
    const [authOpen, setAuthOpen] = authOpenGlobal
    const [user, setUser] = userGlobal
    const [isAuth, setIsAuth] = isAuthGlobal

    const [articleData, setarticleData] = useState({comments: [{user: 'a', message: 'a'}]})
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false)

    
    useEffect(() => {
        fetchArticle(setarticleData, type, id)
        fetchLikes(setLikes, type, id)
        if (isAuth) {
            fetchUserArticleLike(type, id, user.id, setLiked)
        }else{
            setLiked(false)
        }


    }, [id, setarticleData, type, isAuth, user, liked, setUser, setIsAuth])

    
    const {title, username, text, category, clicks} = articleData


    


    return (
        <div className='articlePageDiv' >

            {/* Nav */}
            <Nav />

            {/* Article Header */}
            <ArticleHeader 
                title={title} 
                clicks={clicks} 
                likes={likes} 
                category={category} 
                liked={liked}
                setliked={setLiked}
                articleid={id}
                type={type}
                username={username}
            />

            {/* Article Text */}
            <ArticleText articleText={text} />

            {/* Audio Track Footer */}
            {
                type === 'listen' ?
                
                <AudioTrackFooter trackProgressLast={trackProgress} id={id} />

                :

                <></>
            }

{
                authOpen === '' ?
                    undefined
                    :
                    <Auth type={authOpen} setAuthOpen={setAuthOpen} />
            }

        </div>
    )
}

export default ArticlePage
