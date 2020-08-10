import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import GenreCard from "./GenreCard";
import { Provider } from "react-redux";
import store from "../../app/store";

test("renders the card with a text sent by prop", () => {
  const props = {
    id: 1,
    name: "Action",
  };

  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <GenreCard id={props.id} name={props.name} />
      </Router>
    </Provider>
  );

  expect(getByText("Action")).toBeInTheDocument();
});
