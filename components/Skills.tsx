import styled from "styled-components";
import {
  Articles,
  PageTitle,
  PageSection,
  Skill,
  Summary,
  Details,
} from "./styled";
import skills from "../data/skills.json";

const SkillsBox = styled(Articles)`
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex: 1 auto;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

const SkillsPage = () => (
  <PageSection>
    <PageTitle>Skills</PageTitle>
    <SkillsBox empty>
      {skills.map((skill: string) => (
        <SkillsCategory key={skill[0]} category={skill} />
      ))}
    </SkillsBox>
  </PageSection>
);

const SkillsCategory = ({ category }) => (
  <Details>
    <Summary>{category[0]}</Summary>
    {category[1].map((skill: string) => (
      <Skill key={skill}>{skill}</Skill>
    ))}
  </Details>
);

export default SkillsPage;
