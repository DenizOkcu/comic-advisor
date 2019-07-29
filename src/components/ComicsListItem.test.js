import React from "react";
import { shallow } from "enzyme";
import ComicsListItem from "./ComicsListItem";

let comic;
let selectComicMock;

beforeEach(() => {
  comic = {
    id: 1,
    writer: { name: "Bernd", role: "writer" },
    prices: 3.99,
    title: "Superman",
    coverPath: "cover.png",
    pageCount: 32
  };
  selectComicMock = jest.fn();
});

describe("ComicsListItem", () => {
  it("should render correctly a nonactive list item", () => {
    const component = shallow(
      <ComicsListItem
        comic={comic}
        active={false}
        selectComic={selectComicMock}
        debug
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("should render correctly an active list item", () => {
    const component = shallow(
      <ComicsListItem
        comic={comic}
        active={true}
        selectComic={selectComicMock}
        debug
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("should render correctly without writer", () => {
    comic.writer = null;
    const component = shallow(
      <ComicsListItem
        comic={comic}
        active={true}
        selectComic={selectComicMock}
        debug
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("should call the selectComic function on click", () => {
    const component = shallow(
      <ComicsListItem
        comic={comic}
        active={true}
        selectComic={selectComicMock}
        debug
      />
    );

    expect(selectComicMock.mock.calls.length).toEqual(0);
    component.find(".list-item").simulate("click");
    expect(selectComicMock.mock.calls.length).toEqual(1);
    expect(selectComicMock).toBeCalledWith(1);
  });
});
