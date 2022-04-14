import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 2.5rem 0.5rem;
`;

const InfoContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  font-size: 2rem;
  padding: 0 0.5em;

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
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
        I have interests in UX and Information Security which helps me in building secure and magnetic experiences for end-users.
      </p>
    </InfoContainer>
  </Section>
);

export default Intro;
