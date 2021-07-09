import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

function LanguagesList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
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
