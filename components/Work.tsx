import React from "react";
import Image from "next/image";
import { Work } from "../types";
import {
  PageSection,
  PageTitle,
  Articles,
  ImageContainer,
  Description,
  Article,
} from "./styled";
import workData from "../data/work.json";

const WorkPage = () => (
  <PageSection>
    <PageTitle>Work</PageTitle>
    <Articles>
      {workData.map((work: Work) => {
        const img = require(`../images/${work.img}`);
        return (
          <Article key={work.company}>
            <ImageContainer>
              <Image src={img} alt={work.company} />
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

export default WorkPage;
