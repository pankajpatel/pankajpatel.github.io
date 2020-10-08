import React, { useState, useEffect } from "react";
import Loadable from "react-loadable";
import ScrollAnim from "rc-scroll-anim";

import Loading from "../components/Loading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Intro from "../components/Intro";

const Work = Loadable({
  loading: Loading,
  loader: () => import("../components/Work"),
});
const Education = Loadable({
  loading: Loading,
  loader: () => import("../components/Education"),
});
const Skills = Loadable({
  loading: Loading,
  loader: () => import("../components/Skills"),
});
const Contact = Loadable({
  loading: Loading,
  loader: () => import("../components/Contact"),
});
const Footer = Loadable({
  loading: Loading,
  loader: () => import("../components/Footer"),
});

const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;

const IndexPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={`body ${loading ? "is-loading" : ""}`}>
      <Layout>
        <SEO title="Portfolio" />
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
