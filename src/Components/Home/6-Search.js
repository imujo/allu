import React, { useContext } from 'react'
import {BackendContext} from '../../State/BackendState'

function Search() {

    const {searchGlobal} = useContext(BackendContext)
    const [, setsearch] = searchGlobal;
    

    return (
        <div className='searchDiv'>
            <input type="text" className="searchFont" placeholder='Search' onChange={e => setsearch(e.target.value)} ></input>
            <div className="searchIcon"></div>
        </div>
    )
}

export default Search
