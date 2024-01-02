import React, { Component, useState, useEffect } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@mui/material/Button";

const Upload2 = () => {
  const [uploads, setUploads] = useState([]);

  const handleChange = (files) => {
    console.log(files);
    setUploads({ files: files });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Upload NDR Listing</h2>
      <DropzoneArea
        onChange={handleChange}
        dropzoneText={"Drag and drop xlsx or csv of NDR list"}
      />
      <br />
      <Button type="submit" variant="contained">
        Upload
      </Button>
    </div>
  );
};

export default Upload2;
