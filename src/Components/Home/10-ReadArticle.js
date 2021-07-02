import React, {useState } from 'react'
import { useHistory } from 'react-router-dom'


function ReadArticle({title, oneLiner, category, type, id, language, articleText, views, likes, comments}) {

    const history = useHistory()

    const redirectToArticle = () => {
        history.push(`/article/${id}/0`)
    }
    const [hover, setHover] = useState(0)

    return (
        <div 
            className='articleDiv' 
            hover={hover}   
            onMouseEnter={()=> setHover(1)}
            onMouseLeave={()=> setHover(0)}
            onClick={()=>redirectToArticle()}
        >
            <img 
                alt='articleImage' 
                src={`http://localhost:9000/categoryImages/${category}.svg`} 
                className='articleImage' 
            />

            <div className="categoryImageFont articleCategory">{category}</div>

            <div className="articleText" >
                <div 
                    className="text" 
                >
                    <h6>{title}</h6>
                    <div 
                        className="oneLinerFont oneLiner"
                        
                        >
                        {`"${oneLiner}"`}
                    </div>
                </div> 
                
            </div>

        </div>
    )
}

export default ReadArticle
