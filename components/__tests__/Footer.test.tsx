import React from "react";
import renderer from "react-test-renderer";

const Empty = () => <div />;

jest.mock("../../images/svg/github.svg", () => Empty);
jest.mock("../../images/svg/linkedin.svg", () => Empty);
jest.mock("../../images/svg/twitter.svg", () => Empty);
jest.mock("../../images/svg/instagram.svg", () => Empty);

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

import Footer from "../Footer";
describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
