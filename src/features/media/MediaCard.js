import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 380,
  },
});
const MediaCard = (props) => {
  const classes = useStyles();
  const { media } = props;

  return (
    <Card className={classes.root} justify="space-around">
      <CardActionArea data-testid="mediaClickableArea">
        <CardMedia
          className={classes.media}
          component="img"
          src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
          // src={`http://image.tmdb.org/t/p/w185/${media.backdrop_path}`}
          title={media.title}
        />
      </CardActionArea>
      <CardContent>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <Typography gutterBottom variant="h5" component="h2">
          {media.vote_average}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {media.title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {media.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          data-testid="addToCartButton"
          variant="outlined"
          size="small"
          color="primary"
        >
          Add to cart
          <ShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
MediaCard.propTypes = {
  media: PropTypes.shape({
    id: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    video: PropTypes.bool.isRequired,
    poster_path: PropTypes.string.isRequired,
    adult: PropTypes.bool.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    original_language: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired, //"YYYY-MM-DD"
  }),
};
export default MediaCard;
