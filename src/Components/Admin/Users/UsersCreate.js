import React from 'react'
import { Create, SimpleForm, TextInput, PasswordInput, BooleanInput, minLength, maxLength, required } from 'react-admin'



const UsersEdit = (props) => {

    return (
        <Create title='Create a User' {...props} >
            <SimpleForm>
                <TextInput source='email' validate={[required(), maxLength(50)]} />
                <TextInput source='username' validate={[required(), maxLength(50)]} />
                <PasswordInput source='password' validate={[required(), minLength(6)]} />
                <BooleanInput source='admin' />
            </SimpleForm>
        </Create>
    )
}

export default UsersEdit


