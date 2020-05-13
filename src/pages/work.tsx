import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { HCenteredSection } from "../styled/HCenteredSection";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Work } from "../types";

const ImageContainer = styled.div`
  & img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;
const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
const WorkContainer = styled.article`
  padding: 0 1rem;
  margin: 1rem -0.5rem;
  border: 1px solid rgba(100, 100, 100, 0.7);
  border-radius: 0.25rem;
  display: flex;
  position: relative;

  & > * {
    flex: 1 auto;
    margin: 0.5rem auto;
  }

  ${ImageContainer} {
    min-width: 100px;
    max-width: 100px;
  }
`;

const WorkPage = () => {
  const {
    allWorkJson: { nodes: workData },
  } = useStaticQuery(
    graphql`
      query {
        allWorkJson {
          nodes {
            img
            location
            company
            positions {
              from
              position
            }
            duration {
              from(formatString: "MMM, Y")
              to(formatString: "MMM, Y")
            }
            description
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="Work" />
      <HCenteredSection>
        <h2 className="major">Work</h2>
        {workData.map((work: Work) => {
          const img = require(`../images/${work.img}`);
          return (
            <WorkContainer key={work.company}>
              <ImageContainer>
                <img src={img} alt={work.company} />
              </ImageContainer>
              <header>
                <h2>{work.positions[0].position}</h2>
                <h3>{work.company}</h3>
                <strong>
                  {work.duration.from}
                  {" - "}
                  {work.duration.to}
                </strong>
              </header>
              <Description>{work.description}</Description>
            </WorkContainer>
          );
        })}
      </HCenteredSection>
    </Layout>
  );
};
export default WorkPage;
