import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

import { PostPagination } from "../AdminFunctions";

function MiscList(props) {
  return (
    <List {...props} pagination={<PostPagination />}>
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
