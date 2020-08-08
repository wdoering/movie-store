import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectLoading } from "./loadingSlicer";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 2,
    color: "#fff",
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const isOpen = useSelector(selectLoading);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={isOpen}>
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  );
}
