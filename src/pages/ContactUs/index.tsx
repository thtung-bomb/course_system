import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import IconHelp from "@assets/images/help_icon.svg";
import IconBlog from "@assets/images/blog_icon.svg";
import IconCareer from "@assets/images/career_icon.svg";
import IconDeveloper from "@assets/images/developer_icon.svg";
import Map from "./components/Map.tsx";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareTwitter, FaSquareYoutube } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";

const BreadcrumbsContainer = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  width: 90%;
  padding: -2px 20px;
`;

const BreadcrumbsLeft = styled.div`
  display: flex;
`;

const Breadcrumb = styled.div`
  display: inline-block;
  padding-top: 10px;
  font-size: 14px;
  margin-left: 4px;
  color: #666;
  display: flex;
  &:not(:last-child)::after {
    content: "/" !important;
    position: relative;
    bottom: 1px;
    margin-left: 3px;
    color: #666;
  }
`;

const BreadcrumbLink = styled.div`
  color: #333;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

const BackToHome = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;

  cursor: pointer;
  p {
    font-size: 15px;
    padding-left: 10px;
    cursor: pointer;
  }
`;

const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";
  const capitalizeWords = (str: string): string => {
    return str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char: string) => char.toUpperCase());
  };
  const Link = styled.a`
    text-decoration: none;
    color: black;
    margin-top: 10px;
  `;
  const Crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `${crumb}`;
      const CrumbText = capitalizeWords(crumb);
      return (
        <Breadcrumb key={index}>
          <BreadcrumbLink to={currentLink} style={{ color: "#666" }}>
            {CrumbText}
          </BreadcrumbLink>
        </Breadcrumb>
      );
    });
  return (
    <BreadcrumbsContainer>
      <BreadcrumbsLeft>
        <Breadcrumb>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </Breadcrumb>
        {Crumbs}
      </BreadcrumbsLeft>
      <Link href="/">
        <BackToHome>
          &lt;&lt; <p>back to home</p>{" "}
        </BackToHome>
      </Link>
    </BreadcrumbsContainer>
  );
};

const Containerparent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  height: 900px;
  width: 100%;
`;
const SubHeader = styled.div`
  width: 100%;
  background-color: #fff;
  border: none;
  box-sizing: border-box;
  padding-left: 12%;
  margin-top: 50px;
  padding-top: 20px;
`;
const ContactText = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 30px;
  padding-bottom: 20px;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 50px;
`;

const CardHelp = styled.div`
  background-color: #fff;
  border-radius: 3px;
  padding: 2% 7%;
  border: 1px solid #efefef;
  box-shadow: -0.083333333in 0.5pc 1.125pc -7px rgba(25, 42, 70, 0.13);
  width: 280px;
  text-align: center;
  margin: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HelpLink = styled.a`
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const Icon = styled.img`
  width: 70px;
  margin-bottom: 20px;
`;

const HelpText = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
`;

const ContainerMap = styled.div`
  display: flex;
  width: 80%;
  margin-left: 15px;
`;

const Title = styled.h2`
  font-size: 17px;
  font-weight: 600;
  margin-left: 30px;
  margin-top: 40px;
  &::after {
    content: "";
    display: block;
    margin: auto;
    height: 2px;
    width: 15%;
    background: #ed2a26;
    margin-top: 20px;
    position: relative;
    right: 42%;
  }
`;

const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 40px;
`;

const InformationRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TitleInformation = styled.h3`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  margin-right: 20px;
  width: 35%;
  color: #333333;
`;

const TextInformation = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
  width: 65%;
  line-height: 26px;
  color: #686f7a;
  position: relative;
  right: 20px;
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

function index() {
  return (
    <Containerparent>
      <SubHeader>
        <BreadCrumbs />
        <ContactText> Contact US</ContactText>
      </SubHeader>
      <Container>
        <CardHelp>
          <HelpLink href="#">
            <Icon src={IconHelp} alt="Help Icon" />
            <HelpText>Help Center</HelpText>
          </HelpLink>
        </CardHelp>
        <CardHelp>
          <HelpLink href="#">
            <Icon src={IconBlog} alt="Blog Icon" />
            <HelpText>Blog</HelpText>
          </HelpLink>
        </CardHelp>
        <CardHelp>
          <HelpLink href="#">
            <Icon src={IconCareer} alt="Career Icon" />
            <HelpText>Careers</HelpText>
          </HelpLink>
        </CardHelp>
        <CardHelp>
          <HelpLink href="#">
            <Icon src={IconDeveloper} alt="Developer Icon" />
            <HelpText>Developer Area</HelpText>
          </HelpLink>
        </CardHelp>
      </Container>
      <ContainerMap>
        <Map />
        <div>
          <Title>Contact Information</Title>
          <ContainerInformation>
            <InformationRow>
              <TitleInformation>
                <IoLocationOutline /> Main Address:
              </TitleInformation>
              <TextInformation>
                Đ. D1, Phường Tân Phú, Thành Phố Thủ Đức, Hồ Chí Minh 70000
              </TextInformation>
            </InformationRow>
            <InformationRow>
              <TitleInformation>
                <MdOutlineMailOutline /> Email Address:
              </TitleInformation>
              <TextInformation>F_soft@fpt.com</TextInformation>
            </InformationRow>
            <InformationRow>
              <TitleInformation>
                <MdPhoneAndroid /> Phone Number:
              </TitleInformation>
              <TextInformation>+911234567890, 01610000000</TextInformation>
            </InformationRow>
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
          </ContainerInformation>
        </div>
      </ContainerMap>
    </Containerparent>
  );
}

export default index;
