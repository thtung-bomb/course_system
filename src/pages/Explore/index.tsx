import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import LiveStream from "@components/Slide/LiveStreamCard";
import CoursesL from "@components/FeaturedCourses/index";

const courseData1 = [
  {
    author: "Alice Johnson",
    day: "2024-01-29",
    imageURL: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    title: "Introduction to Machine Learning",
    type: "Course",
    view: "2400",
    isFeatured: false,
  },
  {
    author: "Bob Smith",
    day: "2024-02-20",
    imageURL: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    title: "Advanced Python Programming",
    type: "Course",
    view: "3200",
    isFeatured: false,
  },
  {
    author: "Carol White",
    day: "2024-03-10",
    imageURL: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Data Science with R",
    type: "Course",
    view: "1800",
    isFeatured: false,
  },
  {
    author: "David Brown",
    day: "2024-04-05",
    imageURL: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    title: "Web Development Bootcamp",
    type: "Course",
    view: "2700",
    isFeatured: false,
  },
  {
    author: "Eva Green",
    day: "2024-05-25",
    imageURL: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    title: "Artificial Intelligence in Practice",
    type: "Course",
    view: "3500",
    isFeatured: false,
  },
  {
    author: "Frank Harris",
    day: "2024-06-19",
    imageURL: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    title: "Introduction to Cybersecurity",
    type: "Course",
    view: "1900",
    isFeatured: false,
  },
  {
    author: "Grace Lee",
    day: "2024-07-12",
    imageURL: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    title: "Cloud Computing Essentials",
    type: "Course",
    view: "2100",
    isFeatured: false,
  },
  {
    author: "Henry Miller",
    day: "2024-08-03",
    imageURL: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Full-Stack JavaScript Development",
    type: "Course",
    view: "2900",
    isFeatured: false,
  },
  {
    author: "Isabella Wilson",
    day: "2024-09-29",
    imageURL: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Big Data Analytics",
    type: "Course",
    view: "2300",
    isFeatured: false,
  },
  {
    author: "Jack Martinez",
    day: "2024-10-14",
    imageURL:
      "https://intlbm.com/wp-content/uploads/2019/04/Block_chain_Technology.jpg",
    title: "Blockchain Technology",
    type: "Course",
    view: "2500",
    isFeatured: false,
  },
  {
    author: "Karen Davis",
    day: "2024-11-21",
    imageURL: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    title: "Introduction to Natural Language Processing",
    type: "Course",
    view: "3000",
    isFeatured: false,
  },
];

const ContainerParent = styled.div`
  max-width: 95%;
`;
const Container = styled.div``;
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  padding-left: 15px;
  &:focus {
    color: #676767;
  }
`;

const SearchExplore = styled.input`
  padding-left: 3.2rem !important;
  padding-right: 1rem !important;
  padding: 15px;
  width: 100%;
  margin-top: 100px;
  margin-left: 15px;
  height: 50px;
  outline: none;
  border: none;

  &::placeholder {
    color: #ccc;
  }

  &:focus::placeholder {
    color: #676767;
  }
`;
const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 84%;
  left: 46px;
  transform: translateY(-50%);
  color: rgb(186, 175, 175);
`;
const customStyle = {
  warpLiveStream: {
    maxWidth: "100%",
    marginRight: "20px",
    position: "relative",
    left: "25px",
    marginTop: "50px",
  } as React.CSSProperties,
  card: {
    width: "190px",
  } as React.CSSProperties,
  smallCard: {
    width: "145px",
    margin: "15px 22px",
  } as React.CSSProperties,
};
const customCourseStyles = {
  container: {},
  imgWight: {},
  content: {},
  dotMenu: {},
  courseReact: {},
  courseInfo: {},
  typeP: {},
  courseHours: {},
  courseRate: {},
  arrowContainer: {},
  courseFooter: {},
  nameAuthor: {},
  courseContainer: {},
};

const ContainerCourse = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 45px;
  margin-left: 35px;
  max-width: 100%;
  margin-bottom: 100px;
`;

function index() {
  const courseImageWidth = "100%";
  const courseContainer = "100%";
  return (
    <ContainerParent>
      <Container>
        <SearchContainer>
          <SearchExplore
            type="search"
            className="search-input"
            placeholder="Search for Tuts Videos, Tutors, Tests and more.."
          />
          <SearchIcon />
        </SearchContainer>
        <LiveStream
          customStyle={customStyle}
          itemWidth={199.3}
          slideDistance={200}
        />
        <ContainerCourse>
          {courseData1.map((course, index) => (
            <CoursesL
              style
              key={index}
              author={course.author}
              day={course.day}
              imageURL={course.imageURL}
              title={course.title}
              type={course.type}
              view={course.view}
              isFeatured={course.isFeatured}
              customStyle={customCourseStyles}
              courseImageWidth={courseImageWidth}
              courseContainer={courseContainer}
            />
          ))}
          ;
        </ContainerCourse>
      </Container>
    </ContainerParent>
  );
}

export default index;
