import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import RecentPosts from "../components/RecentPosts";
import Skills from "../components/Skills";
import Work from "../components/Work";
import type { GhostPostsOrPages } from "../lib/ghost";
import { Providers } from "./providers";

export const Home = (props: {
  cmsData: {
    posts: GhostPostsOrPages | [];
  };
}) => (
  <Providers>
    <div className="body">
      <Layout>
        <Header>
          <Nav />
        </Header>
        <div className="scrollable-container" id={"/intro"}>
          <Intro />
        </div>
        <div className="scrollable-container" id={"/work"}>
          <Work />
        </div>
        <div className="scrollable-container" id={"/publications"}>
          <RecentPosts posts={props.cmsData.posts || []} />
        </div>
        <div className="scrollable-container" id={"/education"}>
          <Education />
        </div>
        <div className="scrollable-container" id={"/skills"}>
          <Skills />
        </div>
        <div className="scrollable-container" id={"/contact"}>
          <Contact />
        </div>
        <Footer />
      </Layout>
    </div>
  </Providers>
);
