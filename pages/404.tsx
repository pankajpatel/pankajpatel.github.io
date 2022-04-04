import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container>
      <div>
        <h1>404: Not found</h1>
        <p>The page you were looking for could not be found.</p>
        <p>
          <Link href="/">Return Home</Link>
        </p>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
