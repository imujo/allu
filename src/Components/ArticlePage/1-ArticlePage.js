import React from 'react'
import Nav from '../Home/2-Nav'
import ArticleHeader from './2-ArticleHeader'
import ArticleText from './5-ArticleText'

function ArticlePage() {
    return (
        <div className='articlePageDiv' >

            {/* Nav */}
            <Nav />

            {/* Article Header */}
            <ArticleHeader />

            {/* Article Text */}
            <ArticleText />

        </div>
    )
}

export default ArticlePage
