import React from "react";
import styled from "styled-components";

import { IoMdCode } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiMonitor, CiRuler, CiCamera, CiMusicNote1 } from "react-icons/ci";
import { LuLineChart } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import img1 from "@assets/get-img.jpg";
import ProfileHome from "@components/ProfileHome";
import img2 from "@assets/1.jpg";
import LiveS from "@components/RightLiveStream";

const ContainerLeft = styled.div`
  position: relative;
  width: 100%;
  margin-top: 80px;
  margin-left: 20px;
  padding-right: 50px;
`;

const LiveStreamSection = styled.div`
  background-color: #fff;
  width: 100%;
  float: left;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 30px;
  border: 1px solid #efefef;
  h4 {
    font-size: 16px;
    color: #333;
    float: left;
    font-weight: 600;
    font-family: sans-serif;
    position: relative;
    bottom: 10px;
    left: 20px;
  }
`;

const SectionHeader = styled.div`
  float: left;
  width: 100%;
  padding: 20px 15px;
  height: 10px;
  position: relative;
  right: 15px;

  &::after {
    content: "";
    display: block;
    width: 104%;
    height: 0.6%;
    background-color: #efefef;
    position: absolute;
    bottom: 0;
    left: 10px;
  }
`;

const RecommendationSection = styled.div`
  background-color: #fff;
  width: 100%;
  float: left;
  padding: 30px 25px 40px;

  border-radius: 3px;
  border: 1px solid #efefef;
  position: relative;
  margin-bottom: 30px;
  background-image: url(${img1});
  background-size: cover;
  height: 3%;
  h4 {
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    font-family: sans-serif;
    margin-bottom: 13px;
  }
  p {
    font-size: 14px;
    color: #f9f9f9;
    font-weight: 400;
    font-family: sans-serif;
    margin-bottom: 27px;
  }
`;

const Btn2 = styled.button`
  height: 40px;
  padding: 0 20px;
  border: 0;
  border-radius: 3px;
  color: #fff;
  background-color: red;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: rgb(154, 6, 6);
  }
`;

const CategoryList = styled.div`
  float: left;
  width: 100%;
  li {
    display: block;
    float: left;
    width: 100%;
  }
`;

const CategoryItem = styled.a`
  float: left;
  width: 100%;
  padding: 10px 20px;
  font-size: 14px;
  font-family: sans-serif;
  color: #686f7a;
  text-align: left;
  text-decoration: none;
  &:hover {
    color: #343639;
  }
  i {
    margin-right: 10px;
    font-size: 120%;
  }
`;

const InstructorSection = styled.div`
  background-color: #fff;
  width: 100%;
  float: left;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #efefef;
  position: relative;
  text-align: center;
  margin-bottom: 30px;
  p {
    font-size: 15px;
    color: #686f7a;
    font-weight: 400;
    font-family: sans-serif;
    margin-bottom: 32px;
    line-height: 26px;
    width: 100%;
    position: relative;
  }
  h4 {
    font-size: 20px;
  }
`;

const RightHome = () => {
  const profileData = {
    img: img2,
    name: "Joginder Singh",
    description: "Web Developer, Designer, and Teacher",
    stats1: "615K Students",
    stats2: "12 Courses",
  };

  return (
    <ContainerLeft>
      <ProfileHome
        img={profileData.img}
        name={profileData.name}
        description={profileData.description}
        stats1={profileData.stats1}
        stats2={profileData.stats2}
      />
      <LiveS />
      <RecommendationSection>
        <h4>Get personalized recommendations</h4>
        <p>Answer a few questions for your top picks</p>
        <Btn2>Get Started</Btn2>
      </RecommendationSection>
      <LiveStreamSection>
        <SectionHeader>
          <h4>Top Categories</h4>
        </SectionHeader>
        <CategoryList>
          <li>
            <CategoryItem href="#">
              <i>
                <IoMdCode />
              </i>
              Development
            </CategoryItem>
          </li>
          <li>
            <CategoryItem href="#">
              <i>
                <IoStatsChartOutline />
              </i>
              Business
            </CategoryItem>
          </li>
          <li>
            <CategoryItem href="#">
              <i>
                <CiMonitor />
              </i>
              IT and Software
            </CategoryItem>
          </li>
          <li>
            <CategoryItem href="#">
              <i>
                <CiRuler />
              </i>
              Design
            </CategoryItem>
          </li>
          <li>
            <CategoryItem href="#">
              <i>
                <LuLineChart />
              </i>
              Marketing
            </CategoryItem>
          </li>
          <li>
            <CategoryItem href="#">
              <i>
                <IoBookOutline />
              </i>
              Personal Development
            </CategoryItem>
          </li>
          <li>
            <CategoryItem href="#">
              <i>
                <CiCamera />
              </i>
              Photography
            </CategoryItem>
          </li>
          <li>
            <CategoryItem href="#">
              <i>
                <CiMusicNote1 />
              </i>
              Music
            </CategoryItem>
          </li>
        </CategoryList>
      </LiveStreamSection>
      <InstructorSection>
        <h4>Become an Instructor</h4>
        <p>
          Top instructors from around the world teach millions of students on
          Cursus. We provide the tools and skills to teach what you love.
        </p>
        <Btn2>Start Teaching</Btn2>
      </InstructorSection>
    </ContainerLeft>
  );
};

const ProfilePage: React.FC = () => {
  return (
    <div>
      <RightHome />
    </div>
  );
};

export default ProfilePage;
