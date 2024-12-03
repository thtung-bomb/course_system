import React from "react";
import styled from "styled-components";
import { LiaBookSolid } from "react-icons/lia";

const Course = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Roboto, sans-serif;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 102px;
  margin: 30px 0px 0px;
  padding: 30px 20px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 3px;
  background: #ffffff;
  font-size: 14px;
  font-weight: 400;
`;

const CardLeft = styled.div`
  display: flex;
  align-items: center;
`;

const TbBookIconLeft = styled(LiaBookSolid)`
  width: 42px;
  height: 31px;
  display: block;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 400;
  color: #686f7a;
`;

const CardLeftH1 = styled.h1`
  font-size: 24px;
  color: #333;
  font-weight: 400;
  text-align: left;
  margin-left: 10px;
`;

const CardRight = styled.div`
  float: right;
`;

const CreateBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: white;
  background: #ed2a26;
  padding: 0px 20px;
  border-radius: 3px;
  border: 0;
  height: 40px;
  &:hover {
    background: black;
  }
`;

const JumpCreateCourse: React.FC = () => {
  return (
    <Course>
      <Card>
        <CardLeft>
          <TbBookIconLeft />
          <CardLeftH1>Jump Into Course Creation</CardLeftH1>
        </CardLeft>
        <CardRight>
          <CreateBtn
            onClick={() => (window.location.href = "/all-live-streams")}
          >
            Create Your Course
          </CreateBtn>
        </CardRight>
      </Card>
    </Course>
  );
};

export default JumpCreateCourse;
