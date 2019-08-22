import React from "react";
import { shallow } from "enzyme";
import ComicsDetails from "./ComicsDetails";

let comic;
let clickToCloseDetails;

beforeEach(() => {
  comic = {
    id: 1,
    writer: { name: "Bernd", role: "writer" },
    prices: [{ price: 3.99 }],
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
  };
  clickToCloseDetails = jest.fn();
});

describe("ComicsDetails", () => {
  it("should render hidden on mobile", () => {
    const component = shallow(
      <ComicsDetails
        comic={comic}
        detailsHiddenOnMobile={true}
        clickToCloseDetails={clickToCloseDetails}
        debug={jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });
});

describe("ComicsDetails", () => {
  it("should not render hidden on mobile", () => {
    const component = shallow(
      <ComicsDetails
        comic={comic}
        detailsHiddenOnMobile={false}
        clickToCloseDetails={clickToCloseDetails}
        debug={jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });
});

describe("ComicsDetails", () => {
  it("should call mobile detail close function", () => {
    const component = shallow(
      <ComicsDetails
        comic={comic}
        detailsHiddenOnMobile={false}
        clickToCloseDetails={clickToCloseDetails}
        debug={jest.fn()}
      />
    );

    expect(clickToCloseDetails.mock.calls.length).toEqual(0);
    component.find(".close-details").simulate("click");
    expect(clickToCloseDetails.mock.calls.length).toEqual(1);
  });
});
