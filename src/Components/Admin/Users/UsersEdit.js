import React from 'react'
import { Edit, SimpleForm, TextInput, BooleanInput, required, maxLength } from 'react-admin'



const UsersEdit = (props) => {

    return (
        <Edit title='Edit User' {...props} >
            <SimpleForm>
                <TextInput source='id' disabled/>
                <TextInput type='email' source='email' validate={[required(), maxLength(50)]} />
                <TextInput source='username' validate={[required(), maxLength(50)]} />
                <BooleanInput source='admin' />
            </SimpleForm>
        </Edit>
    )
}

export default UsersEdit


