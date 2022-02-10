import React from "react";
import { Articles, PageTitle, PageSection, Skill } from "./styled";
import skills from "../data/skills.json";

const SkillsPage = () => (
  <PageSection>
    <PageTitle>Skills</PageTitle>
    <Articles empty>
      {skills.map((skill: string) => (
        <Skill key={skill}>{skill}</Skill>
      ))}
    </Articles>
  </PageSection>
);

export default SkillsPage;
