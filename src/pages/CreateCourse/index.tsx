import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BasicInfor from "./components/BasicInfor";
import Curriculum from "./components/Curriculum";
import Media from "./components/Media";
import Price from "./components/Price";
import Publish from "./components/Publish";
import { BiPlusCircle } from "react-icons/bi";

const Wrapper = styled.div`
  padding: 60px 0 0;
  transition: all 0.3s ease-out;
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
`;

const CourseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 0 0 0 8px;

  .icon_creact {
    font-size: 18px;
    margin: 5px;
  }

  h2 {
    font-size: 20px;
  }
`;

const CourseTabs = styled.div`
  margin-top: 60px;
`;

const TabList = styled.ul`
  width: 100%;
  margin-bottom: 20px;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const CourseTabItem = styled.li<{ completed: boolean; active: boolean }>`
  display: inline-block;
  text-align: center;
  width: 24%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 15%;
    left: 0%;
    transform: translateX(-45.5%);
    width: 100%;
    height: 8px;
    background-color: ${(props) => (props.completed ? "#ff0000" : "#ededed")};
    z-index: 0;
    transition: all 0.2s;
  }

  &::after {
    content: "";
    position: absolute;
    top: 18px;
    left: 0;
    width: 0;
    height: 8px;
    z-index: 0;
    transition: all 0.2s;
  }

  &:first-child::before {
    content: none;
  }

  &:first-child::after {
    left: 50%;
  }

  &.active {
    color: #333;
  }
`;

const StepIndicator = styled.div<{ completed: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.completed ? "#ed2a26" : "#d1d1d1")};
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: -8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.completed ? "rgba(237, 42, 38, 0.3)" : "#DDDDD34D"};
    z-index: -1;
    transition: all 0.2s;
  }
`;

const StepName = styled.div<{ completed: boolean }>`
  font-weight: 500;
  color: ${(props) => (props.completed ? "#333" : "#b2b2b2")};
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
  transition: all 0.3s;
`;

const CourseContent = styled.div`
  display: none;
  width: 100%;
  padding-top: 60px;
  &.active {
    display: block;
    padding-bottom: 30px;
    border-radius: 5px;
    margin-top: 20px;
    transition: all 0.3s ease-out;
  }
`;

const Course_Form = styled.div`
  padding: 0 30px;
`;

const tabData: { [key: string]: React.ReactNode } = {
  BASIC: <BasicInfor />,
  CURRICULUM: <Curriculum />,
  MEDIA: <Media />,
  PRICE: <Price />,
  PUBLISH: <Publish />,
};

const Index: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>(() => {
    return localStorage.getItem("selectedTab") || "BASIC";
  });
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(() => {
    const storedSteps = localStorage.getItem('completedSteps');
    return storedSteps ? JSON.parse(storedSteps) : [true, false, false, false, false];
  });
  useEffect(() => {
    localStorage.setItem("selectedTab", selectedTab);
  }, [selectedTab]);

  useEffect(() => {
    localStorage.setItem('completedSteps', JSON.stringify(completedSteps));
  }, [completedSteps]);

  const handleTabClick = (tab: string, index: number) => {
    const newCompletedSteps = completedSteps.map((completed, i) => i <= index);
    setCompletedSteps(newCompletedSteps);
    setSelectedTab(tab);
  };

  return (
    <Wrapper>
      <Container>
        <CourseHeader>
          <BiPlusCircle className="icon_creact" />
          <h2>Create New Course</h2>
        </CourseHeader>
        <CourseTabs>
          <TabList>
            {Object.keys(tabData).map((tab, index) => (
              <CourseTabItem
                key={tab}
                className={selectedTab === tab ? "active" : ""}
                onClick={() => handleTabClick(tab, index)}
                completed={completedSteps[index]}
                active={selectedTab === tab}
              >
                <StepIndicator completed={completedSteps[index]} />
                <StepName completed={completedSteps[index]}>{tab}</StepName>
              </CourseTabItem>
            ))}
          </TabList>
          <Course_Form>
            <CourseContent className="active">
              {tabData[selectedTab]}
            </CourseContent>
          </Course_Form>
        </CourseTabs>
      </Container>
    </Wrapper>
  );
};

export default Index;
