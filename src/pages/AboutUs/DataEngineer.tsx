import { Breadcrumb, Form } from "react-bootstrap";
import styled from "styled-components";
import { CgChevronDoubleLeft } from "react-icons/cg";
import { BiSolidCloudUpload } from "react-icons/bi";

import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  margin: 60px 0px auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 150px;
  background-color: #fff;
  //   background-color: red;
  color: #333;
`;

const Title = styled.h2`
  float: left;
  width: 100%;
  padding-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-top: 30px !important;
  color: #333;
  text-align: left;
  line-height: 30px;
`;

const BreadcrumbItem = styled(Breadcrumb.Item)`
  a {
    font-size: 14px;
    color: #333;
    text-decoration: none;
  }
`;

const BreadcrumbStyle = styled(Breadcrumb)``;

const BackPage = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #333;
`;

const Content = styled.div`
  justify-content: center;
  width: 60%;
  padding: 10px 50px;
  background: #f7f7f7 !important;
  color: #333;
  margin: auto;
  padding-bottom: 25px;
  border-bottom: 1px solid #e5e5e5;
`;

const ApplyJobButton = styled.button`
  font-size: 14px;
  color: #fff;
  background: #ed2a26;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  padding: 12px 25px;
  margin-top: 0;
  display: inline-block;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const Anchor = styled.div`
  margin-bottom: 23px;
  font-size: 14px;
  margin-top: 30px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #686f7a;
  text-align: left;
  display: block;
  padding-bottom: 25px;
  border-bottom: 1px solid #e5e5e5;
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  line-height: 26px;
  color: #686f7a;
  text-align: left;
`;

const HeaderContent = styled.h4`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-bottom: 13px !important;
  text-align: left;
  color: #333;
  line-height: 26px;
`;

const FormApplyJob = styled.form`
  justify-content: center;
  width: 60%;
  padding: 10px 50px;
  background-color: #f7f7f7;
  color: #333;
  margin: auto;
  padding-bottom: 25px;
  border-bottom: 1px solid #e5e5e5;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #e5e5e5;
  outline: none;
  transition: 0.3s;
  border-radius: 3px;

  &:focus {
    border-color: #333;
  }
`;

const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-bottom: 15px;
`;

const ImageUploadWrap = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
  padding: 10px;
  background-color: #fff;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const FileUploadInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  left: 0;
  top: 0;
  cursor: pointer;
`;

const DragText = styled.div`
  font-size: 16px;
  color: #333;
`;

const ApplyFile = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const Icon = styled(BiSolidCloudUpload)`
  font-size: 48px;
  color: #838689;
