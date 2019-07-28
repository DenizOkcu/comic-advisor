import React from "react";
import { shallow } from "enzyme";
import ComicsDetails from "./ComicsDetails";

describe("ComicsDetails", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ComicsDetails debug />);

    expect(component).toMatchSnapshot();
  });
});
