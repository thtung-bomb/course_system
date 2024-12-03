import React from "react";
import styled from "styled-components";
import FeaturedCourse from "@components/FeaturedCourses";
import { CgTrash } from "react-icons/cg";
import { useOutletContext } from "react-router-dom";

const WrapContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 90px;
  margin-left: 30px;
  margin-right: 30px;
`;

const LeftContent = styled.div<{ isToolbarOpen: boolean }>`
  width: ${({ isToolbarOpen }) => (isToolbarOpen ? "293px" : "353px")};
  height: 181px;
  font-family: "Roboto", sans-serif;
  transition: width 0.3s ease-in-out;
`;

const RightContent = styled.div<{ isToolbarOpen: boolean }>`
  margin-left: 22px;
  width: ${({ isToolbarOpen }) => (isToolbarOpen ? "943px" : "1123px")};
`;

const LeftTitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
  p {
    font-size: 15px;
  }
  a {
    font-size: 15px;
    text-decoration: none;
    color: #333;
  }
`;

const RightTitleContent = styled.p`
  font-family: "Roboto", sans-serif;
  padding-bottom: 20px;
  font-size: 15px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  p {
    color: #686f7a;
    font-size: 15px;
    padding-bottom: 40px;
  }

  button {
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 2%;
    height: 40px;
    width: 100%;
    background-color: #ed2a26;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #333;
    }
  }
`;

const TrashIcon = styled(CgTrash)`
  font-size: 18px;
  padding-right: 4px;
`;

const ListCourses = styled.div``;

const RightListCourses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

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
  coursesData: Course[];
}

const SavedCourse: React.FC<CourseListProps> = ({ coursesData }) => {
  const isToolbarOpen: boolean = useOutletContext();

  const customStyle = {
    container: {
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      width: "auto",
      backgroundColor: "white",
      transition: "all 0.3s ease-in-out",
    } as React.CSSProperties,
    imgWight: {
      // width: "65%",
      transition: "all 0.3s ease-in-out",
    } as React.CSSProperties,
    content: {
      display: "flex",
      flexDirection: "column",
      fontFamily: '"Roboto", sans-serif',
      padding: "0px 10px 10px 0px",
      gap: "8px",
      width: "100%",
    } as React.CSSProperties,
    courseReact: {
      width: "100%",
    } as React.CSSProperties,
    dotMenu: {
      width: "4px",
    } as React.CSSProperties,
    courseInfo: {
      margin: "0px",
    } as React.CSSProperties,
    typeP: {
      margin: "0px",
      padding: "2px 0px 0px",
    } as React.CSSProperties,
    courseHours: {
      bottom: "5px",
    } as React.CSSProperties,
    courseRate: {
      top: "4%",
    } as React.CSSProperties,
    arrowContainer: {
      top: "3%",
    } as React.CSSProperties,
    courseFooter: {
      margin: "18px 0px 0px",
      fontSize: "14px",
    } as React.CSSProperties,
    nameAuthor: {
      color: "black",
      fontWeight: "bold",
    } as React.CSSProperties,
  };

  const handleRemoveSavedCourses = () => {
    // console.log("Removing saved courses...");
  };

  if (!coursesData || coursesData.length === 0) {
    return <p>No saved courses available.</p>;
  }

  const courseImageWidth = isToolbarOpen ? "571px" : "719px";
  const courseContainer = isToolbarOpen ? "925px" : "1087px";

  return (
    <WrapContent>
      <LeftContent isToolbarOpen={isToolbarOpen}>
        <LeftTitleContent>
          <p>Saved Courses</p>
          <a href="/">Remove All</a>
        </LeftTitleContent>
        <FooterContent>
          <p>{coursesData.length} Courses</p>
          <button onClick={handleRemoveSavedCourses}>
            <TrashIcon />
            Remove Saved Courses
          </button>
        </FooterContent>
      </LeftContent>
      <RightContent isToolbarOpen={isToolbarOpen}>
        <RightTitleContent>Saved Courses</RightTitleContent>
        <RightListCourses>
          {coursesData.map((course, index) => (
            <ListCourses key={index}>
              <FeaturedCourse
                author={course.author}
                day={course.day}
                imageURL={course.imageURL}
                title={course.title}
                type={course.type}
                view={course.view}
                isFeatured={course.isFeatured}
                customStyle={customStyle}
                courseImageWidth={courseImageWidth}
                courseContainer={courseContainer}
              />
            </ListCourses>
          ))}
        </RightListCourses>
      </RightContent>
    </WrapContent>
  );
};

export default SavedCourse;
