import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'



function ReadArticleList(props) {
    return (
        <List {...props} >
            <Datagrid  >
                <TextField source='id' />
                <TextField source='title' />
                <TextField source='oneliner' />
                <TextField source='category' />
                <TextField source='language' />
                <TextField source='created_by' />
                <DateField source='dateadded' />
                <EditButton basePath='/readArticles' />
                <DeleteButton basePath='/readArticles' />
            </Datagrid>
        </List>
    )
}

export default ReadArticleList
