import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartItem from "./ShoppingCartItem";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// import { selectShoppingCartList } from "../mediaSlice";
import { GridList } from "@material-ui/core";

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
  //   const shoppingCartList = useSelector(selectShoppingCartList); // consider moving up
  const shoppingCartList = [{}, {}];

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <GridList
        cellHeight={160}
        className={classes.gridList}
        spacing={10}
        cols={1}
      >
        {shoppingCartList.map((item, idx) => (
          //   <ShoppingCartItem media={media} key={idx}></ShoppingCartItem>
          <ShoppingCartItem item={item} key={idx}></ShoppingCartItem>
        ))}
      </GridList>
    </main>
  );
};

ShoppingCartList.propTypes = {
  getMoreMedia: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default ShoppingCartList;
