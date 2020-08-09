import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { setGenreId } from "./genreSlice";
import { fetchMediaList } from "../media/mediaSlice";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 250,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

const GenreCard = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const selectGenreAndLoadMovies = () => {
    dispatch(setGenreId(props.id));
    dispatch(fetchMediaList(props.id));
  };
  return (
    <Link underline="none" component={RouterLink} to={`/media/${props.name}`}>
      <Card className={classes.root} onClick={selectGenreAndLoadMovies}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
GenreCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default GenreCard;
