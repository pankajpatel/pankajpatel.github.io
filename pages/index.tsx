import clsx from 'clsx';
import { GetStaticProps } from "next";
import { Element } from "rc-scroll-anim";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import SEO from "../components/SEO";
import Skills from "../components/Skills";
import Work from "../components/Work";
import { getAllPosts, GhostPostsOrPages } from "../lib/ghost";

const IndexPage = (props: {
  cmsData: {
    posts: GhostPostsOrPages | [];
  };
}) => {
  console.log(props);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={clsx("body", { "is-loading": isLoading })}>
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