`;

function DataEngineer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    resume: null,
    linkedIn: "",
    twitter: "",
    portfolio: "",
    otherWebsite: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email Address is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.resume) newErrors.resume = "Resume/CV is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted", formData);
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const paragraphContent = [
    {
      header: "",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus enim
      quaerat, tempora, id consequatur fugit aut ipsam laborum cupiditate
      non dolorum illum vero nobis ab voluptates odit! Iure quasi quaerat
      officiis deleniti vitae ea voluptates odit amet, repellat maiores!
      Sint, itaque provident commodi quos consequuntur ipsum similique
      aliquid eveniet dolores.`,
    },
    {
      header: "What you’ll be doing",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dicta.
          Reprehenderit blanditiis illo quo at maiores sed fugiat, iusto nihil
          numquam, sequi magnam. Officiis ipsa praesentium sequi deserunt, harum
          aliquam magnam quod? Doloremque laborum non ad dicta facere eaque ex
          nesciunt illo. Exercitationem possimus dolor inventore, voluptatem
          officiis quaerat sed tenetur non, nemo, ducimus dolorum laboriosam ut
          in animi deleniti voluptates esse necessitatibus tempore. Dolorum quam
          esse ipsam expedita, distinctio aut neque fugit velit non earum quae
          suscipit facilis quo sed animi nemo explicabo facere aliquam. Pariatur
          laborum ipsum suscipit aspernatur. Magnam exercitationem velit, ipsam
          doloremque debitis iste enim aliquid? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Facere beatae eaque distinctio molestias
          neque ut eligendi voluptatibus maiores labore suscipit delectus
          repellendus magnam cumque, explicabo quos adipisci quis. Perferendis
          nam quis itaque molestiae laborum iure, dolor eius error pariatur in?`,
    },
    {
      header: "What we’re looking for",
      content: `Quisque et bibendum urna, eget consequat sapien. Integer sed
      condimentum nibh. Integer id neque tristique, lobortis massa ac,
      dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a
      velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla
      tortor orci, luctus a pretium vel, ultrices porta nisl.`,
    },
    {
      header: "Who should apply?",
      content: `Quisque et bibendum urna, eget consequat sapien. Integer sed
      condimentum nibh. Integer id neque tristique, lobortis massa ac,
      dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a
      velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla
      tortor orci, luctus a pretium vel, ultrices porta nisl.`,
    },
    {
      header: "What next?",
      content: `Quisque et bibendum urna, eget consequat sapien. Integer sed
        condimentum nibh. Integer id neque tristique, lobortis massa ac,
        dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a
        velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla
        tortor orci, luctus a pretium vel, ultrices porta nisl.`,
    },
  ];

  const readURL = (input: HTMLInputElement) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          console.log(result);
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  return (
    <div style={{ background: "#f7f7f7" }}>
      <Container>
        <div>
          <BreadcrumbStyle>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/careers">Career</BreadcrumbItem>
            <BreadcrumbItem active>Data Engineer</BreadcrumbItem>
          </BreadcrumbStyle>
          <Title>Data Engineer</Title>
        </div>
        <div>
          <BackPage to="/careers">
            <CgChevronDoubleLeft />
            Back to Career
          </BackPage>
        </div>
      </Container>

      <Content>
        <Anchor>
          <ApplyJobButton onClick={() => scrollToSection("apply")}>
            Apply For This Job
          </ApplyJobButton>
        </Anchor>
        {paragraphContent &&
          paragraphContent.map((p) => (
            <div key={p.header}>
              <HeaderContent>{p.header}</HeaderContent>
              <Paragraph>{p.content}</Paragraph>
            </div>
          ))}
        <div id="apply"></div>
      </Content>

      <FormApplyJob>
        <HeaderContent>Submit Your Application</HeaderContent>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <FormInput
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <span style={{ color: "red" }}>{errors.fullName}</span>
          )}

          <FormInput
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

          <FormInput
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <span style={{ color: "red" }}>{errors.phoneNumber}</span>
          )}

          <FormInput
            as="select"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </FormInput>
          {errors.gender && (
            <span style={{ color: "red" }}>{errors.gender}</span>
          )}
          {errors.gender && (
            <span style={{ color: "red" }}>{errors.gender}</span>
          )}

          <label
            style={{
              color: "#333",
              fontFamily: "'Roboto', sans-serif",
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "14px",
            }}
          >
            Resume/CV*
          </label>
          <ImageUploadWrap>
            <FileUploadInput
              id="file5"
              type="file"
              onChange={(e) => readURL(e.target as HTMLInputElement)}
              accept="image/*"
            />
            <DragText>
              <Icon></Icon>
              <ApplyFile>Attach Resume/CV</ApplyFile>
            </DragText>
          </ImageUploadWrap>
          {errors.resume && (
            <span style={{ color: "red" }}>{errors.resume}</span>
          )}

          <UnderLine />

          <HeaderContent>Links</HeaderContent>
          <FormInput
            placeholder="LinkedIn URL"
            value={formData.linkedIn}
            onChange={handleChange}
          />
          <FormInput
            placeholder="Twitter URL"
            value={formData.twitter}
            onChange={handleChange}
          />
          <FormInput
            placeholder="Portfolio URL"
            value={formData.portfolio}
            onChange={handleChange}
          />
          <FormInput
            placeholder="Order Website URL"
            value={formData.website}
            onChange={handleChange}
          />

          <UnderLine />

          <HeaderContent>Additional Information</HeaderContent>
          <FormInput
            as="textarea"
            placeholder="Add a cover letter or anything else you want to share"
            rows={7}
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </div>
        <ApplyJobButton style={{ marginTop: "50px" }} type="submit">
          Submit Application
        </ApplyJobButton>
      </FormApplyJob>
    </div>
  );
}

export default DataEngineer;
