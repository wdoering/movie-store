import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { GridList } from "@material-ui/core";
import GenreCard from "./GenreCard";
import { selectGenres } from "./genreSlice";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function GenreList() {
  const genres = useSelector(selectGenres);

  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <GridList
        cellHeight={160}
        className={classes.gridList}
        spacing={10}
        cols={3} // this did not work, I had to add margin to the card component
      >
        {genres.map((genre) => (
          <GenreCard name={genre.name} id={genre.id} key={genre.id}></GenreCard>
        ))}
      </GridList>
    </main>
  );
}
