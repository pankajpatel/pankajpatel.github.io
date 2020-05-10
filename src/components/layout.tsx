import React from "react";
import { Normalize } from "styled-normalize";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const CenteredContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 100%;

  > div {
    max-width: 400px;
    text-align: center;
    padding: 20px;
  }

  a {
    display: block;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  position: relative;
`;

const Layout = ({ children }: LayoutProps) => (
  <AppContainer>
    <Normalize />
    <GlobalStyles />

    <Main>
      <CenteredContainer>{children}</CenteredContainer>
    </Main>
  </AppContainer>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
