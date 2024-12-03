import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import user from "@assets/images/imgSlide/img-1.jpg";
import user1 from "@assets/images/imgSlide/img-2.jpg";
import user2 from "@assets/images/imgSlide/img-3.jpg";
import { useOutletContext } from "react-router-dom";
const WrapStudent = styled.div<{ isToolbarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  max-width: ${({ isToolbarOpen }) => (isToolbarOpen ? "1232px" : "1476px")};
  margin-top: 50px;
  margin-left: 20px;
  margin-bottom: 50px;
`;

const StudentWrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StudentTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  cursor: default;
  height: 242px;
  gap: 20px;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: system-ui, sans-serif;
  width: 394px;
  height: 236px;
  padding: 30px;
  background-color: #fff;
  border-radius: 2px;
  color: #333;
  text-align: left;
  transition: transform 0.3s ease;

  .texts {
    font-size: 14px;
    color: #686f7a;
    height: 96px;
    line-height: 25px;
    cursor: text;
  }

  .user-info {
    display: flex;
    align-items: center;
    justify-content: baseline;
  }

  .user-info img {
    width: 50px;
    height: 50px;
    margin-top: 9px;
    border-radius: 50%;
  }

  .user-info p {
    padding: 0px 0px 0px 15px;
    font-size: 16px;
    cursor: text;
  }
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
  width: 25px;
  height: 25px;
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
  left: 14px;
`;

const RightNavButton = styled(NavButton)`
  right: 4px;
`;

const comments = [
  {
    text: "Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi, in placerat eros ultricies vitae. Praesent pellentesque blandit scelerisque. Suspendisse potenti.",
    name: "Jassica William",
    img: user,
  },
  {
    text: "Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum.",
    name: "Rock Smith",
    img: user1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci.",
    name: "Luoci Marchant",
    img: user2,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci.",
    name: "Luoci Marchant",
    img: user2,
  },
  {
    text: "Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi, in placerat eros ultricies vitae. Praesent pellentesque blandit scelerisque. Suspendisse potenti.",
    name: "Jassica William",
    img: user,
  },
  {
    text: "Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum.",
    name: "Rock Smith",
    img: user1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci.",
    name: "Luoci Marchant",
    img: user2,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci.",
    name: "Luoci Marchant",
    img: user2,
  },
];

const StudentCommentsSlide: React.FC = () => {
  const isToolbarOpen: boolean = useOutletContext();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPosition, setStartPosition] = useState<number>(0);
  const [currentTranslate, setCurrentTranslate] = useState<number>(0);
  const [prevTranslate, setPrevTranslate] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);

  const slideWidth = 414;
  const containerWidth = sliderRef.current?.offsetWidth || 0;
  const totalWidth = comments.length * slideWidth;
  const minTranslate = containerWidth - totalWidth + 10;
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
    <WrapStudent isToolbarOpen={isToolbarOpen}>
      <StudentWrapTitle>
        <StudentTitle>What Our Student Have Today</StudentTitle>
      </StudentWrapTitle>
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
          {comments.map((comment, index) => (
            <Slide className="slide" key={index}>
              <p className="texts">"{comment.text}"</p>
              <div className="user-info">
                <img src={comment.img} alt={comment.name} />
                <p>{comment.name}</p>
              </div>
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
    </WrapStudent>
  );
};

export default StudentCommentsSlide;
