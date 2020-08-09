import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    marginLeft: 65,
    marginRight: 10,
  },
  media: {
    maxWidth: 500,
    maxHeight: 800,
  },
});

const MediaDetail = (props) => {
  const classes = useStyles();
  const { media } = props;

  return media ? (
    <Card className={classes.root} justify="space-around">
      <CardMedia
        className={classes.media}
        component="img"
        src={`http://image.tmdb.org/t/p/w500/${media.poster_path}`}
        title={media.title}
      />
      <CardContent>
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
          size="large"
          color="primary"
        >
          Add to cart
          <ShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  ) : (
    <div></div>
  );
};

export default MediaDetail;
