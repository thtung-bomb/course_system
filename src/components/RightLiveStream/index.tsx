import React from "react";
import styled from "styled-components";
import { TbKayak } from "react-icons/tb";

const LiveStreamSection = styled.div`
  background-color: #fff;
  width: 100%;
  float: left;
  padding: 2% 0 6%;
  border-radius: 3px;
  margin-bottom: 30px;
  border: 1px solid #efefef;
  h4 {
    font-size: 16px;
    color: #333;
    float: left;
    font-weight: 600;
    font-family: sans-serif;
    position: relative;
    bottom: 10px;
    left: 20px;
  }
`;
const SectionHeader = styled.div`
  float: left;
  width: 100%;
  padding: 20px 15px;
  height: 10px;
  position: relative;
  right: 15px;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.6%;
    background-color: #efefef;
    position: absolute;
    bottom: 0;
    left: 15px;
  }
`;
const LiveStreamContent = styled.div`
  float: left;
  width: 100%;
  text-align: center;
  padding: 14px;
`;
const LiveIcon = styled.div`
  float: left;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;
const Icon = styled.div`
  display: inline-block;
  width: 65px;
  height: 65px;
  line-height: 56px;
  text-align: center;
  padding: 15px 0;
  background-color: #ffecec;
  border-radius: 50%;
  border-bottom: 1px solid #efefef;
  font-size: 40px;
  position: relative;
  .SmallIcon {
    position: relative;
    bottom: 10px;
    width: 30px;
  }
`;
const SmallIcon = styled.div`
  position: relative;
  width: 30px;
  left: 19px;
  bottom: 5px;
`;

const LiveText = styled.div`
  float: left;
  width: 100%;
  padding: 0;
  text-align: center;
  p {
    font-size: 14px;
    font-weight: 400;
    font-family: sans-serif;
    margin-bottom: 20px;
    color: #686f7a;
    position: relative;
    right: 10px;
  }
`;
const Btn12 = styled.button`
  height: 40px;
  background-color: red;
  border: 0;
  border-radius: 3px;
  padding: 10px 20px;
  color: #fff;
  &:hover {
    background-color: #383b42;
  }
`;

const InfoText = styled.div`
  font-size: 12px;
  font-weight: 400;
  font-family: sans-serif;
  margin-bottom: 0;
  color: #686f7a;
  display: block;
  margin-top: 20px;
`;

function index() {
  return (
    <LiveStreamSection>
      <SectionHeader>
        <h4>Live Streaming</h4>
      </SectionHeader>
      <LiveStreamContent>
        <LiveIcon>
          <Icon>
            <SmallIcon>
              <TbKayak className="SmallIcon" />
            </SmallIcon>
          </Icon>
        </LiveIcon>
        <LiveText>
          <p>Set up your channel and stream live to your students</p>
          <Btn12>Get Started</Btn12>
          <InfoText>Info : This feature only for 'Instructors'.</InfoText>
        </LiveText>
      </LiveStreamContent>
    </LiveStreamSection>
  );
}

export default index;
