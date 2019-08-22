import React from "react";
import { shallow } from "enzyme";
import ComicsList from "./ComicsList";

let comics;
let selectComicMock;

beforeEach(() => {
  comics = [
    {
      id: 1,
      writer: { name: "Bernd", role: "writer" },
      prices: 3.99,
      title: "Superman",
      coverPath: "cover.png",
      pageCount: 32,
      characters: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009158",
          name: "Arcade",
          id: 0
        }
      ],
      creators: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4430",
          name: "Jeff Youngquist",
          role: "editor",
          id: 0
        }
      ]
    },
    {
      id: 2,
      writer: { name: "Bernd", role: "writer" },
      prices: 3.99,
      title: "Superman",
      coverPath: "cover.png",
      pageCount: 32,
      characters: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009158",
          name: "Arcade",
          id: 0
        }
      ],
      creators: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4430",
          name: "Jeff Youngquist",
          role: "editor",
          id: 0
        }
      ]
    }
  ];
  selectComicMock = jest.fn();
});

describe("ComicsList", () => {
  it("should render active item first", () => {
    const component = shallow(
      <ComicsList
        comics={comics}
        selectedComic={comics[0]}
        selectComic={jest.fn()}
        debug
      />
    );

    expect(component).toMatchSnapshot();
  });
});

describe("ComicsList", () => {
  it("should render active item second", () => {
    const component = shallow(
      <ComicsList
        comics={comics}
        selectedComic={comics[1]}
        selectComic={jest.fn()}
        debug
      />
    );

    expect(component).toMatchSnapshot();
  });
});
