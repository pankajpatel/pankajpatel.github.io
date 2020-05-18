import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { HCenteredSection } from "../styled/HCenteredSection";

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

  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  text-align: center;
}
`;
const WorkContainer = styled.article`
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  border: 1px solid rgba(100, 100, 100, 0.7);
  background: rgba(40, 40, 40);
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  & > * {
    flex: 1 auto;
    margin: 0.5rem auto;
    margin-bottom: 0.5rem;
  }

  ${ImageContainer} {
    min-width: 60px;
    max-width: 60px;
  }

  &:hover {
    & ${Description} {
      top: 0%;
      opacity: 1;
    }
  }
`;

const WorksContainer = styled.div`
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    border-left: 1px dashed #ccc;
    content: "";
    height: 100%;
    z-index: -1;
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
    <HCenteredSection>
      <h2>Work</h2>
      <WorksContainer>
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
              <Description>
                <span>{work.description}</span>
              </Description>
            </WorkContainer>
          );
        })}
      </WorksContainer>
    </HCenteredSection>
  );
};
export default WorkPage;
