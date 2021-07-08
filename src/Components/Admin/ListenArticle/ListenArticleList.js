import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

function ListenArticleList(props) {
    return (
        <List {...props} >
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <TextField source='oneliner' />
                <TextField source='category' />
                <TextField source='language' />
                <TextField source='created_by' />
                <TextField source='text' />
                <TextField source='audiofile' />
                <DateField source='dateadded' />
                <EditButton basePath='/listenArticles' />
                <DeleteButton basePath='/listenArticles' />
            </Datagrid>
        </List>
    )
}

export default ListenArticleList
