import React from 'react'

function Stats() {
    return (
        <div className='statsDiv' >
            <div className="clicksStat">
                <h2>Clicks</h2>
                <h6>53</h6>
            </div>

            <div className="divider"></div>

            <div className="commentsStat">
                <h2>Comments</h2>
                <h6>2</h6>
            </div>

            <div className="divider"></div>

            <div className="likesStat">
                <h2>Likes</h2>
                <h6>26</h6>
            </div>
        </div>
    )
}

export default Stats
