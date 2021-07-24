import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const fileLIstenArticleEdit = (props) => {
  return (
    <Edit title="Edit listenArticleFile" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="size" disabled />
      </SimpleForm>
    </Edit>
  );
};

export default fileLIstenArticleEdit;
