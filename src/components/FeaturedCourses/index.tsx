/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaShoppingCart, FaShareAlt, FaHeart } from "react-icons/fa";
import { HiMiniNoSymbol } from "react-icons/hi2";
import { ImFlag, ImPlay2, ImStarEmpty } from "react-icons/im";
import styled from "styled-components";
import React from "react";
import { timeAgo, formatNumber } from "@utils/convertUnit.ts";

interface MyCourseProps {
  imageURL?: string;
  title: string;
  type: string;
  author: string;
  view: string;
  day: string;
  isFeatured: boolean;
  customStyle?: {
    container?: React.CSSProperties;
    imgWight?: React.CSSProperties;
    content?: React.CSSProperties;
    dotMenu?: React.CSSProperties;
    courseReact?: React.CSSProperties;
    courseInfo?: React.CSSProperties;
    typeP?: React.CSSProperties;
    courseHours?: React.CSSProperties;
    courseRate?: React.CSSProperties;
    arrowContainer?: React.CSSProperties;
    courseFooter?: React.CSSProperties;
    nameAuthor?: React.CSSProperties;
  };
}

const FeatCourses = styled.div<{ style?: React.CSSProperties }>`
  width: 280px;
  padding: 10px;
  border: 1px solid #efefef;
  transition: 0.5s;
  background: #fff;

  &:hover {
    transform: translateY(3px);
  }
`;

const CoursePlay = styled(ImPlay2)`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

const CourseImage = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  &:hover ${CoursePlay} {
    display: block;
  }
`;

const ArrowContainer = styled.div<{ style?: React.CSSProperties }>`
  display: flex;
  position: absolute;
  background-color: transparent !important;
  align-items: center;
  top: 10px;
  right: 0;
`;

const Arrow = styled.div`
  left: -8px;
  position: absolute;
  padding: 8px;
  background: #f08e00;
  transform: rotate(45deg);
`;

const ArrowContainerSpan = styled.span`
  font-weight: bold;
  font-size: 14px;
  padding: 5px 20px;
  color: white;
  background-color: #f08e00;
`;

const CourseRate = styled.span<{ style?: React.CSSProperties }>`
  position: absolute;
  padding: 3px 15px 3px 10px;
  display: flex;
  color: white;
  background-color: #fdcc0d;
  border-radius: 4px;
  gap: 6px;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  top: 8px;
  left: 10px;
  font-family: "Roboto", sans-serif;
`;

const CourseHours = styled.span<{ style?: React.CSSProperties }>`
  position: absolute;
  font-size: 12px;
  right: 12px;
  bottom: 12px;
  border-radius: 4px;
  padding: 3px 5px;
  color: white;
  cursor: pointer;
  background-color: #323131;
`;

const Img = styled.img<{ style?: React.CSSProperties }>`
  border-radius: 2px;
  object-fit: cover;
  width: 100%;
`;

const CourseReact = styled.div<{ style?: React.CSSProperties }>`
  margin: 10px 5px 0;
  color: #777777;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #e0dddc;
  font-size: 40px;
`;

const CourseReactSpan = styled.span`
  font-size: 12px;
`;

const SubMenu = styled.ul`
  display: none;
  position: absolute;
  width: 160px;
  top: 100%;
  left: -150px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DotMenu = styled.span`
  position: absolute;
  right: 0;
  width: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  &:hover ${SubMenu} {
    display: block;
    right: 0;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    cursor: pointer;
  }
`;

const ItemSubmenu = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover {
    background-color: #ffcaca;
  }
`;

const CourseInfo = styled.div`
  margin: 20px 0;
`;

const CourseInfoP = styled.p`
  color: #686f7a;
  cursor: pointer;
  margin: 20px 0;
  font-size: 13px;

  &:hover {
    color: #000000;
    cursor: pointer;
  }
`;

const CourseInfoH4 = styled.h4`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
`;

const CourseFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Price = styled.h3`
  display: flex !important;
  align-items: center;
  font-weight: 550;
  font-family: "Roboto", sans-serif !important;
  display: contents;
  color: #333;
  gap: 20px;
  font-size: 18px;
`;

const DotSub = styled.span`
  &:hover {
    color: #0f0f0f;
    cursor: pointer;
  }
`;

const Icon = styled(FaShoppingCart)`
  display: none;

  ${FeatCourses}:hover & {
    display: inline;
  }

  &:hover {
    display: inline;
    color: #fc0e03;
    cursor: pointer;
  }
`;

const Author = styled.p`
  span {
    font-size: 14px;
    color: #686f7a;
  }

  .name {
    color: #333;
    font-weight: 550;
  }

  .name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const FeaturedCourse: React.FC<MyCourseProps> = ({
  imageURL,
  title,
  type,
  author,
  view,
  day,
  customStyle,
  isFeatured,
  courseImageWidth = "100%",
  courseContainer = "280px",
  MaxCourseContainer = "100%",
}) => {
  return (
    <>
      <FeatCourses
        style={{
          ...customStyle?.container,
          width: courseContainer,
          maxWidth: MaxCourseContainer,
        }}
      >
        <CourseImage
          style={{ ...customStyle?.imgWight, width: courseImageWidth }}
        >
          {isFeatured && (
            <>
              <CourseRate style={customStyle?.courseRate}>
                <ImStarEmpty />
                <span>5.0</span>
              </CourseRate>
              <ArrowContainer style={customStyle?.arrowContainer}>
                <Arrow />
                <ArrowContainerSpan>Best Saler</ArrowContainerSpan>
              </ArrowContainer>
            </>
          )}
          <Img alt="" src={imageURL || ""} />
          <CoursePlay />
          <CourseHours style={customStyle?.courseHours}>36 hours</CourseHours>
        </CourseImage>
        <div style={customStyle?.content}>
          <CourseReact style={customStyle?.courseReact}>
            <CourseReactSpan>{formatNumber(view)} views</CourseReactSpan>
            <Dot />
            <CourseReactSpan>{timeAgo(day)}</CourseReactSpan>
            <DotMenu style={customStyle?.dotMenu}>
              <DotSub>⁝</DotSub>
              <SubMenu>
                <ItemSubmenu>
                  <FaShareAlt />
                  <span>Share</span>
                </ItemSubmenu>
                <ItemSubmenu>
                  <FaHeart />
                  <span>Save</span>
                </ItemSubmenu>
                <ItemSubmenu>
                  <HiMiniNoSymbol />
                  <span>Not interested</span>
                </ItemSubmenu>
                <ItemSubmenu>
                  <ImFlag />
                  <span>Report</span>
                </ItemSubmenu>
              </SubMenu>
            </DotMenu>
          </CourseReact>
          <CourseInfo style={customStyle?.courseInfo}>
            <CourseInfoH4>{title}</CourseInfoH4>
            <CourseInfoP style={customStyle?.typeP}>{type}</CourseInfoP>
          </CourseInfo>
          <CourseFooter style={customStyle?.courseFooter}>
            <Author>
              <span>By</span>{" "}
              <span className="name" style={customStyle?.nameAuthor}>
                {author}
              </span>
            </Author>
            <Price>
              <Icon />
              <span>$10</span>
            </Price>
          </CourseFooter>
        </div>
      </FeatCourses>
    </>
  );
};

export default FeaturedCourse;
