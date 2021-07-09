import React, { useEffect, useState } from "react";
import {
  Edit,
  SimpleForm,
  SelectInput,
  TextInput,
  required,
  maxLength,
} from "react-admin";
import { getDirItems } from "../AdminFunctions";

const CategoriesEdit = (props) => {
  const [imageFiles, setImageFiles] = useState([]);
  const [iconFiles, setIconFiles] = useState([]);

  useEffect(() => {
    getDirItems(setImageFiles, "categoryImages");
    getDirItems(setIconFiles, "categoryIcons");
  }, []);

  return (
    <Edit title="Edit Category" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="category" validate={[required(), maxLength(30)]} />
        <SelectInput
          source="imagefile"
          choices={imageFiles}
          validate={[required(), maxLength(50)]}
        />
        <SelectInput
          source="iconfile"
          choices={iconFiles}
          validate={[required(), maxLength(50)]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default CategoriesEdit;
