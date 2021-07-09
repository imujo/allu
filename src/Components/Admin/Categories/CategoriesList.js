import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

function CategoriesList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="category" />
        <TextField source="imagefile" />
        <TextField source="iconfile" />
        <EditButton basePath="/categories" />
        <DeleteButton basePath="/categories" />
      </Datagrid>
    </List>
  );
}

export default CategoriesList;
