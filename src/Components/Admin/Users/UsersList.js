import React from 'react'
import { List, Datagrid, TextField, DeleteButton, DateField, EditButton, BooleanField, Filter, TextInput } from 'react-admin'

const UsersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by username" source="username" alwaysOn />
        <TextInput label="Admin" source="title" defaultValue="Hello, World!" />
    </Filter>
);



function UsersList(props) {
    return (
        <List {...props} filters={<UsersFilter />} perPage={5} >
            <Datagrid  >
                <TextField source='id' />
                <TextField source='email' />
                <TextField source='username' />
                <BooleanField source='admin' />
                <DateField source='joined' />
                <DeleteButton basePath='/users' />
                <EditButton basePath='/users' />
            </Datagrid>
        </List>
    )
}

export default UsersList
