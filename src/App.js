import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GenreScreen from "./features/genre/GenreScreen";
import MediaScreen from "./features/media/MediaList/MediaScreen";
import MediaDetailScreen from "./features/media/MediaDetail/MediaDetailScreen";

import { Counter } from "./features/counter/Counter";
import { MEDIA, MEDIA_DETAIL, GENRE } from "./Constants";

import CircularLoading from "./features/loading/CircularLoading";
const App = () => {
  return (
    <>
      <CircularLoading></CircularLoading>
      <Router>
        <div>
          <Switch>
            <Route path={`/${MEDIA_DETAIL}/:mediaId`}>
              <MediaDetailScreen></MediaDetailScreen>
            </Route>
            <Route path={`/${MEDIA}/:genre`}>
              <MediaScreen></MediaScreen>
            </Route>
            <Route path={`/${GENRE}`}>
              <GenreScreen></GenreScreen>
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/">
              <GenreScreen></GenreScreen>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
