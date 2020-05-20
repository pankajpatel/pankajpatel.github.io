import React from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 2.5rem 1rem;
`;

const InfoContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  font-size: 1.2rem;
`;

const Intro = () => (
  <Section>
    <InfoContainer>
      <p>I am a Developer by Job, Blogger by Hobby and a Geek by Nature.</p>
      <p>
        I blog at <a href="https://time2hack.com">Time to Hack</a>.
      </p>
      <p>
        I enjoy hanging out with friends, listening music and watching action
        &amp; sci-fi movies.
      </p>
      <p>
        I have interest in Information Security which helps him in building
        secure and efficient applications. He has also published an article on
        Web Application security on HAKIN9 magazine.
      </p>
    </InfoContainer>
  </Section>
);

export default Intro;
