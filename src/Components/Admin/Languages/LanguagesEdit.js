import React, { useEffect, useState } from "react";
import {
  Edit,
  SimpleForm,
  SelectInput,
  TextInput,
  required,
  maxLength,
  TextField,
} from "react-admin";
import { getDirItems, getNumberOfLanguages } from "../AdminFunctions";

const LanguagesEdit = (props) => {
  const [dirItems, setDirItems] = useState([]);
  const [numberOfLanguages, setNumberOfLanguages] = useState(0);

  useEffect(() => {
    getDirItems(setDirItems, "flags");
    getNumberOfLanguages(setNumberOfLanguages);
    console.log(numberOfLanguages);
  }, []);

  return (
    <Edit title="Edit Language" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextField label={`1 to ${numberOfLanguages}`} />
        <TextInput source="order_number" />
        <TextInput source="language" validate={[required(), maxLength(30)]} />
        <TextInput source="imageurl" validate={[required(), maxLength(300)]} />
        <SelectInput
          source="flagfile"
          choices={dirItems}
          validate={[required(), maxLength(50)]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default LanguagesEdit;
