import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

function MiscList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="value" />
        <EditButton basePath="/misc" />
      </Datagrid>
    </List>
  );
}

export default MiscList;
