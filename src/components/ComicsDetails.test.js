import React from "react";
import { shallow } from "enzyme";
import ComicsDetails from "./ComicsDetails";

describe("ComicsDetails", () => {
  it('should render correctly in "debug" mode', () => {
    const comic = {
      id: 1,
      creators: { items: [{ name: "writer name" }] },
      thumbnail: { path: "test", extension: "jpg" },
      prices: [{ price: 3.99 }],
      title: "title",
      pageCount: 32
    };
    const component = shallow(<ComicsDetails comic={comic} debug />);

    expect(component).toMatchSnapshot();
  });
});
