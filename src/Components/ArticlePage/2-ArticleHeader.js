import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import Stats from './3-Stats'
import Comments from './4-Comments'


function ArticleHeader() {

    const background = '/static/media/astronaut.9f78152b.svg'

    return (
        <div className='articleHeaderDiv' >
            <div className="articlePageTitleSection">
                <h1>Article</h1>
                <div className="user">
                    <h2>by FrenchMaster</h2>
                     <AiOutlineHeart className='like' color='#837e9f' />
                </div>
            </div>

            <div className="articleStatsSection">
                <Stats />
            </div>
            <div className="comments">
                <Comments />
            </div>
            <div className="articlePageImageSection">
                <div className="articlePageImage" style={{backgroundImage: `url(${background})`}} ></div>
            </div>
            
        </div>
    )
}

export default ArticleHeader
