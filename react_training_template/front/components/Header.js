import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6">한양풍동실험연구소</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
