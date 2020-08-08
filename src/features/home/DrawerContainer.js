import React from "react";
import MiniDrawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

function DrawerContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
    </div>
  );
}

export default DrawerContainer;
