import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GenreCard from "./GenreCard";

test("renders the card with a text sent by prop", () => {
  const props = {
    id: 1,
    name: "Action",
  };

  const { getByText } = render(
    <Router>
      <GenreCard id={props.id} name={props.name} />
    </Router>
  );

  expect(getByText("Action")).toBeInTheDocument();
});
