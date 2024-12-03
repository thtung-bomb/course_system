import React from "react";
import { TopicsContainer, TopicCard2 } from "../style/style";

const TitleStudent: React.FC = () => {
  return (
    <>
      <TopicsContainer>
        <TopicCard2>
          <h3> Lifetime Access </h3>
        </TopicCard2>
        <TopicCard2>
          <h3> Cursus FAQ</h3>
        </TopicCard2>
        <TopicCard2>
          <h3>Downloading Courses</h3>
        </TopicCard2>
        <TopicCard2>
          <h3>Refund a Course</h3>
        </TopicCard2>
        <TopicCard2>
          <h3>How to Become an Instructor: FAQ</h3>
        </TopicCard2>
        <TopicCard2>
          <h3>How to Solve Payment Issues</h3>
        </TopicCard2>
      </TopicsContainer>
    </>
  );
};

export default TitleStudent;
