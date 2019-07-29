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
      pageCount: 32
    },
    {
      id: 2,
      writer: { name: "Bernd", role: "writer" },
      prices: 3.99,
      title: "Superman",
      coverPath: "cover.png",
      pageCount: 32
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
