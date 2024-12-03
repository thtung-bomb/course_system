import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";
import { VideoInfor } from "@interfaces/model/VideoInfor";
import styled from "styled-components";

const Info = styled.div`
  position: relative;
  display: flex;
  height: 100px;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
`;
const Avatar = styled.div`
  width: 66px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1px;
  & img {
    margin-top: 3px;
    width: 50px;
    height: 50px;
  }
`;
const Details = styled.div`
  margin-left: 2px;
  width: 114px;
  height: 60px;

  & a {
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;
const Subcribe = styled.button`
  background-color: red;
  color: white;
  border-radius: 4px;
  width: 94px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
  border: 1px solid #efefef;
`;
const Right = styled.div`
  display: flex;
  height: 60px;
`;
const View = styled.button`
  width: 58px;
  border: 1px solid #efefef;
  border-radius: 2px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #666666;
  & img {
    padding-inline: 2px;
    width: 30px;
    height: 20px;
    margin-bottom: 4px;
    margin-bottom: 2px;
  }
  &:hover {
    color: #333;
  }
`;
const Like = styled.button`
  width: 58px;
  margin-left: 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 2px;
  justify-content: space-evenly;
  align-items: center;
  color: #666666;
  border: 1px solid #efefef;
  & img {
    width: 30px;
    height: 20px;
  }
  & a {
    text-align: center;
    margin-left: 4px;
  }
  &:hover {
    color: #333;
  }
`;
const Dislike = styled.button`
  width: 58px;
  margin-left: 3px;
  border: 1px solid #efefef;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  justify-content: space-evenly;
  align-items: center;
  color: #666666;
  & img {
    width: 30px;
    height: 20px;
    padding-inline: 2px;
  }
  & div {
    margin-left: 9px;
  }
  &:hover {
    color: #333;
  }
`;
const Share = styled.button`
  width: 58px;
  margin-left: 3px;
  background-color: white;
  border: 1px solid #efefef;
  display: flex;
  text-align: center;
  flex-direction: column;
  border-radius: 2px;
  justify-content: space-evenly;
  align-items: center;
  color: #666666;
  & img {
    width: 30px;
    height: 20px;
  }
  & div {
    margin-left: 10px;
    margin-top: 2px;
  }
  &:hover {
    color: #333;
  }
`;
const Img = styled.img`
  border-radius: 50%;
`;
const LiveStreamInfor: React.FC<VideoInfor> = ({
  title,
  description,
  author,
  totalLike,
  totalDisLike,
  totalShare,
  totalView,
}) => {
  return (
    <Info>
      <Left>
        <Avatar>
          <Img src="https://gambolthemes.net/html-items/cursus-new-demo/images/hd_dp.jpg" />
        </Avatar>
        <Details>
          <a>{author}</a>
          <Subcribe>Subscribe</Subcribe>
        </Details>
      </Left>
      <Right>
        <View>
          <IoEyeOutline />
          {totalView}
        </View>
        <Like>
          <AiOutlineLike />
          {totalLike}
        </Like>
        <Dislike>
          <AiOutlineDislike />
          {totalDisLike}
        </Dislike>
        <Share>
          <IoShareSocialOutline />
          {totalShare}
        </Share>
      </Right>
    </Info>
  );
};

export default LiveStreamInfor;
