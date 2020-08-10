import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MiniDrawer from "../../home/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import MediaList from "../MediaList/MediaList";
import {
  fetchMediaList,
  selectPageNumber,
  setSelectedMedia,
} from "../mediaSlice";
import { getGenreIdByName } from "../../genre/genreSlice";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

const MediaScreen = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let { genre } = useParams();
  const genreId = useSelector((state) => getGenreIdByName(state, genre));
  const pgNumber = useSelector(selectPageNumber);
  dispatch(setSelectedMedia(null));
  const getMoreMedia = (pageNumber) => {
    dispatch(fetchMediaList(genreId, pageNumber));
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <MediaList pageNumber={pgNumber} getMoreMedia={getMoreMedia}></MediaList>
    </div>
  );
};

export default MediaScreen;
