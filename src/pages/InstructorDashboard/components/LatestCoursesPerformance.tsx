import React from "react";
import DashboardCarousel from "./DashboardCarousel";
import styled from "styled-components";
import img1 from '@assets/images/imgInstructorDashboard/imgCarousel/img-1.jpg'
import { useOutletContext } from "react-router-dom";
import { formatNumber } from "@utils/convertUnit.ts";

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

const BackgroundImg = styled.div`
    padding: 10px;
    display: block;
    box-sizing: border-box;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(51, 51, 51, 0.4) 90%);
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    color: #4183c4;
`;

const ContentCarousel = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
`;

const TimeAgo = styled.div`
    margin-bottom: 8px;
    font-size: 12px;
    margin-top: 19px;
    font-weight: 400;
    color: #686f7a;
    display: block;
`;

const Time = styled.span`
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

const View = styled.div`
    width: 100%;
    padding-top: 17px;
    display: flex;
    justify-content: space-between;
`;

const Purchased = styled.div`
    width: 100%;
    padding-top: 17px;
    display: flex;
    justify-content: space-between;
`;

const TotalLike = styled.div`
    width: 100%;
    padding-top: 17px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #686f7a;
    text-align: left;
`;

const Right = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #686f7a;
    text-align: left;
`;

const AllLink = styled.div`
    width: 100%;
    margin-top: 18px;
    border-top: 1px solid #efefef;
    padding-top: 15px;
    padding-bottom: 10px;
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

const LatestCoursesPerformance: React.FC = () => {

    const isToolbarOpen: boolean = useOutletContext();
    const ItemWidth = isToolbarOpen ? 371 : 452;
    const SlideDistance = isToolbarOpen ? 371 : 452;

    const values = [
        {
            img: img1,
            time: "First 2 days 22 hours",
            title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
            students: "100K Students",
            courses: "15 Courses",
            views: "1500",
            purchased: "150",
            likes: "1000",
            comments: "875",
            reviews: "105"
        },
        {
            img: img1,
            time: "First 2 days 22 hours",
            title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
            students: "100K Students",
            courses: "15 Courses",
            views: "1500",
            purchased: "150",
            likes: "1000",
            comments: "875",
            reviews: "105"
        },
        {
            img: img1,
            time: "First 2 days 22 hours",
            title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
            students: "100K Students",
            courses: "15 Courses",
            views: "1500",
            purchased: "150",
            likes: "1000",
            comments: "875",
            reviews: "105"
        },
    ];

    return (
        <Wrap>
            <DashboardCarousel itemWidth={ItemWidth} slideDistance={SlideDistance} title={"Latest Courses performance"} resetPositionClose={!isToolbarOpen} resetPositionOpen={isToolbarOpen}>
                {values.map((value, index) => (
                    <Card key={index}>
                        <ImgCarousel>
                            <Img src={value.img} />
                            <BackgroundImg></BackgroundImg>
                        </ImgCarousel>
                        <ContentCarousel>
                            <TimeAgo>
                                <Time>{value.time}</Time>
                            </TimeAgo>
                            <TitleContent href="#">{value.title}</TitleContent>
                            <View>
                                <Left>View</Left>
                                <Right>{formatNumber(value.views)}</Right>
                            </View>
                            <Purchased>
                                <Left>Purchased</Left>
                                <Right>{formatNumber(value.purchased)}</Right>
                            </Purchased>
                            <TotalLike>
                                <Left>Total Like</Left>
                                <Right>{formatNumber(value.likes)}</Right>
                            </TotalLike>
                            <AllLink>
                                <Link>go to course analytics</Link>
                                <Link>see comments ({value.comments})</Link>
                                <Link>see reviews ({value.reviews})</Link>
                            </AllLink>
                        </ContentCarousel>
                    </Card>
                ))}
            </DashboardCarousel>
        </Wrap>
    );
};

export default LatestCoursesPerformance;
