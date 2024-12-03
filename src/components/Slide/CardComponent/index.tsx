// CardComponent.tsx
import React from "react";
import styled from "styled-components";
import { FaCircle } from "react-icons/fa";

const AllCard = styled.div`
  min-width: 144px;
  padding-right: 10px;
  flex-shrink: 0;
`;

const StreamBg = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: default;
`;

const Card = styled.div`
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

interface CardComponentProps {
  image: string;
  name: string;
  customStyle?: {
    allCard?: React.CSSProperties;
    card?: React.CSSProperties;
    streamBg?: React.CSSProperties;
    smallCard?: React.CSSProperties;
    smallCardImage?: React.CSSProperties;
    cardContainer?: React.CSSProperties;
    cardTitle?: React.CSSProperties;
    cardTitleH4?: React.CSSProperties;
    cardText?: React.CSSProperties;
  };
  courseAllCard?: string;
  courseCardWidth?: string;
  courseSmallCardWidth?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  image,
  name,
  customStyle,
  courseCardWidth,
  courseSmallCardWidth,
  courseAllCard,
}) => {
  return (
    <AllCard style={{ ...customStyle?.allCard, width: courseAllCard }}>
      <Card style={{ ...customStyle?.card, width: courseCardWidth }}>
        <StreamBg href="/live-stream" style={customStyle?.streamBg}>
          <SmallCard
            style={{ ...customStyle?.smallCard, width: courseSmallCardWidth }}
          >
            <SmallCardImage
              src={image}
              alt={`${name} avatar`}
              style={customStyle?.smallCardImage}
            />
            <CardContainer style={customStyle?.cardContainer}>
              <CardTitle style={customStyle?.cardTitle}>
                <CardTitleH4 style={customStyle?.cardTitleH4}>
                  {name}
                </CardTitleH4>
              </CardTitle>
              <CardText style={customStyle?.cardText}>
                live <LiveIcon />
              </CardText>
            </CardContainer>
          </SmallCard>
        </StreamBg>
      </Card>
    </AllCard>
  );
};

export default CardComponent;
