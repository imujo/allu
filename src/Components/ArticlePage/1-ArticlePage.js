import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Home/2-Nav'
import ArticleHeader from './2-ArticleHeader'
import ArticleText from './5-ArticleText'
import AudioTrackFooter from '../Random/AudioTrackFooter'
import {useParams} from 'react-router-dom'
import { fetchArticle, fetchComments, fetchLikes} from '../../State/StateFunctions'
import {BackendContext} from '../../State/BackendState'
import Auth from '../Random/Auth'




function ArticlePage() {

    const {type, id, trackProgress} = useParams();

    const [articleData, setarticleData] = useState({comments: [{user: 'a', message: 'a'}]})
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState(0)

    
    useEffect(() => {
        fetchArticle(setarticleData, type, id)
        fetchComments(setComments, type, id)
        fetchLikes(setLikes, type, id)

    }, [id, setarticleData, type])

    
    const {title, username, text, category, clicks} = articleData


    const {authOpenGlobal} = useContext(BackendContext)
    const [authOpen, setAuthOpen] = authOpenGlobal


    return (
        <div className='articlePageDiv' >

            {/* Nav */}
            <Nav />

            {/* Article Header */}
            <ArticleHeader title={title} user={username} clicks={clicks} comments={comments} likes={likes} category={category} />

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
