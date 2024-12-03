
import NavbarAboutUs from "./components/NavbarAboutUs";
import styled from 'styled-components';
import img1 from "../../assets/images/Background Navbar/title_bg.jpg"
import line from "../../assets/images/AboutUs/line.svg";
import learn from "../../assets/images/AboutUs/career-1.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { LuPlane } from "react-icons/lu";
import { LiaAdjustSolid } from "react-icons/lia";
import { TbMoodKid } from "react-icons/tb";
import { IoFlowerOutline } from "react-icons/io5";
import { FaAnchor } from "react-icons/fa";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { ImRss2 } from "react-icons/im";

const Container = styled.div`
  text-align: center;

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
const Title = styled.h1`
  font-size: 24px;
  font-family: 'Roboto',sans-serif;
  font-weight: 600;
  color: #333;
  padding-top: 40px;
`;
const StoryContainer = styled.div`
  display: flex;
  padding: 62px 51px  62px 40px;
`;
const Video = styled.iframe`
  padding: 0px 11px;
  width: 580px;
  height: 300px;
`;
const Content = styled.div`
  width: 50%;
  text-align: left;
  padding: 0px 11px;
  h2{
    font-size: 24px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 4px;
    text-align: left;
    color: #333;
    line-height: 26px;
  }
  img{
    padding-top: 20px;
    margin-bottom: 6px;
  }
  p{
    font-weight: 400;
    font-family: "Roboto",sans-serif;
    text-align: left;
    color:#686f7a;
    line-height: 25px;
    font-size: 14px;
    margin-top: 27px;
  }
`;
const Description = styled.p`
  font-size: 14px;
  line-height: 25px;
  color:#686f7a;
`;
const VideoButton = styled.a`
  color: white;
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: red;
  margin-top: 33px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Roboto",sans-serif;
  &:hover{
    background-color: black;
  }
`;
const LearnContainer = styled.div`
  background-color: #f7f7f7;
  `;

const BenefitsContainer = styled.div`
  padding: 62px 40px;
  h1{
    margin-bottom: 17px;
    font-size: 24px;
    font-weight: 600;
    font-family: "Roboto",sans-serif;
    text-align: center;
    color: #333;
  }

  img{
   padding: 20px 0px 0px 0px ;
  }
`;
const Icon = styled.i`
  font-size: 40px;
  margin: 0px 8px;
`;
const FeatureItem = [
  {
    icon: <FaLocationDot />,
    title: "Work from anywhere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan."
  },
  {
    icon: <LuPlane />,
    title: "Work and Travel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan."
  },
  {
    icon: <LiaAdjustSolid />,
    title: "Flexible Hours",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan."
  },
  {
    icon: <TbMoodKid />,
    title: "Purchasing Leave",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan."
  },
  {
    icon: <ImRss2 />,
    title: "Social Events",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan."
  },
  {
    icon: <IoFlowerOutline />,
    title: "Wellness Program",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan."
  },
  {
    icon: <MdOutlineWifiProtectedSetup />,
    title: "Mentoring Program",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan."
  },
  {
    icon: <FaAnchor />,
    title: "Fundraising",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan."
  }

];
const FeatureList = styled.div`
  display: flex;
  flex-wrap  :wrap ;
`;
const Feature = styled.div`
  width: 25%;
  padding: 0px 10px;
  margin-top: 35px;
  text-align: center;
  h1{
    font-size: 18px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 13px;
    margin-top: 26px;
    text-align: center;
    color: #333;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #686f7a;
    text-align: center;
    line-height: 26px;
  }
`;
const Inline = styled.p`
  font-size: 16px;
  color: #686f7a;
  padding: 0px 300px;
  font-family: "Roboto",sans-serif;
  line-height: 26px;
