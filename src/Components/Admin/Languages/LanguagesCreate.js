import React, { useEffect, useState } from 'react'
import { Create, SimpleForm, TextInput, SelectInput, required, maxLength } from 'react-admin'
import { getDirItems } from '../AdminFunctions'



const LanguagesCreate = (props) => {

    const [dirItems, setDirItems] = useState([])

    useEffect(() => {
        getDirItems(setDirItems, 'flags')

    }, [])

    
    return (
        <Create title='Add a Language' {...props} >
            <SimpleForm>
                <TextInput source='id' disabled />
                <TextInput source='language' validate={[required(), maxLength(30)]} />
                <TextInput source='imageurl' validate={[required(), maxLength(300)]} />
                <SelectInput source='flagfile' choices={dirItems} validate={[required(), maxLength(50)]} />
            </SimpleForm>
        </Create>
    )
}

export default LanguagesCreate


