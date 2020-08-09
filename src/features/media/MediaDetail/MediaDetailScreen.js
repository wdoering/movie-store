import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import MiniDrawer from "../../home/Drawer"; //TODO: make this global
import CssBaseline from "@material-ui/core/CssBaseline";
import MediaDetail from "./MediaDetail";

import { useParams } from "react-router-dom";
import { selectMedia, fetchMedia } from "../mediaSlice";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));
const MediaDetailScreen = () => {
  const classes = useStyles();

  let { mediaId } = useParams();
  const dispatch = useDispatch();
  let media = useSelector((state) => selectMedia(state, parseInt(mediaId)));
  if (!media) {
    dispatch(fetchMedia(mediaId));
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <MediaDetail media={media}></MediaDetail>
    </div>
  );
};

export default MediaDetailScreen;
