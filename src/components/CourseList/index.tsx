import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FeaturedCourse from "@components/FeaturedCourses";

interface Course {
  author: string;
  day: string;
  imageURL: string;
  title: string;
  type: string;
  view: string;
  isFeatured: boolean;
}

interface CourseListProps {
  titleItem: string;
  coursesData: Course[];
}

interface CourseListContainerProps {
  toolbarRetracted: boolean;
}

const Course = styled.div<CourseListContainerProps>`
  display: flex;
  flex-direction: column;
`;

const TitleItem = styled.h4`
  margin: 20px 0px 20px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
`;

const CourseListContainer = styled.div<CourseListContainerProps>`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  ${(props) =>
    !props.toolbarRetracted ? "max-width: 1200px" : "min-width: 940px"};
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Slider = styled.div`
  display: flex;
  transition: all 0.2s ease-in-out;
`;

const CourseItem = styled.div<CourseListContainerProps>`
  flex: ${(props) => (!props.toolbarRetracted ? "0 0 25%" : "0 0 33.333333%")};
  box-sizing: border-box;
`;

const NavButton = styled.button<{ position: "left" | "right" }>`
  background: whitesmoke;
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  ${(props) => (props.position === "left" ? "left: -4px;" : "right: 2px;")}

  &:hover {
    background: #ed2a26;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const CourseList: React.FC<CourseListProps> = ({
  coursesData,
  titleItem,
  toolbarRetracted,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = toolbarRetracted ? 3 : 4;
  const slideAmount = 100 / itemsPerPage;

  const totalItems = coursesData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalItems - itemsPerPage),
    );
  };

  return (
    <>
      <Course toolbarRetracted={toolbarRetracted}>
        <TitleItem>{titleItem}</TitleItem>
        <CourseListContainer toolbarRetracted={toolbarRetracted}>
          <NavButton
            position="left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </NavButton>
          <SliderContainer>
            <Slider
              style={{
                transform: `translateX(-${currentIndex * slideAmount}%)`,
              }}
            >
              {coursesData.map((course, index) => (
                <CourseItem key={index} toolbarRetracted={toolbarRetracted}>
                  <FeaturedCourse
                    // author={course.author}
                    day={course.day}
                    imageURL={course.imageURL}
                    title={course.title}
                    type={course.type}
                    view={course.view}
                    isFeatured={course.isFeatured}
                  />
                </CourseItem>
              ))}
            </Slider>
          </SliderContainer>
          <NavButton
            position="right"
            onClick={handleNext}
            disabled={currentIndex >= totalItems - itemsPerPage}
          >
            <FaChevronRight />
          </NavButton>
        </CourseListContainer>
      </Course>
    </>
  );
};

export default CourseList;
