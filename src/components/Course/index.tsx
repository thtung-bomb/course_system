import React from "react";
import { GoHistory } from "react-icons/go";
import { FiUserCheck } from "react-icons/fi";
import { LuPlayCircle, LuMonitorPlay } from "react-icons/lu";
import styled from "styled-components";

const CourseItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-right: 12px;
`;

const CourseItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  transition: transform 1s ease;
`;

const CourseItemIcon = styled.div`
  font-size: 24px;
  color: #232221;
  font-weight: 600;
  background-color: #fadacd;
  padding: 10px 20px;
`;

const CourseItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const CourseItemDescription = styled.div`
  font-size: 14px;
  color: #666;
`;

const Course: React.FC = () => {
  const value = [
    {
      icon: <GoHistory />,
      title: "Go at your own pace",
      description: "Enjoy lifetime access to courses on Edututs+'s website",
    },
    {
      icon: <FiUserCheck />,
      title: "Learn from industry experts",
      description: "Select from top instructors around the world",
    },
    {
      icon: <LuPlayCircle />,
      title: "Find video courses on almost any topic",
      description: "Build your library for your career and personal growth",
    },
    {
      icon: <LuMonitorPlay />,
      title: "100,000 online courses",
      description: "Explore a variety of fresh topics",
    },
  ];

  return (
    <CourseItem>
      {value.map((item, index) => (
        <CourseItemInfo key={index}>
          <CourseItemIcon>{item.icon}</CourseItemIcon>
          <CourseItemTitle>{item.title}</CourseItemTitle>
          <CourseItemDescription>{item.description}</CourseItemDescription>
        </CourseItemInfo>
      ))}
    </CourseItem>
  );
};

export default Course;
