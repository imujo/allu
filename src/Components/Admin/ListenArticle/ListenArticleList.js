import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

import { PostPagination } from "../AdminFunctions";

function ListenArticleList(props) {
  return (
    <List {...props} pagination={<PostPagination />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="oneliner" />
        <TextField source="category" />
        <TextField source="language" />
        <TextField source="created_by" />
        <TextField source="audiofile" />
        <DateField source="dateadded" />
        <EditButton basePath="/listenArticles" />
        <DeleteButton basePath="/listenArticles" />
      </Datagrid>
    </List>
  );
}

export default ListenArticleList;
