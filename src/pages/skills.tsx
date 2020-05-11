import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const SkillContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-wrap: wrap;
`;
const Skill = styled.div`
  flex: 1 auto;
  display: inline-block;
  padding: 0.8rem; 1rem;
  border: 1px solid rgba(200, 200, 200, 0.8);
  border-radius: 5px;
  margin: 0.75rem;
  text-align: center;
`;

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
    <Layout>
      <SEO title="Skills" />
      <section>
        <h2 className="major">Skills</h2>
        <SkillContainer>
          {skills.map((skill: { label: string }) => (
            <Skill key={skill.label}>{skill.label}</Skill>
          ))}
        </SkillContainer>
      </section>
    </Layout>
  );
};

export default SkillsPage;
