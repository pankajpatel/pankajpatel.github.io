import React, { useState, useEffect } from "react";
import ScrollAnim from "rc-scroll-anim";

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

const Element = ScrollAnim.Element;

const IndexPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={`body ${isLoading ? "is-loading" : ""}`}>
      <Layout>
        <SEO title="Portfolio" />
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
