import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "./MediaCard";
import { useSelector } from "react-redux";
import { selectMediaList } from "../mediaSlice";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
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
}));

const MediaList = (props) => {
  const classes = useStyles();
  const mediaList = useSelector(selectMediaList); // consider moving up

  const onScrollEnd = () => {
    props.getMoreMedia(props.pageNumber);
  };

  useBottomScrollListener(onScrollEnd);
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <GridList
        cellHeight={160}
        className={classes.gridList}
        spacing={10}
        cols={3}
      >
        {mediaList.map((media, idx) => (
          <MediaCard media={media} key={idx}></MediaCard>
        ))}
      </GridList>
    </main>
  );
};

export default MediaList;
