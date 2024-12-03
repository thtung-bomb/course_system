import styled from "styled-components";
import CourseList from "@components/CourseList";
import RightHome from "./RightHome";
import Course from "@components/Course";
import LiveStreamCard from "@components/Slide/LiveStreamCard";
import InstructorsSlide from "@components/Slide/InstructorsSlide";
import StudentCommentsSlide from "@components/Slide/StudentCommentsSlide";
import { useOutletContext } from "react-router-dom";

const Content = ({}) => {
  const courseData = [
    {
      author: "Jane Smith",
      day: "2024-06-20",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500",
      isFeatured: true,
    },
    {
      author: "Jane Smith",
      day: "2024-06-25",
      imageURL: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Exploring the Latest Advancements in Artificial Intelligence",
      type: "Article",
      view: "1500000000",
      isFeatured: true,
    },
  ];

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

  const WrapMain = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const WrapContent = styled.div`
    display: flex;
  `;
  const WrapCourses = styled.div`
    width: 72%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-left: 20px;
  `;

  const isToolbarOpen = useOutletContext();

  return (
    <WrapMain>
      <WrapContent>
        <WrapCourses>
          <LiveStreamCard />
          <CourseList
            coursesData={courseData}
            titleItem="Featured Course"
            toolbarRetracted={isToolbarOpen}
          />
          <CourseList
            coursesData={courseData1}
            titleItem="Newest Courses"
            toolbarRetracted={isToolbarOpen}
          />
          <Course />
          <InstructorsSlide />
        </WrapCourses>
        <RightHome />
      </WrapContent>
      <StudentCommentsSlide />
    </WrapMain>
  );
};

export default Content;
