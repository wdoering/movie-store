import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MiniDrawer from "../home/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartList from "./ShoppingCartList";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));
const ShoppingCartScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <ShoppingCartList></ShoppingCartList>
    </div>
  );
};

export default ShoppingCartScreen;
