// CoursesContent.tsx
import React, { useEffect, useState } from "react";
import { PiVideoBold } from "react-icons/pi";
import styled from "styled-components";
// Styled components
const Section = styled.div`
  margin-bottom: 20px;
  border: solid 1px #efefef;
  background: #fff;
  padding: 15px 30px 15px 20px;
`;

const SectionTitle = styled.h2`
  color: #333;
  display: flex;
  gap: 4px;
  cursor: pointer;
  justify-content: space-between;
`;
const WrapTitle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const WrapInfor = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;
const NumberLectures = styled.p`
  white-space: nowrap;
  font-size: 16px;
  color: #686f7a;
  font-weight: 400;
`;
const TimeLectures = styled.p`
  white-space: nowrap;
  font-size: 16px;
  color: #686f7a;
  font-weight: 400;
`;
const LectureList = styled.ul<{ isVisible: boolean }>`
  list-style-type: none;
  padding: 0;
  max-height: ${({ isVisible }) => (isVisible ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const LectureItem = styled.li`
  display: flex;
  padding: 12px 0px 12px 30px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  color: #686f7a;
  font-weight: 400;
  justify-content: space-between;
`;

const LectureTitle = styled.h3`
  color: #686f7a;
  font-weight: 400;
`;

const LectureDuration = styled.span`
  color: #666;
`;

const LectureDescription = styled.p`
  margin: 0;
`;
const ExpandButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;
const courseData = [
  {
    sectionTitle: "Introduction to this Course",
    totalLectures: 8,
    totalTime: "22:08",
    lectures: [
      {
        id: 1,
        title: "Welcome and Course Overview",
        duration: "2:30",
        description:
          "An introduction to the course and what you can expect to learn.",
      },
      {
        id: 2,
        title: "Setting Up Your Development Environment",
        duration: "3:15",
        description:
          "A guide on how to set up your development environment for the course.",
      },
      {
        id: 3,
        title: "Introduction to HTML",
        duration: "2:45",
        description:
          "An overview of HTML and its importance in web development.",
      },
      {
        id: 4,
        title: "Introduction to CSS",
        duration: "2:50",
        description:
          "An overview of CSS and how it is used to style web pages.",
      },
      {
        id: 5,
        title: "Introduction to JavaScript",
        duration: "3:00",
        description:
          "An overview of JavaScript and its role in web development.",
      },
      {
        id: 6,
        title: "Basic HTML Tags",
        duration: "2:20",
        description:
          "A look at some of the most common HTML tags and how to use them.",
      },
      {
        id: 7,
        title: "Styling with CSS",
        duration: "2:38",
        description: "A guide on how to use CSS to style your HTML elements.",
      },
      {
        id: 8,
        title: "JavaScript Basics",
        duration: "3:50",
        description:
          "An introduction to JavaScript basics and how to write your first script.",
      },
    ],
  },
  {
    sectionTitle: "Introduction to Front End Development",
    totalLectures: 11,
    totalTime: "30:45",
    lectures: [
      {
        id: 1,
        title: "Overview of Front End Development",
        duration: "3:00",
        description: "An introduction to the world of front end development.",
      },
      {
        id: 2,
        title: "HTML Basics",
        duration: "2:50",
        description: "Understanding the basics of HTML.",
      },
      {
        id: 3,
        title: "CSS Basics",
        duration: "3:10",
        description: "Understanding the basics of CSS.",
      },
      {
        id: 4,
        title: "JavaScript Basics",
        duration: "2:45",
        description: "Understanding the basics of JavaScript.",
      },
      {
        id: 5,
        title: "Responsive Design",
        duration: "2:35",
        description: "An introduction to responsive web design.",
      },
      {
        id: 6,
        title: "Bootstrap Introduction",
        duration: "3:20",
        description: "Getting started with Bootstrap for responsive design.",
      },
      {
        id: 7,
        title: "CSS Flexbox",
        duration: "3:00",
        description: "Understanding and using CSS Flexbox.",
      },
      {
        id: 8,
        title: "CSS Grid",
        duration: "2:50",
        description: "Understanding and using CSS Grid.",
      },
      {
        id: 9,
        title: "JavaScript DOM Manipulation",
        duration: "3:10",
        description: "Manipulating the DOM with JavaScript.",
      },
      {
        id: 10,
        title: "JavaScript Events",
        duration: "2:55",
        description: "Handling events in JavaScript.",
      },
      {
        id: 11,
        title: "Project: Building a Simple Website",
        duration: "3:50",
        description:
          "Applying what you've learned by building a simple website.",
      },
    ],
  },
];
const calculateTotalTime = (lectures) => {
  let totalMinutes = 0;
  let totalSeconds = 0;

  lectures.forEach((lecture) => {
    const [minutes, seconds] = lecture.duration.split(":").map(Number);
    totalMinutes += minutes;
    totalSeconds += seconds;
  });

  totalMinutes += Math.floor(totalSeconds / 60);
  totalSeconds = totalSeconds % 60;

  return `${totalMinutes}:${totalSeconds.toString().padStart(2, "0")}`;
};

const calculateGrandTotals = (courseData) => {
  let totalLectures = 0;
  let totalMinutes = 0;
  let totalSeconds = 0;

  courseData.forEach((section) => {
    totalLectures += section.lectures.length;
    section.lectures.forEach((lecture) => {
      const [minutes, seconds] = lecture.duration.split(":").map(Number);
      totalMinutes += minutes;
      totalSeconds += seconds;
    });
  });

  totalMinutes += Math.floor(totalSeconds / 60);
  totalSeconds = totalSeconds % 60;

  return {
    totalLectures,
    totalTime: `${totalMinutes}:${totalSeconds.toString().padStart(2, "0")}`,
  };
};
const CoursesContent: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState<boolean>(false);
  const [calculatedData, setCalculatedData] = useState([]);
  const [grandTotals, setGrandTotals] = useState({
    totalLectures: 0,
    totalTime: "0:00",
  });

  useEffect(() => {
    const newData = courseData.map((section) => ({
      ...section,
      totalLectures: section.lectures.length,
      totalTime: calculateTotalTime(section.lectures),
    }));
    setCalculatedData(newData);

    const totals = calculateGrandTotals(courseData);
    setGrandTotals(totals);
  }, []);

  const toggleSection = (index: number) => {
    setVisibleSection(visibleSection === index ? null : index);
  };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
    setVisibleSection(expandAll ? null : 0);
  };
  return (
    <div>
      <ExpandButton onClick={toggleExpandAll}>
        {expandAll ? "Collapse All" : "Expand All"}
      </ExpandButton>
      <div>
        <p>Total Lectures: {grandTotals.totalLectures}</p>
        <p>Total Time: {grandTotals.totalTime}</p>
      </div>
      {courseData.map((section, index) => (
        <Section key={index}>
          <SectionTitle onClick={() => toggleSection(index)}>
            <WrapTitle>
              <PiVideoBold />
              {section.sectionTitle}
            </WrapTitle>
            <WrapInfor>
              <NumberLectures> {section.totalLectures} lectures</NumberLectures>{" "}
              <TimeLectures>{section.totalTime}</TimeLectures>
            </WrapInfor>
          </SectionTitle>
          <LectureList isVisible={expandAll || visibleSection === index}>
            {section.lectures.map((lecture) => (
              <LectureItem key={lecture.id}>
                <LectureTitle>{lecture.title}</LectureTitle>
                <LectureDuration>{lecture.duration}</LectureDuration>
              </LectureItem>
            ))}
          </LectureList>
        </Section>
      ))}
    </div>
  );
};

export default CoursesContent;