`;
const OpenRolesContainer = styled.div`
  background-color: #f7f7f7;
  padding: 62px 40px;
  h1{
    margin-bottom: 17px;
    font-size: 24px;
    font-weight: 600;
    font-family: "Roboto",sans-serif;
    text-align: center;
    color: #333;
  }

  img{
   padding: 20px 0px 0px 0px ;
  }
`;
const OpenRolesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
`;
const OpenRoles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  margin: 15px 10px;
  width: 48%;
  padding: 30px;
  h1{
    font-size: 18px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 15px !important;
    text-align: center;
    color: #333;
    line-height: 26px;
  }
  span{
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0 !important;
    text-align: center;
    color: #686f7a;
  }
  a{
    color: white;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    padding: 10px 20px;
    border-radius: 3px;
    background-color: red;
    margin-top: 33px;
    font-size: 14px;
    font-weight: 600;
    font-family: "Roboto",sans-serif;
    &:hover{
    background-color: black;
    }
  }
`;
const OpenRolesItem = [
  {
    title: "Algorithm Engineer",
    inline: "India",
    button: "Learn More and Apply"
  },
  {
    title: "Chief Technology Officer",
    inline: "India",
    button: "Learn More and Apply"
  },
  {
    title: "Customer Growth & Marketing Analyst",
    inline: "India",
    button: "Learn More and Apply"
  },
  {
    title: "Data Engineer",
    inline: "India",
    button: "Learn More and Apply"
  },
  {
    title: "iOS Developer - Edututs+ San Francisco, CA",
    inline: "San Francisco, CA",
    button: "Learn More and Apply"
  },
  {
    title: "Senior UX Designer",
    inline: "India",
    button: "Learn More and Apply"
  },




];
const Careers = () => {
  return (
    <Container>
      <HeadNavbar>
        <BackgroundImage />
        <NavbarAboutUs />
        <Title>We're a passionate, creative, and global company, come work with us.</Title>
      </HeadNavbar>

      <StoryContainer>
        <Video width="640" height="360" src="https://www.youtube.com/embed/TKnufs85hXk" title="Envato Elements: Unlimited Assets For Your Creative Projects" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Video>
        <Content>
          <h2>Working at Cursus</h2>
          <img src={line} />
          <p>Phasellus ex mauris, rhoncus quis posuere sit amet, ultricies nec lorem. Vivamus vestibulum porta urna, in placerat lectus facilisis sit amet. Vestibulum non mauris augue. Maecenas arcu magna, aliquam imperdiet tempor nec, lobortis ac erat. Aliquam vel magna tortor. Cras ornare, enim eu tristique tristique, orci nisl blandit mi, at dignissim velit leo nec metus.</p>
          <VideoButton href="#learnbody">Check Out Our Open Roles</VideoButton>
        </Content>
      </StoryContainer>

      <LearnContainer>
        <img src={learn} />
        <h1></h1>
        <p></p>
      </LearnContainer>

      <BenefitsContainer>
        <h1>Benefits</h1>
        <Inline>Cursus culture is something special, and to complement and support that culture we have some amazing benefits.</Inline>
        <img src={line} />
        <FeatureList>
          {FeatureItem.map((featureitem) => (
            <Feature>
              <Icon>{featureitem.icon}</Icon>
              <h1>{featureitem.title}</h1>
              <p>{featureitem.description}</p>
            </Feature>
          ))}
        </FeatureList>
      </BenefitsContainer>

      <OpenRolesContainer>
        <h1>Open Roles</h1>
        <Inline>Cursus is a fast growing company and we're expanding both our Punjab office and international offices.</Inline>
        <img src={line}></img>
        <OpenRolesList>
          {OpenRolesItem.map((openrolesitem) => (
            <OpenRoles>
              <h1>{openrolesitem.title}</h1>
              <span>{openrolesitem.inline}</span>
              <a href="/dataEngineer">{openrolesitem.button}</a>
            </OpenRoles>
          ))},
        </OpenRolesList>
      </OpenRolesContainer>
    </Container>
  )
}

export default Careers;