import React from "react";
import { Education } from "../types";
import {
  Articles,
  PageTitle,
  PageSection,
  Description,
  Article,
} from "./styled";

import educations from "../data/education";
import { Duration } from "./Duration";

const RecentPosts = () => (
  <PageSection>
    <PageTitle>Education</PageTitle>
    <Articles>
      {educations.map((edu: Education, index: number) => (
        <Article key={index}>
          <header>
            <h3>{edu.course}</h3>
            <h4>{edu.title}</h4>
            <h5>{edu.location}</h5>
            <em>
              <Duration {...edu.year} />
            </em>
          </header>
          {edu.description && <Description>{edu.description}</Description>}
        </Article>
      ))}
    </Articles>
  </PageSection>
);

export default RecentPosts;
