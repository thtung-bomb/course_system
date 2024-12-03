import React, { useRef, useState, useEffect, useCallback } from "react";
import { FaCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import user from "@assets/images/imgSlide/img-1.jpg";
import user1 from "@assets/images/imgSlide/img-2.jpg";
import user2 from "@assets/images/imgSlide/img-3.jpg";
import user3 from "@assets/images/imgSlide/img-3.jpg";
import user4 from "@assets/images/imgSlide/img-3.jpg";
import { useOutletContext } from "react-router-dom";

interface MyCarouselProps {
  customStyle?: {
    warpLiveStream?: React.CSSProperties;
    liveStreamContainer?: React.CSSProperties;
    card?: React.CSSProperties;
    smallCard?: React.CSSProperties;
    allCard?: React.CSSProperties;
  };
  itemWidth: number;
  slideDistance: number;
}

const WrapLiveStream = styled.div<{ isToolbarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  max-width: ${({ isToolbarOpen }) => (isToolbarOpen ? "914px" : "100%")};
  margin-bottom: 30px;
  gap: 20px;
`;

const LiveStreamWrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LiveStreamTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const LiveStreamSeeAll = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: #afafaf;
  text-decoration: none;
  padding-top: 3px;
  &:hover {
    color: #333;
  }
`;

const LiveStreamContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

const LiveStream = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const AllCard = styled.div`
  min-width: 144px;
  margin-right: 10px;
  flex-shrink: 0;
`;

const StreamBg = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: default;
`;

const Card = styled.div`
  /* border: 1px solid; */
  background-color: rgba(51, 1, 51, 0.1);
  border-radius: 2px;
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 143.59px;
  height: 172.99px;
  cursor: default;
  &:hover {
    color: #333;
  }
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(216, 206, 206);
  align-items: center;
  justify-content: center;
  margin: 15px 15px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: rgba(0, 0, 0, 0.13) 0px 6px 25px 0px;
  backdrop-filter: blur(30px);
  width: 113.59px;
  height: 142.59px;
  cursor: pointer;
`;

const SmallCardImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: inline-block;
  border: 1px solid #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

const CardContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const CardTitle = styled.h3`
  width: 103px;
  font-size: 16px;
  margin: 5px 0;
`;

const CardTitleH4 = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #686f7a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LiveIcon = styled(FaCircle)`
  margin-left: 2px;
  margin-bottom: 10px;
  font-size: 6px;
  color: red;
`;

const NavButton = styled.button<{
  position: "left" | "right";
  isToolbarOpen: boolean;
}>`
  background: whitesmoke;
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
  ${(props) =>
    props.position === "left"
      ? "left: 6px;"
      : props.isToolbarOpen
        ? "right: 6px;"
        : "right: 6px;"}

  &:hover {
    background: #ed2a26;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const LiveStreamCard: React.FC<MyCarouselProps> = ({
  customStyle,
  slideDistance = 154,
  itemWidth = 152.8,
}) => {
  const isToolbarOpen: boolean = useOutletContext();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState<number>(0);
  const [disableLeft, setDisableLeft] = useState<boolean>(true);
  const [disableRight, setDisableRight] = useState<boolean>(false);

  const names = [
    "John Doe",
    "Jassica",
    "Edututs+",
    "Ridhima",
    "Zoena",
    "Albert Dua",
    "Amripal",
    "Joginder Singh",
    "Jimmy",
    "Albert Dua",
    "Amripal",
    "Joginder Singh",
    "Jimmy",
  ];

  const images = [
    user,
    user1,
    user2,
    user3,
    user4,
    user,
    user1,
    user2,
    user3,
    user,
    user1,
    user2,
    user3,
  ];

  const maxTranslate = useCallback(() => {
    if (!sliderRef.current) return 0;
    const totalWidth = names.length * itemWidth;
    const containerWidth = sliderRef.current.offsetWidth;
    return Math.min(0, containerWidth - totalWidth);
  }, [names.length, itemWidth]);

  useEffect(() => {
    setTranslate((prev) => Math.max(maxTranslate(), Math.min(0, prev)));
  }, [maxTranslate]);

  useEffect(() => {
    setDisableLeft(translate === 0);
    setDisableRight(translate === maxTranslate());
  }, [translate, maxTranslate]);

  const slide = (direction: number) => {
    setTranslate((prev) => {
      const newTranslate = prev + direction * slideDistance;
      return Math.max(maxTranslate(), Math.min(0, newTranslate));
    });
  };

  return (
    <WrapLiveStream
      style={customStyle?.warpLiveStream}
      isToolbarOpen={isToolbarOpen}
    >
      <LiveStreamWrapTitle>
        <LiveStreamTitle>Live Streams</LiveStreamTitle>
        <LiveStreamSeeAll to="/all-live-streams">See all</LiveStreamSeeAll>
      </LiveStreamWrapTitle>
      <LiveStreamContainer style={customStyle?.liveStreamContainer}>
        <NavButton
          position="left"
          onClick={() => slide(1)}
          disabled={disableLeft}
          isToolbarOpen={isToolbarOpen}
        >
          <FaChevronLeft />
        </NavButton>
        <LiveStream ref={sliderRef}>
          <SliderContainer style={{ transform: `translateX(${translate}px)` }}>
            {names.map((name, index) => (
              <AllCard style={customStyle?.allCard} key={index}>
                <StreamBg href="/live-stream">
                  <Card style={customStyle?.card}>
                    <SmallCard style={customStyle?.smallCard}>
                      <SmallCardImage
                        src={images[index % images.length]}
                        alt={`${name} avatar`}
                      />
                      <CardContainer>
                        <CardTitle>
                          <CardTitleH4>{name}</CardTitleH4>
                        </CardTitle>
                        <CardText>
                          live <LiveIcon />
                        </CardText>
                      </CardContainer>
                    </SmallCard>
                  </Card>
                </StreamBg>
              </AllCard>
            ))}
          </SliderContainer>
        </LiveStream>
        <NavButton
          position="right"
          onClick={() => slide(-1)}
          disabled={disableRight}
          isToolbarOpen={isToolbarOpen}
        >
          <FaChevronRight />
        </NavButton>
      </LiveStreamContainer>
    </WrapLiveStream>
  );
};

export default LiveStreamCard;
