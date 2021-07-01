import React from 'react'

function Stats({clicks, comments, likes}) {

    
    return (
        <div className='statsDiv' >
            <div className="clicksStat">
                <h2>Clicks</h2>
                <h6>{clicks}</h6>
            </div>

            <div className="divider"></div>

            <div className="commentsStat">
                <h2>Comments</h2>
                <h6>{comments.length}</h6>
            </div>

            <div className="divider"></div>

            <div className="likesStat">
                <h2>Likes</h2>
                <h6>{likes}</h6>
            </div>
        </div>
    )
}

export default Stats
