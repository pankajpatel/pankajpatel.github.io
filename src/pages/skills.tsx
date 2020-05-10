import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import skills from "../data/skills.json";

const IndexPage = () => (
  <Layout>
    <SEO title="Skills" />
    <section>
      <h2 className="major">Skills</h2>
      <div>
        {skills.map((skill: string) => (
          <div key={skill}>
            <h4>{skill}</h4>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default IndexPage;
