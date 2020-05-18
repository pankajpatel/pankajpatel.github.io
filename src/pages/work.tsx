import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { HCenteredSection } from "../styled/HCenteredSection";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Work } from "../types";

const ImageContainer = styled.div`
  margin-right: 0.5rem;
  & img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;
const Description = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  margin: 0 !important;
  background: rgba(50, 50, 50, 0.95);
  transition: all ease 200ms;
  opacity: 0;
}
`;
const WorkContainer = styled.article`
  padding: 0 0.5rem;
  margin: 1rem -0.5rem;
  border: 1px solid rgba(100, 100, 100, 0.7);
  border-radius: 0.25rem;
  display: flex;
  position: relative;
  overflow: hidden;

  & > * {
    flex: 1 auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  ${ImageContainer} {
    min-width: 80px;
    max-width: 80px;
  }

  &:hover {
    & ${Description} {
      top: 0%;
      opacity: 1;
    }
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
        <h2>Work</h2>
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
