import React from "react";
import styled from "styled-components";

function Page({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Page;

const Wrapper = styled.div`
  position: absolute;
  top: 200px;
  transform: translateX(-50%);
  left: 50%;
  width: 1024px;
  padding: 2rem;
  position: relative;
  padding-bottom: 180px;
`;
