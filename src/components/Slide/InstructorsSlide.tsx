import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareTwitter, FaSquareYoutube } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaSquareFull } from "react-icons/fa";
import user from "@assets/images/imgSlide/img-1.jpg";
import user1 from "@assets/images/imgSlide/img-2.jpg";
import user2 from "@assets/images/imgSlide/img-3.jpg";
import { Link, useOutletContext } from "react-router-dom";

const WrapInstructors = styled.div<{ isToolbarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  font-family: sans-serif;
  max-width: ${({ isToolbarOpen }) => (isToolbarOpen ? "914px" : "100%")};
`;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const InstructorsWrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InstructorsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;
const InstructorsSeeAll = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: #afafaf;
  text-decoration: none;
  padding-top: 3px;
  margin-bottom: 20px;
  /* margin-right: 12px; */
  &:hover {
    color: #333;
  }
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  cursor: default;
`;

const Slide = styled.div`
  /* width: 291px; */
  margin-right: 20px;
  transition: transform 0.3s ease;
  /* padding: 0px 1px; */
  /* border: 1px solid; */
`;

const NavButton = styled.button`
  background: whitesmoke;
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;

  &:hover {
    background: #ed2a26;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const LeftNavButton = styled(NavButton)`
  left: 10px;
`;

const RightNavButton = styled(NavButton)`
  right: 8px;
`;

const ProfileCard = styled.div`
  background-color: #fff;
  width: 292px;
  height: 324.57px;
  padding: 15px 15px 20px 15px;
  border-radius: 5px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
`;

const ProfileImg = styled.div`
  padding: 20px;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    display: inline-block;
    border-radius: 100%;
    border: 2px solid #fff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  /* margin-bottom: 20px; */
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileName = styled.a`
  font-size: 16px;
  font-weight: bolder;
  font-family: sans-serif;
  color: #333;
  text-align: center;
  text-decoration: none;
`;

const VerifyBadge = styled.div`
  font-size: 18px;
  line-height: 15px;
  /* padding-top: 4px; */
  color: rgb(18, 86, 246);
  padding-left: 3px;
`;

const ProfileTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  color: #686f7a;
  width: 250px;
  height: 19.9875px;
  margin: 10px 0px 17px;
  display: block;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  line-height: 19.999px;
  margin-left: 8px;
`;

const SocialLinks = styled.ul`
  list-style: none;
  /* padding-top: 10px; */

  li {
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle;
    margin-bottom: 0;

    a {
      font-size: 35px;
      width: 35px;
      height: 36px;
      border-radius: 3px;
      text-align: center;
      padding: 9px 0;
      color: #fff;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

const FacebookIcon = styled(AiFillFacebook)`
  color: #4183c4;
`;

const TwitterIcon = styled(FaSquareTwitter)`
  color: #1da1f2;
`;

const LinkedinIcon = styled(RxLinkedinLogo)`
  color: #8d6cab;
`;

const YoutubeIcon = styled(FaSquareYoutube)`
  color: red;
`;

const FaSquareFullIcon = styled(FaSquareFull)`
  font-size: 3px;
  padding-left: 1px;
  padding-right: 1px;
  padding-bottom: 2px;
`;

const ProfileStats = styled.div`
  font-size: 12px;
  padding-top: 15px;
  font-weight: 400;
  font-family: sans-serif;
  color: #686f7a;
  text-align: center;
  cursor: text;
`;

const instructors = [
  {
    img: user,
    name: "John Doe",
    title: "Wordpress & Plugin Tutor",
    students: "100K Students",
    courses: "15 Courses",
  },
  {
    img: user1,
    name: "Kerstin Cable",
    title: "Language Learning Coach, Writer, Online Tutor",
    students: "14K Students",
    courses: "11 Courses",
  },
  {
    img: user2,
    name: "Jose Portilla",
    title: "Head of Data Science, Pierian Data Inc.",
    students: "1M Students",
    courses: "25 Courses",
  },
  {
    img: user,
    name: "John Doe",
    title: "Wordpress & Plugin Tutor",
    students: "100K Students",
    courses: "15 Courses",
  },
  {
    img: user1,
    name: "Kerstin Cable",
    title: "Language Learning Coach, Writer, Online Tutor",
    students: "14K Students",
    courses: "11 Courses",
  },
  {
    img: user2,
    name: "Jose Portilla",
    title: "Head of Data Science, Pierian Data Inc.",
    students: "1M Students",
    courses: "25 Courses",
  },
  {
    img: user,
    name: "John Doe",
    title: "Wordpress & Plugin Tutor",
    students: "100K Students",
    courses: "15 Courses",
  },
];

const InstructorsSlide: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isToolbarOpen: boolean = useOutletContext();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPosition, setStartPosition] = useState<number>(0);
  const [currentTranslate, setCurrentTranslate] = useState<number>(0);
  const [prevTranslate, setPrevTranslate] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);

  const slideWidth = 312;
  const containerWidth = sliderRef.current?.offsetWidth || 0;
  const totalWidth = instructors.length * slideWidth;
  const minTranslate = containerWidth - totalWidth + 27;
  const maxTranslate = 0;

  useEffect(() => {
    const handleMouseUpOrLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        setPrevTranslate(currentTranslate);
      }
    };

    window.addEventListener("mouseup", handleMouseUpOrLeave);
    window.addEventListener("mouseleave", handleMouseUpOrLeave);

    return () => {
      window.removeEventListener("mouseup", handleMouseUpOrLeave);
      window.removeEventListener("mouseleave", handleMouseUpOrLeave);
    };
  }, [isDragging, currentTranslate]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartPosition(event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentPosition = event.clientX;
    const distance = currentPosition - startPosition;
    setCurrentTranslate(prevTranslate + distance);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentPosition = event.touches[0].clientX;
    const distance = currentPosition - touchStartX;
    setCurrentTranslate(prevTranslate + distance);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
  };

  const slideLeft = () => {
    setCurrentTranslate((prev) => {
      const newTranslate = prev + slideWidth;
      const limitedTranslate = Math.min(maxTranslate, newTranslate);
      setPrevTranslate(limitedTranslate);
      return limitedTranslate;
    });
  };

  const slideRight = () => {
    setCurrentTranslate((prev) => {
      const newTranslate = prev - slideWidth;
      const limitedTranslate = Math.max(minTranslate, newTranslate);
      setPrevTranslate(limitedTranslate);
      return limitedTranslate;
    });
  };

  return (
    <WrapInstructors isToolbarOpen={isToolbarOpen}>
      <InstructorsWrapTitle>
        <InstructorsTitle>Popular Instructors</InstructorsTitle>
        <InstructorsSeeAll to="/">See all</InstructorsSeeAll>
      </InstructorsWrapTitle>
      <SliderContainer ref={sliderRef}>
        <LeftNavButton
          onClick={slideLeft}
          disabled={currentTranslate === maxTranslate}
        >
          <FaChevronLeft />
        </LeftNavButton>
        <Slider
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ transform: `translateX(${currentTranslate}px)` }}
        >
          {instructors.map((instructor) => (
            <Slide className="slide" key={instructor.name}>
              <ProfileCard>
                <ProfileImg>
                  <a href="#">
                    <img src={instructor.img} alt="Profile" />
                  </a>
                </ProfileImg>
                <ProfileContent>
                  <ProfileHeader>
                    <ProfileName href="#">{instructor.name}</ProfileName>
                    <VerifyBadge title="Verify">
                      <IoCheckmarkCircleOutline />
                    </VerifyBadge>
                  </ProfileHeader>
                  <ProfileTitle>{instructor.title}</ProfileTitle>
                  <SocialLinks>
                    <li>
                      <a href="#" className="facebook">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <TwitterIcon />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkedin">
                        <LinkedinIcon />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="youtube">
                        <YoutubeIcon />
                      </a>
                    </li>
                  </SocialLinks>
                  <ProfileStats>
                    <span className="stats">
                      {instructor.students} <FaSquareFullIcon />
                    </span>
                    <span className="stats"> {instructor.courses}</span>
                  </ProfileStats>
                </ProfileContent>
              </ProfileCard>
            </Slide>
          ))}
        </Slider>
        <RightNavButton
          onClick={slideRight}
          disabled={currentTranslate === minTranslate}
        >
          <FaChevronRight />
        </RightNavButton>
      </SliderContainer>
    </WrapInstructors>
  );
};

export default InstructorsSlide;
