// About.tsx
import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #333;
`;
const ExTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;
const ListItem = styled.ul`
  list-style-type: disc;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Item = styled.li`
  font-size: 14px;
  font-weight: 400;
  color: #686f7a;
  line-height: 26px;
`;
const HightLight = styled.span`
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  color: #686f7a;
`;
const Table = styled.div`
  width: 1222px;
  background-color: #fff;
  padding: 30px;
  margin-bottom: 30px;
`;
const WrapList = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const About: React.FC = () => (
  <>
    <Title>Requirements</Title>
    <ListItem>
      <Item>Have a computer with Internet</Item>
      <Item>Be ready to learn an insane amount of awesome stuff</Item>
      <Item>Prepare to build real web apps!</Item>
    </ListItem>
    <Title>Description</Title>
    <ExTitle>Just updated to include Bootstrap 4.1.3!</ExTitle>
    <Description>
      Hi! Welcome to the Web Developer Bootcamp, the{" "}
      <HightLight>only course you need to learn web development</HightLight>.
      There are a lot of options for online developer training, but this course
      is without a doubt the most comprehensive and effective on the market.
      Here's why:
    </Description>
    <ListItem>
      <Item>
        This is the only online course taught by a professional bootcamp
        instructor.
      </Item>
      <Item>
        94% of my in-person bootcamp students go on to get full-time developer
        jobs. Most of them are complete beginners when I start working with
        them.
      </Item>
      <Item>
        The previous 2 bootcamp programs that I taught cost $14,000 and $21,000.
        This course is just as comprehensive but with brand new content for a
        fraction of the price.
      </Item>
      <Item>
        Everything I cover is up-to-date and relevant to today's developer
        industry. No PHP or other dated technologies. This course does not cut
        any corners.
      </Item>
      <Item>
        This is the only complete beginner full-stack developer course that
        covers NodeJS.
      </Item>
      <Item>
        We build 13+ projects, including a gigantic production application
        called YelpCamp. No other course walks you through the creation of such
        a substantial application.
      </Item>
      <Item>
        The course is constantly updated with new content, projects, and
        modules. Think of it as a subscription to a never-ending supply of
        developer training.
      </Item>
    </ListItem>
    <Description>
      When you're learning to program you often have to sacrifice learning the
      exciting and current technologies in favor of the "beginner friendly"
      classes. With this course, you get the best of both worlds. This is a
      course designed for the complete beginner, yet it covers some of the most
      exciting and relevant topics in the industry.
    </Description>
    <Description>
      {" "}
      Throughout the course we cover tons of tools and technologies including:
    </Description>
    <ListItem>
      <Item>
        <HightLight> HTML5</HightLight>
      </Item>
      <Item>
        <HightLight> CSS3</HightLight>
      </Item>
      <Item>
        <HightLight> JavaScript</HightLight>
      </Item>
      <Item>
        <HightLight> Bootstrap</HightLight> 4
      </Item>
      <Item>
        <HightLight> SemanticUI</HightLight>
      </Item>
      <Item>
        <HightLight> DOM Manipulation</HightLight>
      </Item>
      <Item>
        <HightLight> jQuery</HightLight>
      </Item>
      <Item>
        <HightLight> Unix (Command Line) Commands</HightLight>
      </Item>
      <Item>
        <HightLight> NodeJS</HightLight>
      </Item>
      <Item>
        <HightLight> NPM</HightLight>
      </Item>
      <Item>
        <HightLight> ExpressJS</HightLight>
      </Item>
      <Item>
        <HightLight> REST</HightLight>
      </Item>
      <Item>
        <HightLight> MongoDB</HightLight>
      </Item>
      <Item>
        <HightLight> Database Associations</HightLight>
      </Item>
      <Item>
        <HightLight> Authentication</HightLight>
      </Item>
      <Item>
        <HightLight> PassportJS</HightLight>
      </Item>
      <Item>
        <HightLight> Authorization</HightLight>
      </Item>
    </ListItem>
    <Description>
      This course is also unique in the way that it is structured and presented.
      Many online courses are just a long series of "watch as I code" videos.
      This course is different. I've incorporated everything I learned in my
      years of teaching to make this course not only more effective but more
      engaging. The course includes:
    </Description>
    <ListItem>
      <Item>Lectures</Item>
      <Item>Code-Alongs</Item>
      <Item>Projects</Item>
      <Item>Exercises</Item>
      <Item>Research Assignments</Item>
      <Item>Slides</Item>
      <Item>Downloads</Item>
      <Item>Readings</Item>
    </ListItem>
    <Description>
      If you have any questions, please don't hesitate to contact me. I got into
      this industry because I love working with people and helping students
      learn. Sign up today and see how fun, exciting, and rewarding web
      development can be!
    </Description>
    <Title>Who this course is for :</Title>
    <ListItem>
      <Item>
        This course is for anyone who wants to learn about web development,
        regardless of previous experience
      </Item>
      <Item>It's perfect for complete beginners with zero experience</Item>
      <Item>
        It's also great for anyone who does have some experience in a few of the
        technologies (like HTML and CSS) but not all
      </Item>
      <Item>
        If you want to take ONE COURSE to learn everything you need to know
        about web development, take this course
      </Item>
    </ListItem>
    <Table>
      <Title>What you'll learn</Title>
      <WrapList>
        <ListItem>
          <Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Item>
          <Item>
            Donec ultricies elit porttitor, ultrices enim a, commodo dolor.
          </Item>
          <Item>
            Nunc dapibus ligula sed justo porta, id volutpat odio iaculis.
          </Item>
          <Item>
            Maecenas pharetra mi quis nisl mollis, molestie imperdiet lorem
            molestie.
          </Item>
          <Item>Maecenas ultricies felis in pulvinar blandit.</Item>
          <Item>
            Praesent ac libero consequat, efficitur tortor et, interdum sem.
          </Item>
          <Item>
            Nullam non lacus nibh. Etiam et fringilla neque, ut vulputate
            sapien. Sed vitae tortor gravida, interdum felis at, pulvinar enim.
            Integer tempor urna leo.
          </Item>
          <Item>
            Phasellus ultrices tellus sed volutpat vestibulum. Curabitur aliquet
            dictum leo non congue.
          </Item>
          <Item>
            In hac habitasse platea dictumst. Aenean vel fermentum neque.
          </Item>
          <Item>Suspendisse semper feugiat urna dictum interdum.</Item>
        </ListItem>
        <ListItem>
          <Item>
            Nullam non lacus nibh. Etiam et fringilla neque, ut vulputate
            sapien. Sed vitae tortor gravida, interdum felis at, pulvinar enim.
            Integer tempor urna leo.
          </Item>
          <Item>
            Phasellus ultrices tellus sed volutpat vestibulum. Curabitur aliquet
            dictum leo non congue.
          </Item>
          <Item>
            In hac habitasse platea dictumst. Aenean vel fermentum neque.
          </Item>
          <Item>Suspendisse semper feugiat urna dictum interdum.</Item>
          <Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Item>
          <Item>
            Donec ultricies elit porttitor, ultrices enim a, commodo dolor.
          </Item>
          <Item>
            Nunc dapibus ligula sed justo porta, id volutpat odio iaculis.
          </Item>
          <Item>
            Maecenas pharetra mi quis nisl mollis, molestie imperdiet lorem
            molestie.
          </Item>
          <Item>Maecenas ultricies felis in pulvinar blandit.</Item>
          <Item>
            Praesent ac libero consequat, efficitur tortor et, interdum sem.
          </Item>
        </ListItem>
      </WrapList>
    </Table>
  </>
);

export default About;
