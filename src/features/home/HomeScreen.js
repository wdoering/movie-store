import React from "react";
import { useDispatch } from "react-redux";

import MiniDrawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import GenreList from "../genre/GenreList";
import { fetchGenreList } from "../media/genre/genreSlice";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

function HomeScreen() {
  console.log("vai renderizar a homeScreen");
  const dispatch = useDispatch();
  dispatch(fetchGenreList());

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <GenreList></GenreList>
    </div>
  );
}

export default HomeScreen;
