import React from "react";
import { useDispatch } from "react-redux";

import MiniDrawer from "../home/Drawer"; //TODO: make this global
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import GenreList from "./GenreList";
import { fetchGenreList } from "./genreSlice";
import { clearMedia } from "../media/mediaSlice";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));
function GenreScreen() {
  const dispatch = useDispatch();
  dispatch(fetchGenreList());
  dispatch(clearMedia());
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <GenreList></GenreList>
    </div>
  );
}

export default GenreScreen;
