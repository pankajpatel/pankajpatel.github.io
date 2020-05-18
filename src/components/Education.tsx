import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { Education } from "../types";

const ImageContainer = styled.div`
  & img {
    width: 100%;
    geight: auto;
    border-radius: 4px;
  }
`;
const Description = styled.p`
  max-width: 400px;
`;
const FlexContainer = styled.article`
  display: flex;
  padding: 0 1rem;
  margin: 1rem -0.5rem;

  & > * {
    flex: 1 auto;
    margin: 0.5rem;
  }

  ${ImageContainer} {
    min-width: 100px;
    max-width: 100px;
  }
`;

const EducationPage = () => {
  const {
    allEducationJson: { nodes: educations },
    educationImage,
  } = useStaticQuery(
    graphql`
      query {
        allEducationJson {
          nodes {
            year {
              from(formatString: "MMM, Y")
              to(formatString: "MMM, Y")
            }
            title
            location
            description
            course
          }
        }
        educationImage: file(relativePath: { eq: "education-image.png" }) {
          childImageSharp {
            fluid(maxWidth: 120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <>
      <section>
        <h2>Education</h2>
        {educations.map((edu: Education, index: number) => (
          <FlexContainer key={index}>
            <ImageContainer>
              <Img fluid={educationImage.childImageSharp.fluid} />
            </ImageContainer>
            <div className="info">
              <header>
                <h3>{edu.title}</h3>
                <h4>{edu.course}</h4>
                <h5>{edu.location}</h5>
                <strong>
                  {edu.year.from} - {edu.year.to}
                </strong>
              </header>
              {edu.description && <Description>{edu.description}</Description>}
            </div>
          </FlexContainer>
        ))}
      </section>
    </>
  );
};
export default EducationPage;
