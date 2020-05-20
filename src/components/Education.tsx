import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Education } from "../types";
import {
  Articles,
  PageTitle,
  PageSection,
  Description,
  Article,
} from "../styled";

const EducationPage = () => {
  const {
    allEducationJson: { nodes: educations },
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
      }
    `
  );
  return (
    <PageSection>
      <PageTitle>Education</PageTitle>
      <Articles>
        {educations.map((edu: Education, index: number) => (
          <Article key={index}>
            <header>
              <h3>{edu.title}</h3>
              <h4>{edu.course}</h4>
              <h5>{edu.location}</h5>
              <strong>
                {edu.year.from} - {edu.year.to}
              </strong>
            </header>
            {edu.description && <Description>{edu.description}</Description>}
          </Article>
        ))}
      </Articles>
    </PageSection>
  );
};
export default EducationPage;
