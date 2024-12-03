import React from "react";
import styled from "styled-components";
import Content from "./components/Content";

const WrapContentHome = styled.div`
  background-color: #f7f7f7;
  overflow-x: hidden;
`;

const Home = () => {
  return (
    <WrapContentHome>
      <Content />
    </WrapContentHome>
  );
};

export default Home;
