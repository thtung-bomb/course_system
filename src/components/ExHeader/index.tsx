import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const LinkBack = styled(Link)`
  text-decoration: none;
  color: #333;
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
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
  pathBreadcrumb: string;
}

const ExHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  return (
    <WrapExHeader>
      <Container>
        <TopExHeader>
          <Breadcrumb>
            <CustomBreadItem href="/">Home</CustomBreadItem>
            <CustomBreadItem href="/certification-center">
              Certification Center
            </CustomBreadItem>
            <CustomBreadItem active>{title}</CustomBreadItem>
          </Breadcrumb>
          <LinkBack to="/certification-center">
            <IoIosArrowBack />
            Back to Certification Center
          </LinkBack>
        </TopExHeader>
        <TitleExHeader>{title}</TitleExHeader>
      </Container>
    </WrapExHeader>
  );
};

export default ExHeader;
