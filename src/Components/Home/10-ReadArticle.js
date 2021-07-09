import React, {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { fetchPostClick, fetchCategory} from '../../State/StateFunctions'


function ReadArticle({title, oneLiner, categoryname, id, language, articleText, clicks, likes, comments}) {

    const history = useHistory()

    const type = 'read';

    const redirectToArticle = () => {
        fetchPostClick(type, id, {})
        history.push(`/article/${type}/${id}/read/0`)
    }
    const [hover, setHover] = useState(0)
    const [category, setCategory] = useState({})

    useEffect(() => {
        fetchCategory(setCategory, categoryname)

    }, [categoryname])

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
                src={`${process.env.REACT_APP_SERVER_DOMAIN}/categoryImages/${category.imagefile}`} 
                className='articleImage' 
            />

            <div className="categoryImageFont articleCategory">{categoryname}</div>

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
