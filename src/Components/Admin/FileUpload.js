import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card } from '@material-ui/core';
import { Alert } from '@material-ui/lab';



const FileUpload = ({type}) => {

    const [file, setFile] = useState('')
    const [uploaded, setUploaded] = useState('')


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

            setUploaded(res.data)

        } catch (err) {
            console.log('Error')
            console.log(err.response.data.msg)
        }
    }
    
    useEffect(() => {
        if (uploaded !== {}){
            setTimeout(()=>setUploaded(''), 5000)
        }
    }, [uploaded])

    return (
        <Card variant="outlined" className='cardDiv' >
            <form className='fileUploadForm' >
                <h6>{type}</h6>
                <input type="file" className='chooseFile' id='customFile' onChange={onChange} />
                <div className='buttonDiv'>
                    <Button variant="contained" onClick={onSubmit} >Upload</Button>

                    {
                        typeof uploaded !== 'string' ?
                            
                            uploaded.status ? 
                                <Alert severity="success">Uploaded</Alert>
                                :
                                <Alert severity="error">Not Uploaded</Alert>
                            
                            :
                            <p></p>
                    }
                    
                </div>


    
            </form>
        </Card>
        
    )
}

export default FileUpload
