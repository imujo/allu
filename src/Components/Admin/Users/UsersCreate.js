import React from 'react'
import { Create, SimpleForm, TextInput, BooleanInput } from 'react-admin'



const UsersEdit = (props) => {

    return (
        <Create title='Create a User' {...props} >
            <SimpleForm>
                <TextInput source='id' disabled/>
                <TextInput source='email' />
                <TextInput source='username' />
                <TextInput source='password' />
                <BooleanInput source='admin' />
            </SimpleForm>
        </Create>
    )
}

export default UsersEdit


