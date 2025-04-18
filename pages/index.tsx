import clsx from 'clsx';
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import RecentPosts from "../components/RecentPosts";
import SEO from "../components/SEO";
import Skills from "../components/Skills";
import Work from "../components/Work";
import { getAllPosts, GhostPostsOrPages } from "../lib/ghost";

const ScrollableSection = styled.div`
  padding: 2rem 0;

  @media (max-width: 500px) {
    padding: 1rem 0;
  }
`;

const IndexPage = (props: {
  cmsData: {
    posts: GhostPostsOrPages | [];
  };
}) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <div className={clsx("body", { "is-loading": isLoading })}>
      <Layout>
        <SEO title="Pankaj Patel: Portfolio" />
        <Header isLoading={isLoading}>
          <Nav />
        </Header>
        <ScrollableSection id={"/intro"}>
          <Intro />
        </ScrollableSection>
        <ScrollableSection id={"/work"}>
          <Work />
        </ScrollableSection>
        <ScrollableSection id={"/publications"}>
          <RecentPosts posts={props.cmsData.posts || []} />
        </ScrollableSection>
        <ScrollableSection id={"/education"}>
          <Education />
        </ScrollableSection>
        <ScrollableSection id={"/skills"}>
          <Skills />
        </ScrollableSection>
        <ScrollableSection id={"/contact"}>
          <Contact />
        </ScrollableSection>
        <Footer />
      </Layout>
    </div>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  let posts: GhostPostsOrPages | [];

  try {
    posts = await getAllPosts({ limit: 6 });
  } catch (error) {
    console.error(error);
    throw new Error("Index creation failed.");
  }

  const cmsData = { posts };

  return {
    props: {
      cmsData,
    },
  };
};
