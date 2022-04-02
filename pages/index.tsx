import clsx from 'clsx';
import React, { useState, useEffect } from "react";
import { Element } from "rc-scroll-anim";

import { getAllPosts } from "../lib/ghost";

import Loading from "../components/Loading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Intro from "../components/Intro";

import Work from "../components/Work";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = (props) => {
  console.log(props);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={clsx('body', {'is-loading': isLoading })}>
      <Layout>
        <SEO title="Pankaj Patel: Portfolio" />
        <Header isLoading={isLoading}>
          <Nav />
        </Header>
        <Element id={"/intro"}>
          <Intro />
        </Element>
        <Element id={"/work"}>
          <Work />
        </Element>
        <Element id={"/education"}>
          <Education />
        </Element>
        <Element id={"/skills"}>
          <Skills />
        </Element>
        <Element id={"/contact"}>
          <Contact />
        </Element>
        <Footer />
      </Layout>
    </div>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  let posts: GhostPostsOrPages | [];

  try {
    posts = await getAllPosts({ limit: 20 });
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
