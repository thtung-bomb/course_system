import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/images/logo.svg";
import mainLogo from "@assets/images/main_logo.svg";
import {
  Container,
  MainLogo,
  SignForm,
  LoginButton,
  LinkText,
  SubText,
  SignFooter,
  UiInput,
  SignFormHeading,
  SignFormParagraph,
  Textnote,
} from "../../Login/styled_login";
import styled from "styled-components";
import Dropdown from "./Dropdow";
import { FormWrapper } from "@components/Form/FormWrapper";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";
import { error } from "console";

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0.1 solid rgba(0, 0, 0, 0.125);
  border-radius: 3px;
  margin-bottom: 50px;
`;
const Tab = styled.button<{ active: boolean }>`
  background: #f5f5f5;
  border: 0.1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 2px solid ${(props) => (props.active ? "#ff0000" : "none")};
  padding: 20px 55px;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.active ? "#ff0000" : "#555")};
  border-radius: ${(props) => (props.active ? "1px" : "none")};
  transition:
    background-color 0.1s,
    color 0.1s;
  &:hover {
    color: #000;
    border-bottom: 2px solid #333;
  }
`;
const TabContent = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
  font-weight: 400;
  font-family: sans-serif;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #0055ff !important;
  text-decoration: none;

  &:hover {
    color: darkblue;
  }
`;

interface InstructorSignUpForm extends FieldValues {
  description: string;
  category: string;
}

interface StudentSignUpForm extends FieldValues {
  description: string;
}

const InstructorSU: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Intructor Sign Up");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleInstructorSignUp = (data: InstructorSignUpForm) => {
    console.log("Instructor Sign Up Data:", data);
  };

  const handleStudentSignUp = (data: StudentSignUpForm) => {
    console.log("Student Sign Up Data:", data);
  };
  const dropdownOptions = [
    { value: "development", label: "Development" },
    { value: "business", label: "Business" },
    { value: "finance", label: "Finance & Accounting" },
    { value: "it", label: "IT & Software" },
    { value: "office", label: "Office Productivity" },
    { value: "personal", label: "Personal Development" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "photography", label: "Photography" },
    { value: "health", label: "Health & Fitness" },
    { value: "music", label: "Music" },
    { value: "teaching", label: "Teaching & Academics" },
  ];
  return (
    <Container>
      <MainLogo id="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </MainLogo>
      <SignForm>
        <Tabs>
          <Tab
            active={activeTab === "Intructor Sign Up"}
            onClick={() => handleTabClick("Intructor Sign Up")}
          >
            Intructor Sign Up
          </Tab>
          <Tab
            active={activeTab === "Student Sign Up"}
            onClick={() => handleTabClick("Student Sign Up")}
          >
            Student Sign Up
          </Tab>
        </Tabs>
        <TabContent>
          {activeTab === "Intructor Sign Up" && (
            
            <FormWrapper<InstructorSignUpForm> onSubmit={handleInstructorSignUp}>
              {({
                register,
                formState: { errors },
                setValue,
              }: {
                register: UseFormRegister<InstructorSignUpForm>;
                formState: { errors: FieldErrors<InstructorSignUpForm> };
                setValue: (name: string, value: any) => void;
              }) => (
                <>
                <SignFormParagraph>Sign Up and Create Course!</SignFormParagraph>
                <Dropdown
                    onChange={(value) => setValue("category", value)}
                    name="category"
                    options={dropdownOptions}
                  />
                  {errors.category && <span>{errors.category.message}</span>}
                  <UiInput>
                    <textarea
                      id="description"
                      required
                      maxLength={12000}
                      className="bio-sign"
                      placeholder="Write a little description about you..."
                      {...register("description", {
                        required: "Description is required",
                        maxLength: {
                          value: 12000,
                          message: "Description must be at most 12000 characters",
                        },
                      })}
                    ></textarea>
                  </UiInput>
                  {errors.description && <span>{errors.description.message}</span>}
                  <Textnote>
                    Your biography should have at least 12000 characters.
                  </Textnote>
                  <LoginButton type="submit">Instructor Sign Up</LoginButton>
                </>
              )}
            </FormWrapper>
            
          )}
          {activeTab === "Student Sign Up" && (
            <FormWrapper<StudentSignUpForm> onSubmit={handleStudentSignUp}>
              {({
                register,
                formState: { errors },
              }: {
                register: UseFormRegister<StudentSignUpForm>;
                formState: { errors: FieldErrors<StudentSignUpForm> };
              }) => (
                <>
                  <SignFormParagraph>Sign Up and Start Learning!</SignFormParagraph>
                  <UiInput>
                    <textarea
                      id="description"
                      required
                      maxLength={12000}
                      className="bio-sign"
                      placeholder="Write a little description about you..."
                      {...register("description", {
                        required: "Description is required",
                        maxLength: {
                          value: 12000,
                          message: "Description must be at most 12000 characters",
                        },
                      })}
                    ></textarea>
                  </UiInput>
                  {errors.description && <span>{errors.description.message}</span>}
                  <Textnote>
                    Your biography should have at least 12000 characters.
                  </Textnote>
                  <LoginButton type="submit">Student Sign Up</LoginButton>
                </>
              )}
            </FormWrapper>
          )}
        </TabContent>

        <SubText>
          Already have an account?
          <StyledLink to="/Login">Log In</StyledLink>
        </SubText>
      </SignForm>
      <SignFooter>
        <img src={mainLogo} alt="Footer Logo" />© 2024 <strong>Cursus</strong>.
        All Rights Reserved.
      </SignFooter>
    </Container>
  );
};

export default InstructorSU;
