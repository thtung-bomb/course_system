import React from "react";
import styled from "styled-components";
import { TbWindsock } from "react-icons/tb";
import { BsDot } from "react-icons/bs";

const WrapContent = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 110px;
  padding: 20px 48px 0px 30px;
  font-family: "Roboto", sans-serif;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  gap: 4px;
  padding: 0px 0px 40px;
`;

const TitleH2 = styled.h2`
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 20px;
  color: #686f7a;
`;

const TitleContent = styled.h4`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const ContentP = styled.p`
  line-height: 30px;
`;

const ContentUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContentUlA = styled.a`
  color: #4183c4;
  text-decoration: none;
  &:hover {
    color: #686f7a;
    text-decoration: underline;
  }
`;

const DotIcon = styled(BsDot)`
  color: #333;
  font-size: 26px;
`;

const LearnMore = styled.a`
  font-size: 14px;
  padding-bottom: 50px;
  color: #4183c4;
  text-decoration: none;
  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

const ContentSpan = styled.span`
  color: #686f7a;
  text-align: center;
  line-height: 26px;
`;

const ReportHistory: React.FC = () => {
  return (
    <WrapContent>
      <Title>
        <TbWindsock />
        <TitleH2>Report history</TitleH2>
      </Title>
      <Content>
        <TitleContent>Thanks for reporting</TitleContent>
        <ContentP>
          Any member of the Cursus community can flag content to us that they
          believe violates our Community Guidelines. When something is flagged,
          it’s not automatically taken down. Flagged content is reviewed in line
          with the following guidelines:
        </ContentP>
        <ContentUl>
          <li>
            <p>
              <DotIcon />
              Content that violates our{" "}
              <ContentUlA href="#">Community Guidelines</ContentUlA> is removed
              from Edututs+.
            </p>
          </li>
          <li>
            <p>
              <DotIcon />
              Content that may not be appropriate for all younger audiences may
              be age-restricted.
            </p>
          </li>
        </ContentUl>
        <LearnMore href="#">
          Learn more about reporting content on Cursus.
        </LearnMore>
        <ContentSpan>You haven't submitted any reports.</ContentSpan>
      </Content>
    </WrapContent>
  );
};

export default ReportHistory;
