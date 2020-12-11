import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Work } from "../types";
import {
  PageSection,
  PageTitle,
  Articles,
  ImageContainer,
  Description,
  Article,
} from "../styled";

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
    <PageSection>
      <PageTitle>Work</PageTitle>
      <Articles>
        {workData.map((work: Work) => {
          const img = require(`../images/${work.img}`);
          return (
            <Article key={work.company}>
              <ImageContainer>
                <img src={img} alt={work.company} />
              </ImageContainer>
              <header>
                <h2>{work.positions[0].position}</h2>
                <h3>{work.company}</h3>
                <strong>
                  {work.duration.from}
                  {" - "}
                  {work.duration.from === work.duration.to
                    ? "Current"
                    : work.duration.to}
                </strong>
              </header>
              <Description>
                <span>{work.description}</span>
              </Description>
            </Article>
          );
        })}
      </Articles>
    </PageSection>
  );
};
export default WorkPage;
