import React from "react";
import { Edit, SimpleForm, TextInput, required, minLength } from "react-admin";
import RichTextInput from "ra-input-rich-text";

const MiscEdit = (props) => {
  return (
    <Edit title="Edit Listen Article" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" disabled />
        <RichTextInput source="value" validate={[required(), minLength(30)]} />
      </SimpleForm>
    </Edit>
  );
};

export default MiscEdit;
