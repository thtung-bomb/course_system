import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import Input from "@components/Input";
import { useState } from "react";
import ExpandableList from "./components/ExpandableList";
import ExHeader from "@components/ExHeader";

const WrapContent = styled.div`
  background-color: #f7f7f7;
`;
const WrapFormHome = styled.div`
  display: flex;
  justify-content: center;
`;
const FormHome = styled.div`
  width: 600px;
  padding: 50px;
  background-color: #fff;
  box-shadow: -0.083333333in 0.5pc 1.125pc -7px rgba(25, 42, 70, 0.13);
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;
const TitleForm = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;
const WrapInputCustom = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
`;
const InputCustom = styled(Input)`
  height: 40px;
  padding-left: 16px;
  padding-right: 8px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  &::placeholder {
    color: #c7c7d4;
    font-size: 14px;
  }
  &:focus-visible {
    border: 1px solid #333;
  }
`;

const WrapCategory = styled.div`
  width: 100%;
`;
const ExTitleForm = styled.h4`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  line-height: 26px;
  margin-top: 35px;
`;
const TextConfirm = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #686f7a;
  padding: 20px 0px 10px 0px;
`;
const LinkConfirm = styled(Link)`
  color: #ed2a26;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #333;
  }
`;
const SubmitBtn = styled.button`
  background-color: #ed2a26;
  width: 479px;
  color: #fff;
  height: 40px;
  text-decoration: none;
  border: none;
  outline: none;
  margin-top: 30px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`;
const TextQuestion = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #686f7a;
  margin-top: 30px;
`;
const developmentList = [
  { id: 1, title: "WordPress" },
  { id: 2, title: "HTML CSS" },
  { id: 3, title: "Full Time" },
  { id: 4, title: "MotoCMS 3" },
  { id: 5, title: "Joomla" },
  { id: 6, title: "Full Time 1" },
  { id: 7, title: "OpenCart" },
  { id: 8, title: "Joomla Pro" },
  { id: 9, title: "WordPress Pro" },
  { id: 10, title: "WordPress Elementor" },
  { id: 11, title: "WordPress Elementor Pro" },
  { id: 12, title: "PrestaShop" },
];
const financeAccountingList = [
  { id: 1, title: "Accounting" },
  { id: 2, title: "Finance Fundamentals" },
  { id: 3, title: "Bookkeeping" },
  { id: 4, title: "Political Science" },
  { id: 5, title: "Finance" },
  { id: 6, title: "Cryptocurrency" },
];
const designList = [
  { id: 1, title: "Adobe Photoshop" },
  { id: 2, title: "Adobe Illustrator" },
  { id: 3, title: "Adobe After Effects" },
  { id: 4, title: "Adobe InDesign" },
  { id: 5, title: "Unity" },
  { id: 6, title: "Drawing" },
  { id: 7, title: "Game Development Fundamentals" },
  { id: 8, title: "3D Modeling" },
  { id: 9, title: "Motion Graphics" },
  { id: 10, title: "2D Animation" },
  { id: 11, title: "T-Shirt Design" },
];
const marketingList = [
  { id: 1, title: "Google Ads (Adwords)" },
  { id: 2, title: "Google Ads (AdWords) Certification" },
  { id: 3, title: "Social Marketing" },
  { id: 4, title: "Email Marketing" },
  { id: 5, title: "Business Strategy" },
  { id: 6, title: "SEO" },
  { id: 7, title: "PPC Advertising" },
  { id: 8, title: "Blogging" },
];
const teachingAcademicsList = [
  { id: 1, title: "Math" },
  { id: 2, title: "Humanities" },
  { id: 3, title: "Engineering" },
  { id: 4, title: "Science" },
  { id: 5, title: "Social Science" },
  { id: 6, title: "English Language" },
  { id: 7, title: "German Language" },
  { id: 8, title: "Sign Language" },
  { id: 9, title: "French Language" },
  { id: 10, title: "Spanish Language" },
  { id: 11, title: "English Grammar" },
  { id: 12, title: "IELTS" },
];

const CertificationFormFill = () => {
  const [openList, setOpenList] = useState<number | null>(null);

  const handleToggle = (listId: number) => {
    setOpenList(openList === listId ? null : listId);
  };
  return (
    <WrapContent>
      <ExHeader title="Certification Fill Form" />
      <WrapFormHome>
        <FormHome>
          <TitleForm>Fill in before you start:</TitleForm>
          <WrapInputCustom>
            <InputCustom placeholder="Full Name" type="text" />
            <InputCustom placeholder="Email Address" type="email" />
            <InputCustom placeholder="Phone Number" type="text" />
          </WrapInputCustom>
          <WrapCategory>
            <ExTitleForm>Select Category</ExTitleForm>
            <ExpandableList
              title="Development"
              dataList={developmentList}
              isOpen={openList === 1}
              onToggle={() => handleToggle(1)}
            />
            <ExpandableList
              title="Finance & Accounting"
              dataList={financeAccountingList}
              isOpen={openList === 2}
              onToggle={() => handleToggle(2)}
            />
            <ExpandableList
              title="Design"
              dataList={designList}
              isOpen={openList === 3}
              onToggle={() => handleToggle(3)}
            />
            <ExpandableList
              title="Marketing"
              dataList={marketingList}
              isOpen={openList === 4}
              onToggle={() => handleToggle(4)}
            />
            <ExpandableList
              title="Teaching & Academics"
              dataList={teachingAcademicsList}
              isOpen={openList === 5}
              onToggle={() => handleToggle(5)}
            />
          </WrapCategory>
          <TextConfirm>
            By signing up, you agree to our{" "}
            <LinkConfirm to="/">Privacy Policy</LinkConfirm> and{" "}
            <LinkConfirm to="/">Terms and Conditions.</LinkConfirm>
          </TextConfirm>
          <SubmitBtn>Lets Go</SubmitBtn>
          <TextQuestion>
            Please be ready to answer{" "}
            <LinkConfirm to="/">20 questions</LinkConfirm> within{" "}
            <LinkConfirm to="/">1 hours.</LinkConfirm>
          </TextQuestion>
        </FormHome>
      </WrapFormHome>
    </WrapContent>
  );
};

export default CertificationFormFill;
