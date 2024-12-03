import React from "react";
import styled from "styled-components";

import { AiFillFacebook } from "react-icons/ai";
import { FaSquareTwitter, FaSquareYoutube } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ContainerLeft = styled.div``;

const ProfileCard = styled.div`
  background-color: #fff;
  width: 100%;
  padding-right: 50px;
  padding: 15px;
  border-radius: 3px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
  margin-bottom: 30px;
`;

const ProfileImg = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;

  img {
    width: 100px !important;
    height: 100px !important;
    display: inline-block !important;
    border-radius: 100%;
    border: 2px solid #fff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ProfileContent = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
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
  color: #333 !important;
  text-align: center;
  text-decoration: none;
  position: relative;
`;

const VerifyBadge = styled.div`
  font-size: 18px;
  line-height: 15px;
  margin-top: 7px;
  color: rgb(18, 86, 246);
  position: relative;
  bottom: 4px;
  left: 3px;
`;

const ProfileTitle = styled.div`
  font-size: 13px;
  color: #686f7a;
  margin-top: 10px;
  font-family: sans-serif;
  font-weight: 400;
  margin-bottom: 17px;
  text-overflow: ellipsis;
  white-space: inherit;
  overflow: hidden;
`;

const SocialLinks = styled.ul`
  list-style: none;
  margin-bottom: 0 !important;
  padding-left: 0 !important;

  li {
    display: inline-block !important;
    margin-right: 5px;
    vertical-align: middle;
    margin-bottom: 0 !important;

    a {
      display: inline-block;
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

const ProfileStats = styled.div`
  font-size: 12px;
  margin-top: 20px;
  font-weight: 400;
  font-family: sans-serif;
  color: #686f7a;
  text-align: center;
`;

const ProfileLink = styled.a`
  text-decoration: none;
  display: block;
  margin-top: 15px;
  font-size: 15px;
  font-weight: 550;
  font-family: sans-serif;
  color: #333;

  &:hover {
    color: red;
  }
`;

interface data {
  img: string;
  name: string;
  description: string;
  stats1: string;
  stats2: string;
}

const ProfileHome: React.FC = ({ img, name, description, stats1, stats2 }) => {
  return (
    <ContainerLeft>
      <ProfileCard>
        <ProfileImg>
          <a href="#">
            <img src={img} alt="Profile" />
          </a>
        </ProfileImg>
        <ProfileContent>
          <ProfileHeader>
            <ProfileName href="#">{name}</ProfileName>
            <VerifyBadge title="Verify">
              <IoCheckmarkCircleOutline />
            </VerifyBadge>
          </ProfileHeader>
          <ProfileTitle>{description}</ProfileTitle>
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
            <span className="stats">{stats1} .</span>
            <span className="stats">{stats2}</span>
          </ProfileStats>
          <ProfileLink href="/">Go To Profile</ProfileLink>
        </ProfileContent>
      </ProfileCard>
    </ContainerLeft>
  );
};

export default ProfileHome;
