import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartItem from "./ShoppingCartItem";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectShoppingCartList } from "./shoppingCartSlice";
import { GridList } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  gridList: {
    flexDirection: "column",
  },
}));

const ShoppingCartList = () => {
  const classes = useStyles();
  const shoppingCartList = useSelector(selectShoppingCartList);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <GridList
        cellHeight={160}
        className={classes.gridList}
        spacing={10}
        cols={1}
      >
        {shoppingCartList.length > 0 ? (
          shoppingCartList.map((media) => (
            <ShoppingCartItem media={media} key={media.id}></ShoppingCartItem>
          ))
        ) : (
          <Typography gutterBottom variant="h5" component="h2">
            No items in your cart :(
          </Typography>
        )}
      </GridList>
    </main>
  );
};

ShoppingCartList.propTypes = {
  getMoreMedia: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default ShoppingCartList;
