import React from "react";
import { Create } from "react-admin";
import FileUpload from "../../FileUpload";

const fileListenArticleCreate = (props) => {
  return (
    <Create title="Add a listenArticleFile" {...props}>
      <FileUpload type="listenArticle" />
    </Create>
  );
};

export default fileListenArticleCreate;
