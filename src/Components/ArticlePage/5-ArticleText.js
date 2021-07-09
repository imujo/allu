import React from 'react'
import parse from 'html-react-parser'

function ArticleText({articleText}) {
    return (
        <div className='articleTextBackground' >
            <div className="articleTextDiv" >
                {/* {articleText} */}
                {parse(articleText)}
            </div>
           
        </div>
    )
}

export default ArticleText
