import React, { useState, useEffect } from "react";
import ScrollAnim from "rc-scroll-anim";
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

const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;

const IndexPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={loading ? "is-loading" : "body"}>
      <Layout>
        <SEO title="Home" />
        <Header loading={loading}>
          <Nav link={Link} />
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
