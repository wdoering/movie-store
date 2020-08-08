import React from "react";
import HomeScreen from "./features/home/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DrawerContainer from "./features/home/DrawerContainer";
import { Counter } from "./features/counter/Counter";
import { GENRE, HOME } from "./Constants";
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={`/${HOME}`}>
            <HomeScreen></HomeScreen>
          </Route>
          <Route path={`/${GENRE}`}>
            <DrawerContainer></DrawerContainer>
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/">
            <HomeScreen></HomeScreen>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
