import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Work from "../components/Work";
import Footer from "../components/Footer";

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
          <Nav />
        </Header>
        <Intro />
        <Work />
        <Footer />
      </Layout>
    </div>
  );
};
export default IndexPage;
