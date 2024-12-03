import React, { useState, useEffect } from "react";
import ExHeader from "@components/ExHeader";
import styled from "styled-components";
import Question from "./components/Questions";
import { Container } from "react-bootstrap";

const WrapTestView = styled.div`
  background-color: #f7f7f7;
`;
const WrapContent = styled(Container)`
  position: relative;
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;
const WrapTime = styled.div`
  display: flex;
  position: sticky;
  top: 90px;
  left: 120px;
  margin-top: 12px;
  margin-bottom: 200px;
  height: 200px;
`;
const WrapNumberQuestion = styled.div`
  border: 1px solid #efefef;
  padding: 30px 44px;
  background-color: #fff;
`;
const NumberQuestion = styled.p`
  width: 100px;
  height: 100px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;
const TextQuestion = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333;
`;
const WrapTimeCount = styled.div`
  border: 1px solid #efefef;
  padding: 30px 44px;
  background-color: #fff;
`;
const TimeCount = styled.p`
  width: 100px;
  height: 100px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;
const TextCount = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333;
`;
const WrapQuestionList = styled.div``;
const TestView = () => {
  const [time, setTime] = useState(3600);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <WrapTestView>
      <ExHeader title="WordPress Test View" />
      <WrapContent>
        <WrapTime>
          <WrapNumberQuestion>
            <NumberQuestion>20</NumberQuestion>
            <TextQuestion>Question</TextQuestion>
          </WrapNumberQuestion>
          <WrapTimeCount>
            <TimeCount>{formatTime(time)}</TimeCount>
            <TextCount>Minutes</TextCount>
          </WrapTimeCount>
        </WrapTime>
        <Question />
      </WrapContent>
    </WrapTestView>
  );
};

export default TestView;
