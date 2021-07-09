import React from 'react'
import { List, Datagrid, TextField, DeleteButton, DateField, EditButton, BooleanField} from 'react-admin'




function UsersList(props) {
    return (
        <List {...props} >
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
