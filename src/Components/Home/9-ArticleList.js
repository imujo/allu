import React, { useContext } from 'react'
import ReadArticle from './10-ReadArticle'
import ListenArticle from './10-ListenArticle'
import {BackendContext} from '../../State/BackendState'

function ArticleList({loadedArticles}) {

    const {filteredArticles} = useContext(BackendContext)

    return (
        <div className='articleListDiv' >

            {
                filteredArticles.length > 0 ?
                    filteredArticles.slice(0,loadedArticles).map((article, i)=>{
                        return(
                            
                                article.articletype === 'read' ?
                                    <ReadArticle
                                        title={article.title}
                                        oneLiner={article.oneliner}
                                        category={article.category}
                                        type={article.articletype}
                                        id = {article.id}
                                        language={article.language}
                                        articleText={article.text}
                                        clicks={article.clicks}
                                        key={i}
                                    />
                                :
                                    <ListenArticle
                                        title={article.title}
                                        oneLiner={article.oneliner}
                                        category={article.category}
                                        type={article.articleType}
                                        id = {article.id}
                                        language={article.language}
                                        articleText={article.text}
                                        clicks={article.clicks}
                                        audiofile={article.audiofile}
                                        key={i}
                                    />
                            
                            
                        )
                        
                    })
                    :

                    <h2>No articles found</h2>
            }
            
        </div>
    )
}

export default ArticleList
