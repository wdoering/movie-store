import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MiniDrawer from "../home/Drawer"; //TODO: make this global
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MediaList from "./MediaList";
import { fetchMediaList } from "./mediaSlice";
import { getGenreId } from "../genre/genreSlice";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

const MediaHome = () => {
  const classes = useStyles();
  let { genre } = useParams();
  const genreId = useSelector((state) => getGenreId(state, genre));

  const dispatch = useDispatch();
  dispatch(fetchMediaList(genreId));

  const getMoreMedia = (pageNumber) => {
    dispatch(fetchMediaList(genreId, pageNumber));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <MediaList getMoreMedia={getMoreMedia}></MediaList>
    </div>
  );
};

export default MediaHome;
