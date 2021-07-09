import React, { useContext, useEffect, useState } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  required,
  maxLength,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { BackendContext } from "../../../State/BackendState";
import { getCategoriesAndLanguages } from "../AdminFunctions";

const ReadArticleEdit = (props) => {
  const { userGlobal } = useContext(BackendContext);
  const [user] = userGlobal;

  const [categories, setCategories] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    getCategoriesAndLanguages(setCategories, setLanguages);
  }, []);

  return (
    <Edit title="Edit Read Article" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="title" validate={[required(), maxLength(20)]} />
        <TextInput source="oneliner" validate={[required(), maxLength(30)]} />
        <SelectInput
          source="category"
          choices={categories}
          validate={[required()]}
        />
        <SelectInput
          source="language"
          choices={languages}
          validate={[required()]}
        />
        <RichTextInput multiline source="text" validate={[required()]} />
        <TextInput source="created_by" defaultValue={user.username} disabled />
        <DateInput
          label="Published"
          source="dateadded"
          defaultValue={new Date()}
          disabled
        />
      </SimpleForm>
    </Edit>
  );
};

export default ReadArticleEdit;
