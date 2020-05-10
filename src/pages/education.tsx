import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import educationImg from "../images/education-image.png";
import educations from "../data/education/all.json";
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

const IndexPage = () => (
  <Layout>
    <SEO title="Education" />
    <section>
      <h2 className="major">Education</h2>
      {educations.map((edu: Education, index: number) => (
        <FlexContainer key={index}>
          <ImageContainer>
            <img src={educationImg} alt="Education" />
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
  </Layout>
);

export default IndexPage;
