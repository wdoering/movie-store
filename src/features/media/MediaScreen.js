import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MiniDrawer from "../home/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import MediaList from "./MediaList";
import { fetchMediaList } from "./mediaSlice";
import { getGenreIdByName, setGenreId } from "../genre/genreSlice";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

const MediaHome = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let { genre } = useParams();
  const genreId = useSelector((state) => getGenreIdByName(state, genre));

  dispatch(setGenreId(genreId));
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
