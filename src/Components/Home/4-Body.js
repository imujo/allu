import React from 'react'
import Tabs from './5-Tabs'
import Search from './6-Search'
import Categories from './7-Categories'
import ArticleList from './9-ArticleList'

function Body() {
    return (
        <div className='bodyDiv'>

            {/* Read & Listen */}
            <Tabs />


            {/* Search */}
            <Search />


            {/* Category */}
            <Categories />
            <ArticleList/>


            {/* Article list */}


            {/* Load more */}

        </div>
    )
}

export default Body
