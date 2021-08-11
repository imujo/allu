import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

import { PostPagination } from "../AdminFunctions";

function LanguagesList(props) {
  return (
    <List {...props} pagination={<PostPagination />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="order_number" />
        <TextField source="language" />
        <TextField source="imageurl" />
        <TextField source="flagfile" />
        <EditButton basePath="/languages" />
        <DeleteButton basePath="/languages" />
      </Datagrid>
    </List>
  );
}

export default LanguagesList;
