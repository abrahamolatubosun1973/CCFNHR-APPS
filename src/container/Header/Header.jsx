import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Box, margin } from "@mui/system";

import Fileupload from "../../components/Fileupload";

import "./Header.css";

const Header = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={5} sx={{ margin: "50px", padding: "10px" }}>
        <Paper elevation={3} textAlign="center">
          <h3 style={{ textAlign: "center" }}>NDR Data Upload</h3>
          <hr />
          <TextField
            defaultValue="State Name"
            variant="outlined"
            size="small"
            sx={{ margin: "20px 10px 10px 200px" }}
          />
          <TextField
            defaultValue="Date"
            type="date"
            variant="outlined"
            size="small"
            sx={{ margin: "10px 10px 10px 200px" }}
          />
          <input type="file" style={{ display: "none" }} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={5} sx={{ margin: "50px", padding: "10px" }}>
        <Paper elevation={3} textAlign="center">
          <h3 style={{ textAlign: "center" }}>NMRS Data Upload</h3>

          <Fileupload />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Header;
