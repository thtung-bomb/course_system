import React from "react";
import { useAppSelector } from "@app/hooks";
import styled from "styled-components";
import ExHeader from "@components/ExHeader";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";

const WrapContentResult = styled.div`
  padding: 60px 0px;
  background-color: #f7f7f7;
`;
const WrapResult = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  gap: 80px;
`;
const WrapResultDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: column;
  gap: 16px;
`;

const IconResult = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "black"};
  font-size: 24px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  svg {
    font-size: 40px;
    color: #fff;
  }
  font-weight: 600;
  color: #fff;
`;

const TextResult = styled.p`
  font-size: 18px;
`;
const TitleResult = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin: 28px 0px;
`;
const DesResult = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #686f7a;
  text-align: center;
`;
const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const CustomizeBtn = styled.button`
  padding: 10px 20px;
  background-color: #ed2a26;
  color: #fff;
  font-size: 14px;
  outline: none;
  border-radius: 4px;
  height: 40px;
  border: none;
  font-weight: 500;
  text-align: center;
`;
const TestResult = () => {
  const navigate = useNavigate();
  const currentTestResult = useAppSelector(
    (state: any) => state.rootReducer.testResult,
  );
  console.log(currentTestResult);
  const totalQuestion =
    currentTestResult.trueNumber + currentTestResult.falseNumber;
  console.log(totalQuestion);
  if (totalQuestion < 1) {
    navigate("/test-view");
    console.log(totalQuestion);
  }

  return (
    <>
      <ExHeader title="Result" />
      <WrapContentResult>
        <WrapResult>
          <WrapResultDetail>
            <IconResult color="#01b200">
              <FaCheck />
            </IconResult>
            <TextResult>
              Right <span>({currentTestResult.trueNumber})</span>
            </TextResult>
          </WrapResultDetail>
          <WrapResultDetail>
            <IconResult color="#fb3838">
              <IoClose />
            </IconResult>
            <TextResult>
              Wrong <span>({currentTestResult.falseNumber})</span>
            </TextResult>
          </WrapResultDetail>
          <WrapResultDetail>
            <IconResult color="#57a4ff">
              {currentTestResult.trueNumber}
            </IconResult>
            <TextResult>Out of 20</TextResult>
          </WrapResultDetail>
        </WrapResult>
        <TitleResult>Congratulation! Joginder</TitleResult>
        <DesResult>You are eligible for this certificate</DesResult>
        <WrapBtn>
          <CustomizeBtn>Download Certificate</CustomizeBtn>
        </WrapBtn>
      </WrapContentResult>
    </>
  );
};

export default TestResult;
