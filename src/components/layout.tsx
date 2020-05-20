import React, { PropsWithChildren } from "react";
import { Normalize } from "styled-normalize";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
  position: relative;
`;

const Layout = ({ children }: PropsWithChildren<{}>) => (
  <AppContainer>
    <Normalize />
    <GlobalStyles />

    {children}
  </AppContainer>
);

export default Layout;
