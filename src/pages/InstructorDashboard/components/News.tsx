import React from "react";
import DashboardCarousel from "./DashboardCarousel";
import styled from "styled-components";
import news1 from '@assets/images/imgInstructorDashboard/imgCarousel/news-1.jpg'
import { useOutletContext } from "react-router-dom";

const Wrap = styled.div`
    max-width: 100%;
`;

const Card = styled.div`
    min-width: 100%;
    padding: 10px;
    border: 1px solid #efefef;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    background: #ffffff;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
    transition: all .2s ease-in-out;
`;

const ImgCarousel = styled.a`
    width: 100%;
    float: left;
    position: relative;
`;

const Img = styled.img`
    display: block;
    width: 100%;
`;

const ContentCarousel = styled.div`
    width: 100%;
    padding: 10px 5px;
    font-family: 'Roboto', sans-serif;
`;

const TitleContent = styled.a`
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    text-align: left;
    line-height: 26px;
    text-decoration: none;
`;

const NewsContent = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    color: #686f7a;
    text-align: left;
    margin-top: 15px;
`;

const AllLink = styled.div`
    width: 100%;
    margin-top: 18px;
    border-top: 1px solid #efefef;
    padding-top: 15px;
`;
const Link = styled.a`
    padding-bottom: 5px;
    padding-top: 5px;
    font-size: 14px;
    display: block;
    color: #333;
    text-align: left;
    line-height: 24px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const NewsCarousel: React.FC = () => {

    const isToolbarOpen: boolean = useOutletContext();
    const ItemWidth = isToolbarOpen ? 371 : 452;
    const SlideDistance = isToolbarOpen ? 371 : 452;

    const values = [
        {
            img: news1,
            title: "COVID-19 Updates & Resources",
            news: "See the latest updates to coronavirus-related content, including changes to monetization, and access new Creator support resources",
            link: "learn more"
        },
        {
            img: news1,
            title: "COVID-19 Updates & Resources",
            news: "See the latest updates to coronavirus-related content, including changes to monetization, and access new Creator support resources",
            link: "learn more"
        },
        {
            img: news1,
            title: "COVID-19 Updates & Resources",
            news: "See the latest updates to coronavirus-related content, including changes to monetization, and access new Creator support resources",
            link: "learn more"
        },
    ];

    return (
        <Wrap>
            <DashboardCarousel itemWidth={ItemWidth} slideDistance={SlideDistance} title={"News"} resetPositionClose={!isToolbarOpen} resetPositionOpen={isToolbarOpen}>
                {values.map((value, index) => (
                    <Card key={index}>
                        <ImgCarousel>
                            <Img src={value.img} />
                        </ImgCarousel>
                        <ContentCarousel>
                            <TitleContent href="#">{value.title}</TitleContent>
                            <NewsContent>
                                {value.news}
                            </NewsContent>
                            <AllLink>
                                <Link>{value.link}</Link>
                            </AllLink>
                        </ContentCarousel>
                    </Card>
                ))}
            </DashboardCarousel>
        </Wrap>
    );
};

export default NewsCarousel;
