import React from "react";
import renderer from "react-test-renderer";

jest.mock("../../svg/github.svg", () => () => <div />);
jest.mock("../../svg/linkedin.svg", () => () => <div />);
jest.mock("../../svg/twitter.svg", () => () => <div />);
jest.mock("../../svg/instagram.svg", () => () => <div />);

jest.mock("gatsby", () => ({
  graphql: jest.fn(),
  useStaticQuery: jest.fn(() => ({
    site: {
      siteMetadata: {
        socialLinks: {
          twitter: "https://twitter.com",
          instagram: "https://instagram.com",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
    },
  })),
}));

import Footer from "../footer";
describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
