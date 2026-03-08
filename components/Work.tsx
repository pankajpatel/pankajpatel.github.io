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
import { Duration } from "./Duration";

const WorkPage = async () => (
  <PageSection>
    <PageTitle>Work</PageTitle>
    <Articles>
      {workData.map(async (work: Work) => {
        const img = await import(`../images/${work.img}`);
        return (
          <Article key={work.company}>
            <ImageContainer>
              <Image src={img.default} alt={work.company} />
            </ImageContainer>
            <header>
              <h2>{work.positions[0].position}</h2>
              <h3>{work.company}</h3>
              <em>
                <Duration {...work.duration} />
              </em>
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
