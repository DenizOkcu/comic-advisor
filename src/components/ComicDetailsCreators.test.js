import React from "react";
import { shallow } from "enzyme";
import ComicDetailsCreators from "./ComicDetailsCreators";

describe("ComicDetailsCreators", () => {
  it('should render correctly in "debug" mode', () => {
    const creators = [{ id: 0, name: "writer name", role: "writer" }];
    const component = shallow(
      <ComicDetailsCreators creators={creators} debug />
    );

    expect(component).toMatchSnapshot();
  });
});
