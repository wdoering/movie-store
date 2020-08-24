import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MediaList from "./MediaList";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

const store = mockStore({
  media: {
    selectedMedia: null,
    list: [
      {
        id: 1,
        vote_average: 9.5,
        title: "Lion King",
        overview: "Simba wins",
        poster_path: "12sahd.jpg",
        release_date: "2020-01-30",
      },
    ],
    pageNumber: 1,
  },
});
describe("testing store mock", () => {
  test("renders the card with a text sent by prop", () => {
    const getMoreMedia = jest.fn();
    const { getByRole } = render(
      <Provider store={store}>
        <Router>
          <MediaList pageNumber={1} getMoreMedia={getMoreMedia} />
        </Router>
      </Provider>
    );
    expect(getByRole("button")).toBeInTheDocument();
  });
});
