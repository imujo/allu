import React from 'react'
import FileUpload from './FileUpload'
import { Paper } from '@material-ui/core';


const UploadList = (props) => {
    return (
        <div className='uploadListDiv'>
            <FileUpload type='listenArticle' />
            <FileUpload type='categories/icons' />
            <FileUpload type='categories/images' />
            <FileUpload type='languages' />
        </div>

    )
}

export default UploadList
