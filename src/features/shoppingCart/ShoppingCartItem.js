import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { removeItem } from "../shoppingCart/shoppingCartSlice";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const ShoppingCartItem = (props) => {
  const matches = useMediaQuery("(max-width:375px)");

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: matches ? "column" : "row",
      justifyContent: "space-between",
    },
    detailsRight: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: 5,
      minWidth: 180,
    },
    centralContent: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      justifyContent: "center",
      margin: 5,
    },
    poster: {
      width: 270,
      height: 380,
      margin: 5,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingBottom: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const { media } = props;

  console.log(matches);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.poster}
        component="img"
        src={`http://image.tmdb.org/t/p/w500//${media.poster_path}`}
        title="Live from space album cover"
      />
      <div className={classes.centralContent}>
        <Typography component="h5" variant="h5">
          {media.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {media.release_date.substring(0, 4)}
        </Typography>
      </div>
      <div className={classes.detailsRight}>
        <Button
          data-testid="addToCartButton"
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => dispatch(removeItem(media))}
        >
          Delete
          <DeleteIcon />
        </Button>
      </div>
    </Card>
  );
};
ShoppingCartItem.propTypes = {
  media: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};
export default ShoppingCartItem;
