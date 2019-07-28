import React from "react";
import { shallow } from "enzyme";
import ComicsList from "./ComicsList";

describe("ComicsList", () => {
  it('should render correctly in "debug" mode', () => {
    const comics = [
      {
        id: 1,
        creators: [{ name: "writer name" }],
        thumbnail: { path: "test", extension: "jpg" },
        prices: [{ price: 3.99 }],
        title: "title",
        pageCount: 32
      }
    ];
    const component = shallow(<ComicsList comics={comics} debug />);

    expect(component).toMatchSnapshot();
  });
});
