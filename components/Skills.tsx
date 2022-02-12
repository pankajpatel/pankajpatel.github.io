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

type SkillCategory = [string, Array<string>];

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
      {(skills as Array<SkillCategory>).map<JSX.Element>(
        (skill: SkillCategory, index: number) => (
          <SkillsCategory key={index} category={skill} />
        )
      )}
    </SkillsBox>
  </PageSection>
);

const SkillsCategory = ({ category }: { category: SkillCategory }) => (
  <Details>
    <Summary>{category[0]}</Summary>
    {category[1].map((skill: string) => (
      <Skill key={skill}>{skill}</Skill>
    ))}
  </Details>
);

export default SkillsPage;
