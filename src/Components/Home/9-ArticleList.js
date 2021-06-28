import React, { useContext } from 'react'
import Article from './10-Article'
import {BackendContext} from '../../State/BackendState'

function ArticleList() {

    const {filteredArticles} = useContext(BackendContext)


    return (
        <div className='articleListDiv' >

            {
                filteredArticles.length > 0 ?
                    [1,2,3,4].map((value, i)=>{
                        return(
                            filteredArticles.map((article, i)=>{
                                return(
                                    <Article
                                        title={article.title}
                                        oneLiner={article.oneLiner}
                                        category={article.category}
                                        type={article.type}
                                        language={article.language}
                                        articleText={article.text}
                                        views={article.views}
                                        likes={article.views}
                                        comments={article.comments}
                                        key={i}
                                    />
                                )
                                
                            })
                            
                        )
                    })

                    :

                    <h2>No articles found</h2>
            }
            
        </div>
    )
}

export default ArticleList
