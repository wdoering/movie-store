import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MediaCard from "./MediaCard";

test("renders the media with a title, overview, and button", () => {
  const props = {
    media: {
      id: 1,
      title: "The Lion King",
      vote_average: 9.5,
      overview: "Simba wins in the end",
      poster_path: "12sahd.jpg",
      release_date: "2020-01-30",
    },
  };

  const { getByText, getByTestId } = render(
    <Router>
      <MediaCard media={props.media} />
    </Router>
  );

  expect(getByText("The Lion King")).toBeInTheDocument();
  expect(getByText("Simba wins in the end")).toBeInTheDocument();
  expect(getByTestId("mediaClickableArea")).toBeInTheDocument();
});
