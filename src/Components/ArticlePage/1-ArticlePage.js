import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Home/2-Nav'
import ArticleHeader from './2-ArticleHeader'
import ArticleText from './5-ArticleText'
import AudioTrackFooter from '../Random/AudioTrackFooter'
import {useParams} from 'react-router-dom'
import { fetchArticle, fetchLikes, fetchUserArticleLike, fetchCategory} from '../../State/StateFunctions'
import {BackendContext} from '../../State/BackendState'
import Auth from '../Random/Auth'




function ArticlePage() {

    const {type, id, audiofile, trackProgress} = useParams();

    const {authOpenGlobal, userGlobal, isAuthGlobal} = useContext(BackendContext)
    const [authOpen, setAuthOpen] = authOpenGlobal
    const [user, setUser] = userGlobal
    const [isAuth, setIsAuth] = isAuthGlobal

    const [articleData, setarticleData] = useState({comments: [{user: 'a', message: 'a'}], text: ''})
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false)
    const [categoryObject, setCategoryObject] = useState({})

    
    const {title, created_by, text, category, clicks} = articleData



    useEffect(() => {
        fetchArticle(setarticleData, type, id)
        fetchLikes(setLikes, type, id)
        fetchCategory(setCategoryObject, category)
        if (isAuth) {
            fetchUserArticleLike(type, id, user.id, setLiked)
        }else{
            setLiked(false)
        }


    }, [id, setarticleData, type, isAuth, user, liked, setUser, setIsAuth, category])

    
    


    
    

    

    return (
        <div className='articlePageDiv' >

            {/* Nav */}
            <Nav />

            {/* Article Header */}
            <ArticleHeader 
                title={title} 
                clicks={clicks} 
                likes={likes} 
                category={categoryObject} 
                liked={liked}
                setliked={setLiked}
                articleid={id}
                type={type}
                created_by={created_by}
            />

            {/* Article Text */}
            <ArticleText articleText={text} />

            {/* Audio Track Footer */}
            {
                type === 'listen' ?
                
                <AudioTrackFooter trackProgressLast={trackProgress} audiofile={audiofile} />

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
