import NavbarAboutUs from "./components/NavbarAboutUs";
import styled from "styled-components";
import img1 from "../../assets/images/Background Navbar/title_bg.jpg";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
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
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #333;
  padding-top: 40px;
`;
const Body = styled.div`
  display: flex;
  width: 100%;
  padding: 50px 40px;
  background-color: #f7f7f7;
`;
const Sidebar = styled.div`
  background: #fff;
  padding: 14px;
  width: 35%;
  height: 200px;
  border: 1px solid #efefef;
`;
const FollowButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #1da1f2;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const FollowButton2 = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #3b5998;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const LearnMore = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: gray;
`;
const TWLogo = styled(IoLogoTwitter)`
  color: white;
`;
const FBLogo = styled(FaFacebookSquare)`
  color: white;
`;
const HelpCenterLink = styled.a`
  color: #007bff;
  padding-top: 20px;
  text-decoration: none;
  &:hover {
    color: #333;
  }
`;
const Content = styled.div`
  padding: 0px 0px 20px 20px;
  h1 {
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    margin-bottom: 15px;
    text-align: left;
    color: #333;
    line-height: 26px;
    font-size: 24px;
  }
  p {
    font-family: "Roboto", sans-serif;
    margin-bottom: 0px !important;
    text-align: left;
    color: #686f7a;
    line-height: 26px;
    font-size: 14px;
    font-weight: 400;
  }
  a {
    text-decoration: none;
    color: blue;
    &:hover {
      color: #686f7a;
    }
  }
`;
const ContentListNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 35px;
`;
const ContentItemNews = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: left;
  h2 {
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    margin: 10px 0px;
    text-align: left;
    color: #333;
    line-height: 26px;
    font-size: 16px;
  }
  div {
    margin-top: 15px;
  }
  a {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    margin-top: 50px;
    font-weight: 600;
    color: #333;
    &:hover {
      text-decoration: underline;
      color: #333;
    }
  }
`;
const News = [
  {
    day: "March 10, 2020",
    title: "Press News Title",
    description:
      "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...",
  },
  {
    day: "March 10, 2020",
    title: "Press News Title",
    description:
      "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...",
  },
  {
    day: "March 10, 2020",
    title: "Press News Title",
    description:
      "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...",
  },
];
const ContentListPress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ContentItemPress = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: left;
  a {
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    margin: 10px 0px;
    text-align: left;
    color: #333;
    line-height: 26px;
    font-size: 16px;
  }
`;
const PressRelease = [
  {
    day: "March 10, 2020",
    title: "Press Release Title",
  },
  {
    day: "March 10, 2020",
    title: "Press Release Title",
  },
  {
    day: "March 10, 2020",
    title: "Press Release Title",
  },
  {
    day: "March 10, 2020",
    title: "Press Release Title",
  },
  {
    day: "March 10, 2020",
    title: "Press Release Title",
  },
];
const SeeMore = styled.div`
  padding-top: 30px;
  a {
    color: #333;
    font-size: 14px;

    font-weight: 600;
    font-family: "Roboto", sans-serif;
    &:hover {
      text-decoration: underline;
      color: #333;
    }
  }
`;
const Top = styled.div`
  padding: 20px;
`;
const Bot = styled.div`
  padding: 20px;
`;
const Press = () => {
  return (
    <Container>
      <HeadNavbar>
        <BackgroundImage />
        <NavbarAboutUs />
        <Title>What others are saying</Title>
      </HeadNavbar>
      <Body>
        <Sidebar>
          <FollowButton>
            <TWLogo /> Follow
          </FollowButton>
          <FollowButton2>
            <FBLogo /> Follow
          </FollowButton2>
          <LearnMore>
            <p>Learn More</p>
            <HelpCenterLink href="#">Cursus Help Center</HelpCenterLink>
          </LearnMore>
        </Sidebar>

        <Content>
          <Top>
            <h1>Cursus in the News</h1>
            <p>
              For media interviews and inquiries, please send an email to{" "}
              <a href="#">press@cursus.com</a>
            </p>
            <ContentListNews>
              {News.map((news) => (
                <ContentItemNews>
                  <p>{news.day}</p>
                  <h2>{news.title}</h2>
                  <p>{news.description}</p>
                  <div>
                    <a href="#">
                      Read More
                      <FaAnglesRight />
                    </a>
                  </div>
                </ContentItemNews>
              ))}
            </ContentListNews>
            <SeeMore>
              <a href="#">See More News</a>
            </SeeMore>
          </Top>
          <Bot>
            <h1>Press Releases</h1>
            <p>For Release from Cursus</p>
            <ContentListPress>
              {PressRelease.map((press) => (
                <ContentItemPress>
                  <p>{press.day}</p>
                  <a href="#">{press.title}</a>
                </ContentItemPress>
              ))}
            </ContentListPress>
            <SeeMore>
              <a href="#">See More Press Releases</a>
            </SeeMore>
          </Bot>
        </Content>
      </Body>
    </Container>
  );
};

export default Press;
