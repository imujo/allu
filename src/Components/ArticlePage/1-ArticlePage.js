import React from 'react'
import Nav from '../Home/2-Nav'
import ArticleHeader from './2-ArticleHeader'
import ArticleText from './5-ArticleText'
import AudioTrackFooter from '../Random/AudioTrackFooter'


function ArticlePage({type}) {
    return (
        <div className='articlePageDiv' >

            {/* Nav */}
            <Nav />

            {/* Article Header */}
            <ArticleHeader />

            {/* Article Text */}
            <ArticleText />

            {/* Audio Track Footer */}
            {
                type === 'audio' ?
                
                <AudioTrackFooter />

                :

                <></>
            }

        </div>
    )
}

export default ArticlePage
