import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 70,
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
          {`Grade: ${media.vote_average}`}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {media.title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {media.overview}
        </Typography>
        <Divider></Divider>
        {media.production_companies && (
          <Typography gutterBottom variant="h5" component="h2">
            Produced by
          </Typography>
        )}
        {media.production_companies &&
          media.production_companies.map((item) => (
            <Typography
              key={item.id}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.name}
            </Typography>
          ))}
        <Typography gutterBottom variant="h5" component="h2">
          {media.release_date && media.release_date.substring(0, 4)}
        </Typography>
        <Divider></Divider>
        <Typography gutterBottom variant="h5" component="h2">
          Genres
        </Typography>
        {media.genres &&
          media.genres.map((item) => (
            <Typography
              key={item.id}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.name}
            </Typography>
          ))}
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
    <div>Movie data not found</div>
  );
};

export default MediaDetail;
