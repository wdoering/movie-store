import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MediaCard from "./MediaCard";

test("renders the media with a title, overview, and button", () => {
  const props = {
    media: {
      title: "The Lion King",
      overview: "Simba wins in the end",
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
