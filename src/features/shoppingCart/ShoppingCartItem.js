import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 5,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  poster: {
    minWidth: 150,
    height: 220,
    maxWidth: 180,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ShoppingCartItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardMedia
          className={classes.poster}
          component="img"
          src="http://image.tmdb.org/t/p/w500//wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
          title="Live from space album cover"
        />
        <div className={classes.controls}>
          {/* <Typography component="h5" variant="h5">
            $ 1.99
          </Typography>
          <IconButton>
            <DeleteIcon></DeleteIcon>
          </IconButton> */}
          <Button
            data-testid="addToCartButton"
            variant="outlined"
            size="large"
            color="primary"
          >
            Delete
            <DeleteIcon />
          </Button>
          {/* <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton> */}
        </div>
      </div>

      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          Extraction
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          2020
        </Typography>
        <Typography component="h5" variant="h5">
          $ 1.99
        </Typography>
        {/* <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
        <Button
          data-testid="addToCartButton"
          variant="outlined"
          size="large"
          color="primary"
        >
          Delete
          <DeleteIcon />
        </Button> */}
      </CardContent>
    </Card>
  );
}
