import React, { useState } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";

const WrapExHeader = styled.div`
  padding: 20px 0px;
  background-color: #fff;
  margin-top: 60px;
`;
const TopExHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CustomBreadItem = styled(Breadcrumb.Item)`
  color: #333;
  font-size: 14px;
  line-height: 24px;
  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    line-height: 24px;
  }
`;
const UISearch = styled.div`
  height: 40px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 247px;
  &:focus-within {
    border: 1px solid #333;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  }

  .icon_src {
    color: #cdcdcd;
    font-size: 16px;
    transition: color 0.1s ease-in-out;
  }
  &:focus-within .icon_src {
    color: #333;
  }

  input {
    padding-left: 2.2em !important;
    padding-right: 1em !important;
    border: none;
    outline: none;
    flex-grow: 1;
    font-size: 14px;
    &:focus {
      padding-left: 2.2em !important;
      padding-right: 1em !important;
    }
    &:focus::placeholder {
      font-weight: 500;
      color: #333;
    }
  }

  input::placeholder {
    color: #aaa;
  }
`;

const TitleExHeader = styled.h3`
  font-size: 24px;
  margin-top: 30px;
  color: #333;
  line-height: 30px;
  font-weight: 600;
`;

interface CustomHeaderProps {
  title: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
}

const PageHeader: React.FC<CustomHeaderProps> = ({
  title,
  searchQuery,
  setSearchQuery,
  handleSearch,
}) => {
  return (
    <WrapExHeader>
      <Container>
        <TopExHeader>
          <Breadcrumb>
            <CustomBreadItem href="/">Home</CustomBreadItem>

            <CustomBreadItem active>{title}</CustomBreadItem>
          </Breadcrumb>
          <UISearch>
            <FaMagnifyingGlass className="icon_src" onClick={handleSearch} />
            <input
              type="search"
              name="src_explore"
              id="src_explore"
              required
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </UISearch>
        </TopExHeader>
        <TitleExHeader>{title}</TitleExHeader>
      </Container>
    </WrapExHeader>
  );
};

export default PageHeader;
