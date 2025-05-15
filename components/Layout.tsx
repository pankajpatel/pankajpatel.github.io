"use client";

import React, { PropsWithChildren } from "react";
import { Normalize } from "styled-normalize";
import styled from "styled-components";

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

    {children}
  </AppContainer>
);

export default Layout;
