import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
  const classes = useStyles();

  return (
    <Link underline="none" component={RouterLink} to={`/media/${props.name}`}>
      <Card className={classes.root}>
        <CardActionArea>
          {/* <CardMedia
          className={classes.media}
          component="img"
          src={props.photoURL}
          title="Contemplative Reptile"
        /> */}

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
