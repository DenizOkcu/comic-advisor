import React from "react";
import { shallow } from "enzyme";
import ComicDetailsCharacters from "./ComicDetailsCharacters";

describe("ComicDetailsCharacters", () => {
  it('should render correctly in "debug" mode', () => {
    const characters = [{ id: 0, name: "IronMan" }, { id: 1, name: "Hulk" }];
    const component = shallow(
      <ComicDetailsCharacters characters={characters} debug />
    );

    expect(component).toMatchSnapshot();
  });
});
