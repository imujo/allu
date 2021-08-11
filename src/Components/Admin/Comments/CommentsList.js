import React from "react";
import { List, Datagrid, TextField, DeleteButton } from "react-admin";

import { PostPagination } from "../AdminFunctions";

function CommentsList(props) {
  return (
    <List {...props}>
      <Datagrid pagination={<PostPagination />}>
        <TextField source="id" />
        <TextField source="text" />
        <TextField source="articleid" />
        <TextField source="username" />
        <DeleteButton basePath="/comments" />
      </Datagrid>
    </List>
  );
}

export default CommentsList;
