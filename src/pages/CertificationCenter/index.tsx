import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import signBackground from "@assets/images/sign.svg";
import studentImage from "@assets/images/imgCertificate/student.svg";
import instructorImage from "@assets/images/imgCertificate/instructor.svg";

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  width: 100%;
  margin-top: 60px;
`;
const WrapContentThumnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleThumnail = styled.h1`
  margin-top: 80px;
  font-size: 60px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
`;
const DesThumnail = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: white;
`;
const DetailThumnail = styled.div`
  margin-top: 56px;
  display: flex;
  gap: 40px;
  align-items: center;
`;
const ImageLogo = styled.img`
  width: 150px;
`;
const ImagePlus = styled.img`
  width: 80px;
`;
const ImageCertificate = styled.img`
  width: 150px;
`;
const BtnThumnail = styled(Link)`
  background-color: #ed2a26;
  color: white;
  height: 50px;
  padding: 0px 100px;
  line-height: 50px;
  text-decoration: none;
  border-radius: 4px;
  margin: 80px 0px;
`;
const WrapContentFind = styled.div`
  background-color: white;
  padding: 62px 0px;
  text-align: center;
`;
const TitleFind = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
`;
const WrapForm = styled.form`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  margin-right: 20px;
  padding: 10px 28px 10px 14px;
  width: 280px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  &:focus {
    outline: 1px solid black;
  }
`;

const InputSelect = styled(Dropdown.Toggle)`
  background-color: white;
  border: 1px solid #e5e5e5;
  color: #333;
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s all;
  &:hover {
    background-color: white;
    border: 1px solid #e5e5e5;
    color: #333;
  }
  &:focus,
  &:active {
    background-color: white !important;
    border: 1px solid #e5e5e5 !important;
    color: #333 !important;
  }
`;
const DropDownMenu = styled(Dropdown.Menu)`
  transition:
    height 0.5s ease,
    opacity 0.5s ease;
  overflow: hidden;
  opacity: 0;
  width: 100%;
  height: 0;
  border: 1px solid #96c8da;

  display: block;
  &.show {
    opacity: 1;
    height: 350%;
  }
`;
const BtnFindCertificate = styled.button`
  background-color: #ed2a26;
  color: white;
  outline: none;
  margin-left: 20px;
  border: none;
  border-radius: 4px;
  padding: 0px 60px;
  &:hover {
    background-color: #333;
  }
`;

const WrapContentCertification = styled.div`
  padding: 62px 0px;
  background-color: #f7f7f7;
`;
const TitleCertificate = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 17px;
  text-align: center;
`;
const DesCertificate = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
  color: #686f7a;
`;
const ListItem = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const Item = styled.li<{ isActive: boolean }>`
  padding: 7px 14px;
  background-color: ${(props) => (props.isActive ? "#ed2a26" : "transparent")};
  line-height: 20px;
  color: ${(props) => (props.isActive ? "white" : "#333")};
  border-radius: 3px;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #ed2a26;
    color: white;
  }
`;
const WrapContentItem = styled.div`
  display: flex;
  justify-content: center;
`;
const ContentItem = styled.div`
  width: 80%;
  margin-top: 50px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 20px;
`;
const ButtonContentItem = styled.button`
  width: 280px;
  padding: 20px 0px;
  border: none;
  margin-top: 10px;
  line-height: 26px;
  background-color: white;
  color: #333;
  &:hover {
    background-color: #ed2a26;
    color: #fff;
  }
`;
const WrapContentRole = styled.div`
  background-color: #333;
  padding: 62px 0px;
  position: relative;
  &:after {
    content: "";
    background: url(${signBackground}) no-repeat center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    opacity: 0.1;
  }
`;
const TitleContentRole = styled.h2`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  font-weight: 600;
  line-height: 26px;
`;
const WrapItemContentRole = styled.div`
  display: flex;
  gap: 200px;
  margin-top: 60px;
  justify-content: center;
`;
const ItemContentRole = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const WrapImage = styled.div`
  background-color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 23px 0;
  border: 5px solid #fff;
  box-shadow: inset 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`;
const ImageContentRole = styled.img`
  width: 90px;
`;
const DesContentRole = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

const WrapContentResult = styled.div`
  padding: 62px 0px;
  background-color: #f7f7f7;
`;
const TitleContentResult = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;
const DesContentResult = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #686f7a;
  line-height: 26px;
  margin-bottom: 20px;
`;
const WrapDetailContentResult = styled.div`
  display: flex;
  justify-content: center;
`;
const DetailContentResult = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #686f7a;
  width: 80%;
  line-height: 26px;
  margin-bottom: 30px;
`;
const WrapBtnContentResult = styled.div`
  display: flex;
  justify-content: center;
`;
const BtnContentResult = styled.button`
  background-color: #ed2a26;
  color: white;
  height: 50px;
  padding: 0px 100px;
  line-height: 50px;
  font-size: 14px;
  text-decoration: none;
  outline: none;
  border: none;
