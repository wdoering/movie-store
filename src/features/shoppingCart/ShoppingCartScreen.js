import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import MiniDrawer from "../home/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartList from "./ShoppingCartList";
// import { useParams } from "react-router-dom";
// import { selectMedia, fetchMedia } from "../mediaSlice";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));
const ShoppingCartScreen = () => {
  const classes = useStyles();

  //   let { mediaId } = useParams();
  //   const dispatch = useDispatch();
  //   let media = useSelector((state) => selectMedia(state, parseInt(mediaId)));

  //   if (!media || media.genre_ids) {
  //     dispatch(fetchMedia(mediaId));
  //   }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <ShoppingCartList></ShoppingCartList>
    </div>
  );
};

export default ShoppingCartScreen;
