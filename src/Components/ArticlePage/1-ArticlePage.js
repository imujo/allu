import React, { useEffect, useState } from 'react'
import Nav from '../Home/2-Nav'
import ArticleHeader from './2-ArticleHeader'
import ArticleText from './5-ArticleText'
import AudioTrackFooter from '../Random/AudioTrackFooter'
import {useParams} from 'react-router-dom'
import { fetchArticle } from '../../State/StateFunctions'


function ArticlePage() {

    const {id} = useParams();

    const [articleData, setarticleData] = useState({comments: [{user: 'a', message: 'a'}]})

    useEffect(() => {
        fetchArticle(setarticleData, id)
    }, [id, setarticleData])

    const {title, user, clicks, comments,  likes, articleText, type, category} = articleData


    return (
        <div className='articlePageDiv' >

            {/* Nav */}
            <Nav />

            {/* Article Header */}
            <ArticleHeader title={title} user={user} clicks={clicks} comments={comments} likes={likes} category={category} />

            {/* Article Text */}
            <ArticleText articleText={articleText} />

            {/* Audio Track Footer */}
            {
                type === 'listen' ?
                
                <AudioTrackFooter />

                :

                <></>
            }

        </div>
    )
}

export default ArticlePage
