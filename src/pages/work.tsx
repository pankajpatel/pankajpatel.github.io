import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Work, Position } from "../types";
import workData from "../data/work/all.json";

const ImageContainer = styled.div`
  & img {
    width: 100%;
    geight: auto;
    border-radius: 4px;
  }
`;
const Description = styled.p`
  max-width: 400px;
`;
const WorkContainer = styled.article`
  display: flex;
  padding: 0 1rem;
  margin: 1rem -0.5rem;

  & > * {
    flex: 1 auto;
    margin: 0.5rem;
  }

  ${ImageContainer} {
    min-width: 100px;
    max-width: 100px;
  }
`;

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const IndexPage = () => (
  <Layout>
    <SEO title="Work" />
    <section>
      <h2 className="major">Work</h2>
      {workData.map((work: Work) => {
        const img = require(`../images/${work.img}`);
        const _from = work.duration.from.split("-");
        const _to = work.duration.to.split("-");
        return (
          <WorkContainer key={work.company}>
            <ImageContainer>
              <img src={img} alt={work.company} />
            </ImageContainer>
            <div className="info">
              <header>
                <h2>
                  {(work.positions[0].position as Position)
                    ? work.positions[0].position
                    : work.positions[0]}
                </h2>
                <h3>{work.company}</h3>
                <strong>
                  {Months[Number(_from[1]) - 1]}, {_from[0]}
                  {" - "}
                  {Months[Number(_to[1]) - 1]}, {_to[0]}
                </strong>
              </header>
              <Description>{work.description}</Description>
            </div>
          </WorkContainer>
        );
      })}
    </section>
  </Layout>
);

export default IndexPage;
