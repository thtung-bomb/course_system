import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";
import { LuClock3 } from "react-icons/lu";
import UploadFile from "./UploadFile";

const Container = styled.div`
  height: 1100px;
  background-color: #f5f5f5;
  padding-top: 90px;
  padding-left: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const HeaderText = styled.div`
  margin-left: 10px;
  font-weight: 500;
`;

const IconHeader = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 4px;
`;

const Content = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;
const Main = styled.div`
  width: 600px;
  align-items: center;
  display: grid;
  justify-items: center;
`;
const VerContent = styled.h4`
  margin-top: 40px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`;
const ContentText = styled.h4`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #686f7a;
`;
const Required = styled.ul`
  width: 602px;
  height: 90px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const ColLeft = styled.li`
  float: left;
  width: 300px;
  height: 88px;
  border-radius: 4px;
  background-color: white;
  align-items: center;
  display: flex;
  padding: 30px;
`;
const ColRight = styled.li`
  float: right;
  width: 300px;
  height: 88px;
  border-radius: 4px;
  background-color: white;
  align-items: center;
  display: flex;
  padding: 30px;
`;
const IconRequired = styled.div`
  width: 50px;
  height: 44px;
  margin-right: 10px;
  & svg {
    width: 36px;
    height: 36px;
    color: red;
  }
`;

const RequiredContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 144px;
  height: 44px;
  justify-content: space-between;
  background-color: #fff;
`;

const Subscriber = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: bolder;
`;
const NumRequired = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
const ApplyText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #686f7a;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const IconVerify = styled.div`
  margin-right: 6px;
  
 & svg {
 width: 16px;
 height:16px;
 #040404eb;
 }
`;
const VerForm = styled.div`
  width: 100%;
  height: 360px;
  background-color: #fff;
  padding: 0 30px 30px;
  margin-top: 50px;
`;
const HeaderForm = styled.h1`
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 24px;
  text-align: center;
`;
const Title = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 500;
  margin-top: 44px;
`;
const Document = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 500;
  margin-top: 30px;
`;
const FullName = styled.input`
  font-style: normal;
  width: 540px;
  height: 40px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 2px;
  outline: none;
`;
const Submit = styled.button`
  width: 540px;
  height: 40px;
  padding: 8px 12px;
  border-radius: 2px;
  text-align: center;
  border: none;
  margin-top: 30px;
  background-color: red;
  color: white;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: black;
  }
`;
const Verification = () => {
  return (
    <Container>
      <Header>
        <IconHeader>
          <CiCircleCheck />
        </IconHeader>
        <HeaderText>Verification</HeaderText>
      </Header>
      <Content>
        <Main>
          <Img src="https://gambolthemes.net/html-items/cursus-new-demo/images/verified-account.svg" />
          <VerContent>Verification with Edututs+</VerContent>
          <ContentText>
            Praesent sed sapien gravida, tempus nunc nec, euismod turpis. Mauris
            quis scelerisque arcu. Quisque et aliquet nisl, id placerat est.
            Morbi quis imperdiet nulla.
          </ContentText>
          <Required>
            <ColLeft>
              <IconRequired>
                <LuClock3 />
              </IconRequired>
              <RequiredContent>
                <Subscriber>14 subscribers</Subscriber>
                <NumRequired>500 required</NumRequired>
              </RequiredContent>
            </ColLeft>
            <ColRight>
              <IconRequired>
                <LuClock3 />
              </IconRequired>
              <RequiredContent>
                <Subscriber>10 public watch hours</Subscriber>
                <NumRequired>1,500 required</NumRequired>
              </RequiredContent>
            </ColRight>
          </Required>
          <ApplyText>
            <IconVerify>
              <CiCircleCheck />
            </IconVerify>
            We'll send you an email when you're eligible to apply
          </ApplyText>

          <VerForm>
            <HeaderForm>Verify Your ID</HeaderForm>
            <Title>Course Title*</Title>
            <FullName type="text" placeholder="Full Name" />
            <Document>Upload Document*</Document>
            <UploadFile />
            <Submit>Submit Now</Submit>
          </VerForm>
        </Main>
      </Content>
    </Container>
  );
};

export default Verification;
