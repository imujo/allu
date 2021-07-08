import React, { useEffect, useState } from 'react'
import { Edit, SimpleForm, SelectInput, TextInput, TextField, required, maxLength } from 'react-admin'
import { getDirItems } from '../AdminFunctions'


const LanguagesEdit = (props) => {

    const [dirItems, setDirItems] = useState([])


    useEffect(() => {
        getDirItems(setDirItems, 'flags')

    }, [])

    return (
        <Edit title='Edit Language' {...props} >
            <SimpleForm>
                <TextInput source='id' disabled />
                <TextInput source='language' validate={[required(), maxLength(30)]} />
                <TextInput source='imageurl' validate={[required(), maxLength(300)]} />
                <TextField label='Flag file name (without extension) MUST be the same as language name' />
                <SelectInput source='flagfile' choices={dirItems} validate={[required(), maxLength(50)]} />
            </SimpleForm>
        </Edit>
    )
}

export default LanguagesEdit


