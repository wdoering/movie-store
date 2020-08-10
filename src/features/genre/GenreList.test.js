import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import GenreList from "./GenreList";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

const store = mockStore({
  genre: {
    selectedGenre: {},
    list: [{ id: 1, name: "Action" }],
  },
});
describe("testing store mock", () => {
  test("renders the card with a text sent by prop", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <GenreList />
        </Router>
      </Provider>
    );

    expect(getByText("Action")).toBeInTheDocument();
  });
});
