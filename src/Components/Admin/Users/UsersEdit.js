import React from 'react'
import { Edit, SimpleForm, TextInput, BooleanInput } from 'react-admin'



const UsersEdit = (props) => {

    return (
        <Edit title='Edit User' {...props} >
            <SimpleForm>
                <TextInput source='id' disabled/>
                <TextInput source='email' />
                <TextInput source='username' />
                <BooleanInput source='admin' />
            </SimpleForm>
        </Edit>
    )
}

export default UsersEdit


