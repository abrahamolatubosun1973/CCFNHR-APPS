import React, { Component, useState, useEffect } from "react";
import { DropzoneArea } from "material-ui-dropzone";

const Upload = () => {
  const [uploads, setUploads] = useState([]);

  const handleChange = (files) => {
    console.log(files);
    setUploads({ files: files });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Upload NMRS Listing</h2>
      <DropzoneArea onChange={handleChange} />
    </div>
  );
};

export default Upload;
