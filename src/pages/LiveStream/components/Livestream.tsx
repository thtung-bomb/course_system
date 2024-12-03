import styled from "styled-components";
import Chat from "./Chat";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import LiveStreamCard from "@components/Slide/LiveStreamCard";
import { useOutletContext } from "react-router-dom";
import React from "react";
import LiveStreamInfor from "@components/LiveStreamInfor";

const Wrap = styled.div`
  background-color: #f5f5f5;
  height: 900px;
`;
const Container = styled.div`
  position: relative;
  background-color: #f5f5f5;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 32px;
`;
const RightContainer = styled.div`
  flex-grow: 1;
  margin-top: 88px;
  margin-left: 22px;
  width: 48%;
`;
const Video = styled.div`
  padding-top: 90px;
`;

const Src = styled.iframe`
  border-radius: 2px;
`;

const LiveStream: React.FC = () => {
  const isToolbarOpen: boolean = useOutletContext();

  console.log(isToolbarOpen);
  const customStyle = {
    leftContainer: {
      width: "100%",
      transition: "width 1s ease-in-out",
    } as React.CSSProperties,
    rightContainer: {
      width: isToolbarOpen ? "15%" : "15%",
      transition: "width 0.5s ease-in-out",
    } as React.CSSProperties,
    warpLiveStream: {
      marginRight: "30px",
      marginLeft: "30px",
      maxWidth: isToolbarOpen ? "100%" : "100%",
    } as React.CSSProperties,
    card: {
      width: "195px",
    } as React.CSSProperties,
    smallCard: {
      width: "165px",
    } as React.CSSProperties,
  };

  return (
    <Wrap>
      <Container>
        <LeftContainer>
          <Video>
            <Src
              height="435"
              src="https://www.youtube.com/embed/YbJAKamEH4o"
              style={customStyle.leftContainer}
            ></Src>
          </Video>
          <LiveStreamInfor
            author="Nguyen Kane"
            totalLike="100"
            totalView="10000"
            totalDisLike="2"
            totalShare="120"
          />
        </LeftContainer>
        <RightContainer style={customStyle.rightContainer}>
          <Chat />
        </RightContainer>
      </Container>
      <LiveStreamCard
        customStyle={customStyle}
        itemWidth={203.9}
        slideDistance={205}
      />
    </Wrap>
  );
};

export default LiveStream;
