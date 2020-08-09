import React from "react";
import { render } from "@testing-library/react";
import MediaDetail from "./MediaDetail";
describe("describe inner 1", () => {
  const media = {
    adult: false,
    backdrop_path: "/fydUcbkqLyESCFa9U5XKqi8dIVj.jpg",
    belongs_to_collection: {
      id: 386382,
      name: "Frozen Collection",
      poster_path: "/rpoXnE9UzCbjmINhxIi8bZF557B.jpg",
      backdrop_path: "/6QonAoIN0jhWZZWZGJswSxHzUnU.jpg",
    },
    budget: 150000000,
    genres: [
      { id: 16, name: "Animation" },
      { id: 12, name: "Adventure" },
      { id: 10751, name: "Family" },
    ],
    homepage: "http://movies.disney.com/frozen",
    id: 109445,
    imdb_id: "tt2294629",
    original_language: "en",
    original_title: "Frozen",
    overview: "Young princess Anna of Arendelle...",
    popularity: 38.974,
    poster_path: "/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    production_companies: [
      {
        id: 2,
        logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
        name: "Walt Disney Pictures",
        origin_country: "US",
      },
      {
        id: 6125,
        logo_path: "/tVPmo07IHhBs4HuilrcV0yujsZ9.png",
        name: "Walt Disney Animation Studios",
        origin_country: "US",
      },
    ],
    production_countries: [
      { iso_3166_1: "US", name: "United States of America" },
    ],
    release_date: "2013-11-27",
    revenue: 1274219009,
    runtime: 102,
    spoken_languages: [{ iso_639_1: "en", name: "English" }],
    status: "Released",
    tagline: "Only the act of true love will thaw a frozen heart.",
    title: "Frozen",
    video: false,
    vote_average: 7.3,
    vote_count: 12183,
  };

  test("renders data not found when no media is provided", () => {
    const { getByText } = render(<MediaDetail />);
    expect(getByText("Movie data not found")).toBeInTheDocument();
  });

  test("Should render the poster of the movie", () => {
    const { getByTitle } = render(<MediaDetail media={media} />);

    expect(getByTitle("Frozen")).toBeInTheDocument();
  });

  test("Should the movie's grade", () => {
    const { getByText } = render(<MediaDetail media={media} />);
    expect(getByText("Grade: 7.3")).toBeInTheDocument();
  });

  test("Should the movie's producers", () => {
    const { getByText } = render(<MediaDetail media={media} />);
    expect(getByText("Walt Disney Pictures")).toBeInTheDocument();
  });
  test("Should the movie's genres", () => {
    const { getByText } = render(<MediaDetail media={media} />);
    expect(getByText("Animation")).toBeInTheDocument();
  });

  test("Should the movie's overview", () => {
    const { getByText } = render(<MediaDetail media={media} />);
    expect(
      getByText("Young princess Anna of Arendelle...")
    ).toBeInTheDocument();
  });
});
