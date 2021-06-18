import React from 'react'

function Article() {

    const background = '/static/media/astronaut.9f78152b.svg'

    return (
        <div className='articleDiv'>
            <div className='articleImage' style={{backgroundImage: `url(${background})`  }} />
            {/* <div className="imageOverlay"></div> */}

            <div className="categoryImageFont articleCategory">Category</div>

            <div className="articleText">
                <h6>Article Title</h6>
                <div className="oneLinerFont oneLiner">One-Liner</div>
            </div>
        </div>
    )
}

export default Article
