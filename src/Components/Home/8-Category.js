import React, { useContext, useEffect, useState } from 'react'
import {BackendContext} from '../../State/BackendState'

function Category({category}) {

    const {selectedCategoryGlobal} = useContext(BackendContext)
    const [selectedCategory, setselectedCategory] = selectedCategoryGlobal


    const [select, setselect] = useState('notselected')

    useEffect(() => {
        if (selectedCategory === category){
            setselect('selected')
        }else{
            setselect('notselected')
        }
    }, [selectedCategory, category])

    const onCategoryClick = () => {
        if (selectedCategory === category){
            setselectedCategory('')
        }else{
            setselectedCategory(category)
        }
    }
    
    

    return (
        <div className={`categoryDiv ${select}`} onClick={onCategoryClick} >
            <img className="categoryIcon" alt='icon' src={`${process.env.REACT_APP_SERVER_DOMAIN}/categoryIcons/${category}.svg`} />
            <div className="divider"></div>
            <div className="categoryFont">{category}</div>
        </div>
    )
}

export default Category
