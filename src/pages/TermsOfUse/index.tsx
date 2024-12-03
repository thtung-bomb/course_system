import React, { useState } from "react";
import styled from "styled-components";
import Termsofuse from "./components/TermsOfUse";
import PageHeader from "@components/PageHeader";

const WrapContent = styled.div`
  background-color: #f7f7f7;
  width: 100%;
`;
const WrapFormHome = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
const index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };
  return (
    <Container>
      <WrapContent>
        <PageHeader
          title="Terms of Use"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        <WrapFormHome>
          <Termsofuse searchQuery={searchQuery}/>
        </WrapFormHome>
      </WrapContent>
    </Container>
  );
};

export default index;