`;

const CertificationCenter = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Select Category");

  const handleSelect = (event) => {
    setSelectedCategory(event.target.textContent);
  };
  const items = [
    "Development",
    "Finance & Accounting",
    "Design",
    "Marketing",
    "Teaching & Academics",
  ];

  const content = {
    Development: [
      "WordPress",
      "HTML CSS",
      "MotoCMS 3",
      "Joomla",
      "OpenCart",
      "Joomla Pro",
      "WordPress Pro",
      "WordPress Elementor",
      "WordPress Elementor Pro",
      "PrestaShop",
    ],
    "Finance & Accounting": [
      "Accounting",
      "Finance Fundamentals",
      "Bookkeeping",
      "Political Science",
      "Finance",
    ],
    Design: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Adobe InDesign",
      "Unity",
      "Drawing",
      "Game Development Fundamentals",
      "3D Modeling",
      "Motion Graphics",
      "2D Animation",
      "T-Shirt Design",
    ],
    Marketing: [
      "Google Ads (Adwords)",
      "Google Ads (AdWords) Certification",
      "Social Marketing",
      "Email Marketing",
      "Business Strategy",
      "SEO",
      "PPC Advertising",
      "Blogging",
    ],
    "Teaching & Academics": [
      "Math",
      "Humanities",
      "Engineering",
      "Science",
      "Social Science",
      "English Language",
      "German Language",
      "Sign Language",
      "IELTS",
      "French Language",
      "Spanish Language",
      "English Grammar",
    ],
  };
  const [selectedContent, setSelectedContent] = useState<any>(
    content.Development,
  );
  const [activeItem, setActiveItem] = useState<string | null>("Development");

  const handleClick = (item: any) => {
    setActiveItem(item);
    setSelectedContent(content[item]);
  };

  return (
    <WrapContent>
      <WrapContentThumnail>
        <TitleThumnail>Certification Center</TitleThumnail>
        <DesThumnail>For Students and Instructors</DesThumnail>
        <DetailThumnail>
          <ImageLogo src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo1.svg"></ImageLogo>
          <ImagePlus src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/plus.svg"></ImagePlus>
          <ImageCertificate src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/certicon.svg"></ImageCertificate>
        </DetailThumnail>
        <BtnThumnail to="/certification-fill-form">
          Start Certification
        </BtnThumnail>
      </WrapContentThumnail>
      <WrapContentFind>
        <TitleFind>Find Certificate</TitleFind>
        <WrapForm>
          <Input placeholder="# Number"></Input>
          <Input placeholder="FullName"></Input>
          <Dropdown autoClose="outside" onSelect={handleSelect}>
            <InputSelect id="dropdown-autoclose-outside">
              {selectedCategory}
            </InputSelect>

            <DropDownMenu>
              <Dropdown.Item eventKey="Development">Development</Dropdown.Item>
              <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
              <Dropdown.Item eventKey="Design">Design</Dropdown.Item>
              <Dropdown.Item eventKey="Marketing">Marketing</Dropdown.Item>
              <Dropdown.Item eventKey="Teaching & Academics">
                Teaching & Academics
              </Dropdown.Item>
            </DropDownMenu>
          </Dropdown>
          <BtnFindCertificate>Find Certificate</BtnFindCertificate>
        </WrapForm>
      </WrapContentFind>
      <WrapContentCertification>
        <TitleCertificate>Our Certification</TitleCertificate>
        <DesCertificate>
          We prepared tests for the most popular categories and get cerificate
        </DesCertificate>
        <ListItem>
          {items.map((item, index) => (
            <Item
              key={index}
              isActive={activeItem === item}
              onClick={() => handleClick(item)}
            >
              {item}
            </Item>
          ))}
        </ListItem>
        <WrapContentItem>
          <ContentItem>
            {Array.isArray(selectedContent)
              ? selectedContent.map((contentItem, index) => (
                  <ButtonContentItem key={index}>
                    {contentItem}
                  </ButtonContentItem>
                ))
              : selectedContent}
          </ContentItem>
        </WrapContentItem>
      </WrapContentCertification>
      <WrapContentRole>
        <TitleContentRole>Who Can Get Benefit From This?</TitleContentRole>
        <WrapItemContentRole>
          <ItemContentRole>
            <WrapImage>
              <ImageContentRole src={studentImage}></ImageContentRole>
            </WrapImage>
            <DesContentRole>Students</DesContentRole>
          </ItemContentRole>
          <ItemContentRole>
            <WrapImage>
              <ImageContentRole src={instructorImage}></ImageContentRole>
            </WrapImage>
            <DesContentRole>Instructor</DesContentRole>
          </ItemContentRole>
        </WrapItemContentRole>
      </WrapContentRole>
      <WrapContentResult>
        <TitleContentResult>What Will You Get?</TitleContentResult>
        <DesContentResult>
          Cursus company, which confirms your skills and knowledge of
          Certification
        </DesContentResult>
        <WrapDetailContentResult>
          <DetailContentResult>
            Morbi eget elit eget turpis varius mollis eget vel massa. Donec
            porttitor, sapien eget commodo vulputate, erat felis aliquam dolor,
            non condimentum libero dolor vel ipsum. Sed porttitor nisi eget
            nulla ullamcorper eleifend. Fusce tristique sapien nisi, vel feugiat
            neque luctus sit amet. Quisque consequat quis turpis in mattis.
            Maecenas eget mollis nisl. Cras porta dapibus est, quis malesuada ex
            iaculis at. Vestibulum egestas tortor in urna tempor, in fermentum
            lectus bibendum. In leo leo, bibendum at pharetra at, tincidunt in
            nulla. In vel malesuada nulla, sed tincidunt neque. Phasellus at
            massa vel sem aliquet sodales non in magna. Ut tempus ipsum sagittis
            neque cursus euismod. Vivamus luctus elementum tortor, ac aliquet
            dolor vehicula et. Nulla vehicula pharetra lacus ornare gravida.
            Vivamus mollis ullamcorper dui quis gravida. Aenean pulvinar
            pulvinar arcu a suscipit.
          </DetailContentResult>
        </WrapDetailContentResult>
        <WrapBtnContentResult>
          <BtnContentResult>Knowledge Base</BtnContentResult>
        </WrapBtnContentResult>
      </WrapContentResult>
    </WrapContent>
  );
};

export default CertificationCenter;
