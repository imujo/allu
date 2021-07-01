import React from 'react'

function ArticleText({articleText}) {
    return (
        <div className='articleTextBackground' >
            <div className="articleTextDiv">
                <p>{articleText}</p>
            </div>
           
        </div>
    )
}

export default ArticleText
