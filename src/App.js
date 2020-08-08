import React from "react";
import { default as GenreScreen } from "./features/home/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { default as MediaScreen } from "./features/media/MediaHome";
import { Counter } from "./features/counter/Counter";
import { MEDIA, GENRE, HOME } from "./Constants";
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={`/${MEDIA}/:genre`}>
            <MediaScreen></MediaScreen>
          </Route>
          <Route path={`/${HOME}`}>
            <GenreScreen></GenreScreen>
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
  );
};

export default App;
