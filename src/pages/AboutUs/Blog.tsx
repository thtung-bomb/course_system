import NavbarAboutUs from "./components/NavbarAboutUs";
import styled from "styled-components";
import imgbg from "../../assets/images/Background Navbar/title_bg.jpg";
import { IoMdSearch } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import img1 from "@assets/images/AboutUs/img-1.jpg";
import { GoArrowRight } from "react-icons/go";
import img2 from "@assets/images/AboutUs/img-2.jpg";
import img3 from "@assets/images/AboutUs/img-3.jpg";
import img4 from "@assets/images/AboutUs/img-4.jpg";

const BlogImage = [
  {
    img: img1,
    blogTime: "109k views • March 10, 2020",
    blogTitle: "Blog Title Here",
    blogDescription:
      "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam interdum mollis arcu.",
  },
  {
    img: img2,
    blogTime: "109k views • March 10, 2020",
    blogTitle: "Blog Title Here",
    blogDescription:
      "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam interdum mollis arcu.",
  },
  {
    img: img3,
    blogTime: "109k views • March 10, 2020",
    blogTitle: "Blog Title Here",
    blogDescription:
      "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam interdum mollis arcu.",
  },
  {
    img: img4,
    blogTime: "109k views • March 10, 2020",
    blogTitle: "Blog Title Here",
    blogDescription:
      "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam interdum mollis arcu.",
  },
];

const TitleNavbar = styled.h1`
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin-top: 30px;
  color: #333;
  text-align: center;
  line-height: 30px;
  pointer-events: initial;
`;
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
  background-image: url(${imgbg});
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
const Sidebar = styled.div`
  background: #fff;
  padding: 14px;
  width: 23%;
  height: 360px;
  border: 1px solid #efefef;
`;

const SearchContainer = styled.div`
  position: relative;
  padding-bottom: 20px;

  border-bottom: 1px solid #ddd;
`;
const SearchIcon = styled(IoMdSearch)`
  position: absolute;
  top: 35%;
  left: 10px;
  transform: translateY(-50%);
  color: gray;
  font-size: 20px;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  background-color: #f7f7f7;
  &:focus::placeholder {
    color: #333;
  }
  &:focus ~ ${SearchIcon} {
    color: #333;
  }
  &:focus {
    border-color: black;
  }
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  cursor: pointer;
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

const HelpCenterLink = styled.a`
  color: #007bff;
  padding-top: 20px;
  text-decoration: none;
  &:hover {
    color: #333;
  }
`;
const TWLogo = styled(IoLogoTwitter)`
  color: white;
`;
const FBLogo = styled(FaFacebookSquare)`
  color: white;
`;
const ListBlog = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 77%;
`;
const BlogItem = styled.div`
  display: flex;
  background-color: #fff;
  padding: 10px;
`;
const BlogImg = styled.img`
  width: 343px;
  height: 193px;
  cursor: pointer;
`;
const BlogContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px 15px;
  gap: 15px;
  a {
    text-decoration: none;
  }
`;
const BlogTime = styled.p`
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  color: #686f7a;
`;
const BlogTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #333;
  line-height: 1.5;
  cursor: pointer;
`;
const BlogDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #686f7a;
  line-height: 26px;
`;
const ReadMore = styled.a`
  width: 90px;
  align-items: center;
  color: #333;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 555;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;
const Body = styled.div`
  display: flex;
  background-color: #f7f7f7;
  width: 100%;
  padding: 50px 30px;
`;
const RightIcon = styled(GoArrowRight)`
  margin-bottom: 3px;
`;
const Pagination = styled.ul`
  display: flex;
  justify-content: flex-end;
`;
const PaginationItem = styled.a`
  display: block;
  padding: 7px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  text-decoration: none;
  color: #686f7a;
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 5px;
  text-align: center;
  &:hover {
    color: #fff;
    background-color: red;
  }
  cursor: pointer;
`;
const PaginationItem1 = styled.a`
  display: block;
  padding: 7px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  text-decoration: none;
  color: white;
  background-color: black;
  border: 1px solid #efefef;
  border-radius: 5px;
  text-align: center;
  &:hover {
    color: #fff;
    background-color: red;
  }
  cursor: pointer;
`;
const Blog = () => {
  return (
    <Container>
      <HeadNavbar>
        <BackgroundImage />
        <NavbarAboutUs />
        <TitleNavbar>Insights, ideas, and stories</TitleNavbar>
      </HeadNavbar>

      <Body>
        <Sidebar>
          <SearchContainer>
            <SearchInput placeholder="Search" />
            <SearchIcon />
          </SearchContainer>
          <Label>
            <span>Labels</span>
            <input type="checkbox" />
          </Label>
          <Label>
            <span>Archive</span>
            <input type="checkbox" />
          </Label>
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

        <ListBlog>
          {BlogImage.map((blogImage) => (
            <BlogItem>
              <a href="/BlogSingleView">
                <BlogImg src={blogImage.img}></BlogImg>
              </a>
              <BlogContent>
                <BlogTime>{blogImage.blogTime}</BlogTime>
                <a href="/BlogSingleView">
                  <BlogTitle>{blogImage.blogTitle}</BlogTitle>
                </a>
                <BlogDescription>{blogImage.blogDescription}</BlogDescription>
                <a href="/BlogSingleView">
                  <ReadMore>
                    Read More <RightIcon />
                  </ReadMore>
                </a>
              </BlogContent>
            </BlogItem>
          ))}
          <Pagination>
            <li>
              <PaginationItem href="#">PREV</PaginationItem>
            </li>
            <li>
              <PaginationItem1 href="#">1</PaginationItem1>
            </li>
            <li>
              <PaginationItem href="#">2</PaginationItem>
            </li>
            <li>
              <PaginationItem href="#">...</PaginationItem>
            </li>
            <li>
              <PaginationItem href="#">24</PaginationItem>
            </li>
            <li>
              <PaginationItem href="#">NEXT</PaginationItem>
            </li>
          </Pagination>
        </ListBlog>
      </Body>
    </Container>
  );
};

export default Blog;
