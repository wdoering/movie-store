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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
});
/**
 * 
 * {
      "popularity": 166.471,
      "vote_count": 2859,
      "video": false,
      "poster_path": "/mb7wQv0adK3kjOUr9n93mANHhPJ.jpg",
      "id": 583083,
      "adult": false,
      "backdrop_path": "/wO5QSWZPBT71gMLvrRex0bVc0V9.jpg",
      "original_language": "en",
      "original_title": "The Kissing Booth 2",
      "genre_ids": [
        35,
        10749
      ],
      "title": "The Kissing Booth 2",
      "vote_average": 8.2,
      "overview": "With college decisions looming, Elle juggles her long-distance romance with Noah, changing relationship with bestie Lee and feelings for a new classmate.",
      "release_date": "2020-07-24"
    },
 */
const ProductCard = (props) => {
  const classes = useStyles();
  const { media } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={props.title}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {media.title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {media.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" color="primary">
          Add to card <ShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    pricePerGram: PropTypes.string.isRequired,
  }),
};
export default ProductCard;
