import React from "react";
import SavedCourse from "@components/SavedCourse";

const SavedCourseHome: React.FC = () => {
  const sampleCoursesData = [
    {
      author: "John Doe",
      day: "2023-06-12",
      imageURL:
        "https://i.ytimg.com/vi/x7X9w_GIm1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAVbgV-ihxqr1-ZcRUevMugF7X60A",
      title: "Complete Python Bootcamp",
      type: "Web Development | Python",
      view: "1109000",
      isFeatured: true,
    },
    {
      author: "John Doe",
      day: "2023-06-12",
      imageURL:
        "https://i.ytimg.com/vi/x7X9w_GIm1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAVbgV-ihxqr1-ZcRUevMugF7X60A",
      title: "Complete Python Bootcamp",
      type: "Web Development | Python",
      view: "1109000",
      isFeatured: true,
    },
    {
      author: "John Doe",
      day: "2023-06-12",
      imageURL:
        "https://i.ytimg.com/vi/x7X9w_GIm1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAVbgV-ihxqr1-ZcRUevMugF7X60A",
      title: "Complete Python Bootcamp",
      type: "Web Development | Python",
      view: "1109000",
      isFeatured: true,
    },
    {
      author: "John Doe",
      day: "2023-06-12",
      imageURL:
        "https://i.ytimg.com/vi/x7X9w_GIm1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAVbgV-ihxqr1-ZcRUevMugF7X60A",
      title: "Complete Python Bootcamp",
      type: "Web Development | Python",
      view: "1109000",
      isFeatured: true,
    },
  ];

  return (
    <div>
      <SavedCourse coursesData={sampleCoursesData} />
    </div>
  );
};

export default SavedCourseHome;
