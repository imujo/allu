import React, { useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  SelectInput,
  TextInput,
  required,
  maxLength,
} from "react-admin";
import { getDirItems } from "../AdminFunctions";

const CategoriesCreate = (props) => {
  const [imageFiles, setImageFiles] = useState([]);
  const [iconFiles, setIconFiles] = useState([]);

  useEffect(() => {
    getDirItems(setImageFiles, "categoryImages");
    getDirItems(setIconFiles, "categoryIcons");
  }, []);

  return (
    <Create title="Create a Category" {...props}>
      <SimpleForm>
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
    </Create>
  );
};

export default CategoriesCreate;
