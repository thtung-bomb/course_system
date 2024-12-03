import styled from "styled-components";
import NavbarAboutUs from "./components/NavbarAboutUs";
import img1 from "../../assets/images/Background Navbar/title_bg.jpg"
import imgCompany from "../../assets/images/AboutUs/company.jpg";
import line from "../../assets/images/AboutUs/line.svg";
import { FiPhone } from "react-icons/fi";
import Punjab from "../../assets/images/AboutUs/Punjab,india.jpg"
import Francisco from "../../assets/images/AboutUs/san francisco.jpg"
import Brazil from "../../assets/images/AboutUs/brazil.jpg"
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
  margin-bottom: 4px;
`;
const StoryContainer = styled.div`
  display: flex;
  padding: 62px 40px;
  
`;
const StoryContent = styled.div`
  padding: 0px 9px 11px 11px;
  width: 50%;
  text-align: left;
  img{
    padding-top:20px ;
    margin-bottom: 6px;
  }
`;
const Description = styled.p`
  font-size: 14px;
  line-height: 25px;
  color:#686f7a;
  margin-top: 27px;
`;
const StoryImg = styled.img`
   width: 470px;
   height: 300px;
   margin-left: 70px;
   
`;
const FeatureContainer = styled.div`
  background-color: #f7f7f7;

`;
const Head = styled.div`
  
`;
const FeatureList = styled.div`
  display:flex;
  justify-content: space-between; 
  padding: 30px 40px;
  
`;
const Feature = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 10px;

  width: 379px;
  height: 387px;
  img{
    width: 358px;
    height: 202px;
  }
 
`;
const FeatureContent = styled.div`
  padding: 20px 10px;
  a{
    text-decoration: none;
  }
  h1{
    display: block;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: #333;
    text-align: left;
    margin-bottom: 7px;
    line-height: 26px;
    cursor: pointer;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    line-height: 26px;
    color: #686f7a;
    text-align: left;
    margin-top: 15px;
    cursor: pointer;
  }
`;
const FeatureItem = [
  {
    img: Punjab,
    title: "Punjab, India",
    description: "#1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road, 141001, LDH, Punjab, India",
    phone: "0161-1234567",
  },
  {
    img: Francisco,
    title: "San Francisco, CA",
    description: "586 Lorem st. 5 floor,San Francisco, CA 94107 San Francisco, CA 94107",
    phone: " +1 415-1234567",
  },
  {
    img: Brazil,
    title: "São Paulo, Brazil",
    description: "Lorem ipsum 589,Vila Madalena, São Paulo - SP 01443-010",
    phone: " +55-11-1234567",
  }
]
const Company = () => {
  return (
    <Container>
      <HeadNavbar>
        <BackgroundImage />
        <NavbarAboutUs />
        <Title>Expanding learning opportunities</Title>
      </HeadNavbar>
      <StoryContainer>
        <StoryContent>
          <Title>Our Origins</Title>
          <img src={line} />
          <Description>Cursus was founded in 2020 by computer science instructor with a vision to provide anyone, anywhere with access to the world’s best education. Now many instructors put their courses online for anyone to take and taught more learners in a few months than they could over an entire lifetime in the classroom. Today, Cursus has expanded to reach more than 40 million people and 2,300 businesses around the world. On Cursus you can find online courses, instructors, and certificates from Cursus.</Description>
        </StoryContent>
        <StoryImg src={imgCompany} />
      </StoryContainer>

      <FeatureContainer>
        <Head>
          <Title>Our Offices</Title>
          <Description>Cursus branches around the world</Description>
          <img src={line}></img>
        </Head>
        <FeatureList>
          {FeatureItem.map((FeatureItem) => (
            <Feature>
              <img src={FeatureItem.img} />
              <FeatureContent>
                <a href="#"><h1>{FeatureItem.title}</h1></a>
                <p>{FeatureItem.description}</p>
                <a href="#"><p><FiPhone /> {FeatureItem.phone}</p></a>
              </FeatureContent>

            </Feature>
          ))}

        </FeatureList>
      </FeatureContainer>
    </Container>
  )
}

export default Company;