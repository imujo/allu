import React from "react";
import FileUpload from "./FileUpload";

const UploadList = () => {
  return (
    <div className="uploadListDiv">
      <FileUpload type="listenArticle" />
      <FileUpload type="categories/icons" />
      <FileUpload type="categories/images" />
      <FileUpload type="languages" />
    </div>
  );
};

export default UploadList;
