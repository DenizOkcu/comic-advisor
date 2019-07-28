import React from "react";
import { shallow } from "enzyme";
import ComicsListItem from "./ComicsListItem";

describe("ComicsListItem", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ComicsListItem debug />);

    expect(component).toMatchSnapshot();
  });
});
