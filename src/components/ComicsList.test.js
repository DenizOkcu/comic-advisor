import React from "react";
import { shallow } from "enzyme";
import ComicsList from "./ComicsList";

describe("ComicsList", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ComicsList debug />);

    expect(component).toMatchSnapshot();
  });
});
