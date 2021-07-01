import React, { useContext, useEffect, useState } from 'react'
import Tabs from './5-Tabs'
import Search from './6-Search'
import Categories from './7-Categories'
import ArticleList from './9-ArticleList'
import {BackendContext} from '../../State/BackendState'
import {onClickLoadMore} from '../../State/StateFunctions'

function Body() {

    const {filteredArticles} = useContext(BackendContext)
    const [loadedArticles, setLoadedArticles] = useState(9)
    const [loadMore, setLoadMore] = useState()


    useEffect(() => {
        if (loadedArticles >= filteredArticles.length){
            setLoadMore('none')
        }
    }, [loadedArticles, filteredArticles, loadMore])

    

    return (
        <div className='bodyDiv'>

            {/* Read & Listen */}
            <Tabs />


            {/* Search */}
            <Search />


            {/* Category */}
            <Categories />


            {/* Article list */}
            <ArticleList loadedArticles={loadedArticles} />


            {/* Load more */}

            {
                loadedArticles >= filteredArticles.length ?
                    undefined
                :
                    <button className='loadMoreBtn' onClick={()=> onClickLoadMore(filteredArticles, loadedArticles, setLoadedArticles)}>Load More</button>
            }
            


        </div>
    )
}

export default Body
