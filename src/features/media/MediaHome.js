import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";

import MiniDrawer from "../home/Drawer"; //TODO: make this global
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MediaList from "../media/MediaList";
import { fetchMediaList } from "../media/mediaSlice";
import { getGenreId } from "../genre/genreSlice";
import { useParams } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

const MediaHome = () => {
  let { genre } = useParams();
  const genreId = useSelector((state) => getGenreId(state, genre));

  const dispatch = useDispatch();
  dispatch(fetchMediaList(genreId));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <MediaList></MediaList>
    </div>
  );
};
// MediaHome.propTypes = {
//   genre: PropTypes.string,
// };

export default MediaHome;
