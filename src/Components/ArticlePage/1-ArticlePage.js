import React from 'react'
import Nav from '../Home/2-Nav'
import ArticleHeader from './2-ArticleHeader'

function ArticlePage() {
    return (
        <div className='articlePageDiv' >

            {/* Nav */}
            <Nav />

            {/* Article Header */}
            <ArticleHeader />

        </div>
    )
}

export default ArticlePage
