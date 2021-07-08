import React, { useState } from 'react'
import axios from 'axios'
import { Button, Card } from '@material-ui/core';


const FileUpload = ({type}) => {

    const [file, setFile] = useState('')
    const [uploadedFile, setUploadedFile] = useState({})


    const onChange = (e) => {
        setFile(e.target.files[0])
    }
    
    const onSubmit = async () => {

        if (file===''){
            return console.log('No asset chosen')
        }
        console.log('Submit')

        const formData = new FormData();
        formData.append('file', file)

        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/${type}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            const {fileName, filePath} = res.data
            setUploadedFile({ fileName, filePath})

            console.log(uploadedFile)
        } catch (err) {
            console.log('Error')
            console.log(err.response.data.msg)
        }
    }
    

    return (
        <Card variant="outlined" className='cardDiv' >
            <form className='fileUploadForm' >
                <h6>{type}</h6>
                <input type="file" className='chooseFile' id='customFile' onChange={onChange} />
                <div className='buttonDiv'>
                    <Button variant="contained" onClick={onSubmit} >Upload</Button>
                </div>
    
            </form>
        </Card>
        
    )
}

export default FileUpload
