import React from 'react';
import NavbarAboutUs from './components/NavbarAboutUs';
import styled from 'styled-components';
import { MdOutlineSmartphone } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import img1 from "../../assets/images/Background Navbar/title_bg.jpg"
import line from "../../assets/images/AboutUs/line.svg";
import storyimg from "../../assets/images/AboutUs/stroy_img.png";
import team from "../../assets/images/AboutUs/team.jpg";
const Container = styled.div`
  text-align: center;

`;

const Title = styled.h1`
  pointer-events: initial;
  font-size: 24px;
  font-family: 'Roboto',sans-serif;
  font-weight: 600;
  color: #333;
  margin-bottom: 17px;
  pointer-events: initial;
`;

const FeaturesList = styled.div`
  display: flex;
  justify-content: space-around;

  
  
`;

const Feature = styled.div`
  padding-top:20px ;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FeatureIcon = styled.div`
  font-size: 30px;
  font-weight: 600;
  
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 25px;
  color:#686f7a;
  padding: 27px 0px;
  pointer-events: initial;
`;
const StoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 62px 0px;
  width: 100%;
`;
const StoryContent = styled.div`
  width: 50%;
  text-align: left;

  
`;

const StoryImg = styled.img`
   width: 435px;
   height: 375px;
   
   
`;
const GlobalReachContainer = styled.div`
    background-color: #f7f7f7 ;
    padding: 62px 0px;
    
`;
const ListGlobal = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const ItemGlobal = styled.div`
    font-size: 42px;
    color: #333;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-top: 60px;
    width: 16%;
`;
const ItemTitle = styled.h1`
  font-weight: 700;
  font-size: 42px;
`;
const MeetContainer = styled.div`
  padding: 62px 0px;
  width: 100%;
`;
const MeetContent = styled.div`
  width: 100%;
  display: flex;
  text-align: left;

`;
const MeetContentRight = styled.div`
  width: 50%;
  padding: 10px 40px;
  
`;
const MeetButton = styled.button`
  color: #ffffff;
  height: 40px;
  padding: 10px 20px;
  border: 0;
  margin-top: 34px;
  margin-bottom: 20px;
  background-color: red;
  cursor: pointer;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  background: #ed2a26;
  display: inline-block;
  &:hover{
    background-color: black;
  }
`;
const MeetImg = styled.img`
  width: 579px;
  height: 387px;
`;
const FeaturesContainer = styled.div`
  background-color: #f7f7f7 ;
  padding: 62px 0px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadNavbar = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 90px;
  padding-bottom: 60px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${img1});
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: -1;
`;
const LineImg = styled.img`
  padding-top: 20px;
  margin-bottom: 6px;
`;
const TitleNavbar = styled.h1`
  font-size: 24px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    margin-top: 30px;
    color: #333;
    text-align: center;
    line-height: 30px;
  pointer-events: initial;
`;
const UnderTitle = styled.p`
  font-size: 14px;
  font-weight: 400px;
  font-family: 'Roboto',sans-serif;
  line-height: 25px;
  color:#686f7a;
  padding: 0px 300px;
  pointer-events: initial;
`;
const App: React.FC = () => {
  return (

    <Container>
      <HeadNavbar>
        <BackgroundImage />
        <NavbarAboutUs />
        <TitleNavbar>Improving Lives Through Learning</TitleNavbar>
      </HeadNavbar>
      <FeaturesContainer>
        <Head>
          <Title>Our Features</Title>
          <UnderTitle>On cursurs, you have access to:</UnderTitle>
          <LineImg src={line}></LineImg>
        </Head>
        <FeaturesList>
          <Feature>
            <FeatureIcon><MdOutlineSmartphone /></FeatureIcon>
            <FeatureTitle>Mobile Learning</FeatureTitle>
            <Description>Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Description>
          </Feature>
          <Feature>
            <FeatureIcon><GoPeople /></FeatureIcon>
            <FeatureTitle>Academic & Technical Support</FeatureTitle>
            <Description>Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Description>
          </Feature>
          <Feature>
            <FeatureIcon><PiMedalThin /></FeatureIcon>
            <FeatureTitle>Sharable Certificates</FeatureTitle>
            <Description>Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Description>
          </Feature>
          <Feature>
            <FeatureIcon><AiOutlineGlobal /></FeatureIcon>
            <FeatureTitle>An Inclusive Experience</FeatureTitle>
            <Description>Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Description>
          </Feature>
        </FeaturesList>
      </FeaturesContainer>
      <StoryContainer>
        <StoryContent>
          <Title>Our Story</Title>
          <LineImg src={line}></LineImg>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vel dolor id ultrices. Proin a magna at mi pretium pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis augue. Nam vitae purus placerat, hendrerit nisl id, finibus magna. Etiam pharetra gravida ornare. Donec sagittis, ipsum in egestas egestas, dui lorem sollicitudin justo, ut ullamcorper velit neque eu velit. Ut et fringilla elit. Mauris augue augue, auctor a blandit ac, convallis eget neque. Curabitur in ante ante. Nullam laoreet tempus erat at ornare. In nisl nisi, dapibus eget facilisis sit amet, commodo quis nibh.</Description>
        </StoryContent>
        <StoryImg src={storyimg}></StoryImg>
      </StoryContainer>

      <GlobalReachContainer>
        <Title>Our Global Reach</Title>
        <UnderTitle>Cursus is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.</UnderTitle>
        <LineImg src={line}></LineImg>
        <ListGlobal>
          <ItemGlobal>
            <ItemTitle>25k</ItemTitle>
            <Description>Instructor</Description>
          </ItemGlobal>
          <ItemGlobal>
            <ItemTitle>95k</ItemTitle>
            <Description>Courses</Description>
          </ItemGlobal>
          <ItemGlobal>
            <ItemTitle>40M</ItemTitle>
            <Description>Course enrollments</Description>
          </ItemGlobal>
          <ItemGlobal>
            <ItemTitle>50+</ItemTitle>
            <Description>Languages</Description>
          </ItemGlobal>
          <ItemGlobal>
            <ItemTitle>595+</ItemTitle>
            <Description>Membership Partners</Description>
          </ItemGlobal>
          <ItemGlobal>
            <ItemTitle>295</ItemTitle>
            <Description>Countries</Description>
          </ItemGlobal>
        </ListGlobal>
      </GlobalReachContainer>

      <MeetContainer>
        <Title>Meet Our Team</Title>
        <UnderTitle>A perfect blend of creativity and technical wizardry. The best people formula for great websites!</UnderTitle>
        <LineImg src={line} />
        <MeetContent>
          <MeetContentRight>
            <Description>Morbi eget elit eget turpis varius mollis eget vel massa. Donec porttitor, sapien eget commodo vulputate, erat felis aliquam dolor, non condimentum libero dolor vel ipsum. Sed porttitor nisi eget nulla ullamcorper eleifend. Fusce tristique sapien nisi, vel feugiat neque luctus sit amet. Quisque consequat quis turpis in mattis. Maecenas eget mollis nisl. Cras porta dapibus est, quis malesuada ex iaculis at. Vestibulum egestas tortor in urna tempor, in fermentum lectus bibendum. In leo leo, bibendum at pharetra at, tincidunt in nulla. In vel malesuada nulla, sed tincidunt neque. Phasellus at massa vel sem aliquet sodales non in magna. Ut tempus ipsum sagittis neque cursus euismod. Vivamus luctus elementum tortor, ac aliquet dolor vehicula et.</Description>
            <a href='#'>
              <MeetButton >Join Our Team</MeetButton>
            </a>
          </MeetContentRight>
          <MeetImg src={team}></MeetImg>
        </MeetContent>
      </MeetContainer>
    </Container>

  );
};

export default App;
