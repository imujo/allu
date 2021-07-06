import React, {useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { fetchPostClick, fetchUser} from '../../State/StateFunctions'
import { BackendContext } from '../../State/BackendState'


function ReadArticle({title, oneLiner, category, type, id, language, articleText, clicks, likes, comments}) {

    const history = useHistory()

    const {userGlobal} = useContext(BackendContext)
    const [user, setUser] = userGlobal

    const redirectToArticle = () => {
        fetchUser(setUser)
        fetchPostClick(type, id, {})
        history.push(`/article/${type}/${id}/0`)
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
                src={`${process.env.REACT_APP_SERVER_DOMAIN}/categoryImages/${category}.svg`} 
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
