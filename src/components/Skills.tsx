import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Articles, PageTitle, PageSection, Skill } from "../styled";

const SkillsPage = () => {
  const {
    allSkillsJson: { nodes: skills },
  } = useStaticQuery(
    graphql`
      query {
        allSkillsJson {
          nodes {
            label
          }
        }
      }
    `
  );

  return (
    <PageSection>
      <PageTitle>Skills</PageTitle>
      <Articles empty={true}>
        {skills.map((skill: { label: string }) => (
          <Skill key={skill.label}>{skill.label}</Skill>
        ))}
      </Articles>
    </PageSection>
  );
};

export default SkillsPage;
