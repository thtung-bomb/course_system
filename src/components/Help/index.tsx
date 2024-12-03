import React, { useState } from "react";
import "./style/style";
import Title1 from "./components/TitleInstructor";
import Title2 from "./components/TitleStudent";
import {
  HelpContainer,
  HelpSearchSection,
  HelpSearchTitle,
  SearchContainer,
  SearchInput,
  SearchIcon,
  HelpTopicSection,
  TabsContainer,
  Tab,
  TopicsGrid,
  TopicCard,
  BackgroundIcon,
  TopicTitle,
  TopicDescription,
  FontTitle,
  FaqTitle,
  Wallet,
  Bull,
  FileCheck,
  FileEdit,
  Window,
  FileShield,
  User,
  Desktop,
  Book,
  Mobile,
} from "./style/style";

const Help: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Instructor");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const instructorTopics = [
    {
      icon: <Wallet />,
      title: "Payments",
      description: "Understand the revenue share and how to receive payments.",
    },
    {
      icon: <Bull />,
      title: "Selling & Promotion",
      description: "Learn about the announcement and promotional tools.",
    },
    {
      icon: <FileCheck />,
      title: "Quality Standards",
      description: "Learn what it takes to create a high quality course.",
    },
    {
      icon: <FileEdit />,
      title: "Course Building",
      description: "Build your course curriculum and landing page.",
    },
    {
      icon: <Window />,
      title: "Course Management",
      description: "Maintain your course and engage with students.",
    },
    {
      icon: <FileShield />,
      title: "Trust & Safety",
      description: "Policy and copyright questions and guidance.",
    },
  ];

  const studentTopics = [
    {
      icon: <FileCheck />,
      title: "Getting Started",
      description: "Learn how Cursus works and how to start learning.",
    },
    {
      icon: <User />,
      title: "Account/Profile",
      description: "Manage your account settings.",
    },
    {
      icon: <Desktop />,
      title: "Troubleshooting",
      description: "Experiencing a bug? Check here.",
    },
    {
      icon: <Book />,
      title: "Course Taking",
      description: "Everything about taking a course on Udemy.",
    },
    {
      icon: <Wallet />,
      title: "Purchase/Refunds",
      description: "Learn about coupons, how to send gifts, and refunds.",
    },
    {
      icon: <Mobile />,
      title: "Mobile",
      description: "On the go? Learn about our mobile app.",
    },
  ];

  const getFilteredTopics = (topics: any[]) => {
    return topics.filter((topic) =>
      topic.title.toLowerCase().includes(searchQuery),
    );
  };

  const displayedTopics =
    activeTab === "Instructor"
      ? getFilteredTopics(instructorTopics)
      : getFilteredTopics(studentTopics);

  return (
    <HelpContainer>
      <HelpSearchSection>
        <HelpSearchTitle>How may we help you</HelpSearchTitle>
        <SearchContainer>
          <SearchInput
            type="search"
            className="search-input"
            placeholder="search for solution"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <SearchIcon />
        </SearchContainer>
      </HelpSearchSection>
      <HelpTopicSection>
        <TabsContainer>
          <Tab
            className={`tab ${activeTab === "Instructor" ? "active" : ""}`}
            onClick={() => handleTabClick("Instructor")}
          >
            Instructor
          </Tab>
          <Tab
            className={`tab ${activeTab === "Student" ? "active" : ""}`}
            onClick={() => handleTabClick("Student")}
          >
            Student
          </Tab>
        </TabsContainer>
        <FontTitle>
          {activeTab === "Instructor"
            ? "Select a topic to search for help"
            : "Select a topic to search for help"}
        </FontTitle>

        <TopicsGrid>
          {displayedTopics.map((topic, index) => (
            <TopicCard key={index}>
              <BackgroundIcon>{topic.icon}</BackgroundIcon>
              <TopicTitle>{topic.title}</TopicTitle>
              <TopicDescription>{topic.description}</TopicDescription>
            </TopicCard>
          ))}
        </TopicsGrid>

        <FaqTitle>Frequently Asked Questions</FaqTitle>
        {activeTab === "Instructor" ? <Title1 /> : <Title2 />}
      </HelpTopicSection>
    </HelpContainer>
  );
};

export default Help;
