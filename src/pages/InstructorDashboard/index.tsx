import React from "react";
import styled from "styled-components";
import JumpCreateCourse from "./components/JumpCreateCourse";
import { AiOutlineAppstore } from "react-icons/ai";
import DashboardCardTotalSales from "./components/TotalSales";
import DashboardCardTotalEnroll from "./components/TotalEnroll";
import DashboardCardTotalCourses from "./components/TotalCourses";
import DashboardCardTotalStudents from "./components/TotalStudents";
import LatestCoursesPerformance from "./components/LatestCoursesPerformance";
import NewsCarousel from "./components/News";
import ProfileAnalytics from "./components/RightContent/ProfileAnalytics";
import SubmitCourses from "./components/RightContent/SubmitCourses";
import WhatsNew from "./components/RightContent/WhatsNew";

const WrapContent = styled.div`
  margin: 90px 30px 40px 30px;
`;

const WrapTop = styled.div`
  max-width: 100%;
`;

const Dashboard = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const DashboardTitle = styled.h2`
  color: #333;
  display: block;
  box-sizing: border-box;
  font-weight: 500;
  margin-bottom: 8px;
`;

const DashboardIcon = styled(AiOutlineAppstore)`
  display: inline;
  width: 28px;
  height: 24px;
  margin-right: 6px;
`;

const DashboardAllCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 21px;
`;

const DashboardCardWrapper = styled.div`
  width: 25%;
`;

const WrapBot = styled.div`
  max-width: 100%;
  display: grid;
  margin-top: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 21px;
`;

const LatestCourses = styled.div`
  width: 100%;
`;

const News = styled.div`
  width: 100%;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;

const InstructorDashboard: React.FC = () => {
  const valuesTotalSales = [
    {
      title: "Total Sales",
      price: 350,
      new: 50,
    },
  ];

  const valuesTotalEnroll = [
    {
      title: "Total Enroll",
      number: 1500,
      new: 125,
    },
  ];

  const valuesTotalCourses = [
    {
      title: "Total Courses",
      number: 130,
      new: 5,
    },
  ];

  const valuesTotalStudents = [
    {
      title: "Total Students",
      number: 2650,
      new: 245,
    },
  ];

  return (
    <WrapContent>
      <WrapTop>
        <Dashboard>
          <DashboardTitle>
            <DashboardIcon />
            Instructor Dashboard
          </DashboardTitle>
        </Dashboard>
        <DashboardAllCard>
          {valuesTotalSales.map((value, index) => (
            <DashboardCardWrapper key={index}>
              <DashboardCardTotalSales
                title={value.title}
                price={value.price}
                new={value.new}
              />
            </DashboardCardWrapper>
          ))}
          {valuesTotalEnroll.map((value, index) => (
            <DashboardCardWrapper key={index}>
              <DashboardCardTotalEnroll
                title={value.title}
                number={value.number}
                new={value.new}
              />
            </DashboardCardWrapper>
          ))}
          {valuesTotalCourses.map((value, index) => (
            <DashboardCardWrapper key={index}>
              <DashboardCardTotalCourses
                title={value.title}
                number={value.number}
                new={value.new}
              />
            </DashboardCardWrapper>
          ))}
          {valuesTotalStudents.map((value, index) => (
            <DashboardCardWrapper key={index}>
              <DashboardCardTotalStudents
                title={value.title}
                number={value.number}
                new={value.new}
              />
            </DashboardCardWrapper>
          ))}
        </DashboardAllCard>
        <JumpCreateCourse />
      </WrapTop>
      <WrapBot>
        <LatestCourses>
          <LatestCoursesPerformance />
        </LatestCourses>
        <News>
          <NewsCarousel />
        </News>
        <RightContent>
          <ProfileAnalytics />
          <SubmitCourses />
          <WhatsNew />
        </RightContent>
      </WrapBot>
    </WrapContent>
  );
};

export default InstructorDashboard;
