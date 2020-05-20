import React from "react";
import renderer from "react-test-renderer";

jest.mock("gatsby", () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn(() => ({
    site: {
      siteMetadata: {
        title: "Hello World",
        subTitle: "Welcome to the Homepage",
      },
    },
    profileImg: {
      childImageSharp: {
        fluid: {
          src: "https://example.com/pankaj.jpg",
        },
      },
    },
    bgImg: {
      childImageSharp: {
        fluid: {
          src: "https://example.com/homepage-bg.jpg",
        },
      },
    },
  })),
}));

import Header from "../Header";
describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header loading={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with children", () => {
    const tree = renderer
      .create(<Header loading={false}>Children Tag</Header>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
