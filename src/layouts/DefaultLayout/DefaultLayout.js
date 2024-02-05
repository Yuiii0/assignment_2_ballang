import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import styled from "styled-components";

function DefaultLayout() {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </Layout>
  );
}

export default DefaultLayout;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;
const Wrapper = styled.div`
  flex-grow: 1;
`;
