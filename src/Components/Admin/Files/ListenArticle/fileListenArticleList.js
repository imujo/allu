import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

import { PostPagination } from "../AdminFunctions";

function fileListenArticleList(props) {
  return (
    <List {...props} pagination={<PostPagination />}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="size" />
        <EditButton basePath="/fileListenArticle" />
        <DeleteButton basePath="/fileListenArticle" />
      </Datagrid>
    </List>
  );
}

export default fileListenArticleList;
