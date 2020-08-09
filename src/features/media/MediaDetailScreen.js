import React from "react";
import { useSelector, useDispatch } from "react-redux";

import MiniDrawer from "../home/Drawer"; //TODO: make this global
import CssBaseline from "@material-ui/core/CssBaseline";
import MediaDetail from "./MediaDetail";

import { useParams } from "react-router-dom";
import { selectMedia, fetchMedia } from "./mediaSlice";

const MediaDetailScreen = () => {
  let { mediaId } = useParams();
  const dispatch = useDispatch();
  let media = useSelector((state) => selectMedia(state, parseInt(mediaId)));
  if (!media) {
    dispatch(fetchMedia(mediaId));
  }
  return (
    <>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <MediaDetail media={media}></MediaDetail>
    </>
  );
};

export default MediaDetailScreen;
