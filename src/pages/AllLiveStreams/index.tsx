import React from 'react'
import CardComponent from '@components/Slide/CardComponent'
import LiveS from "@components/RightLiveStream";
import styled from 'styled-components'
import user from "@assets/images/imgSlide/img-1.jpg";
import user1 from "@assets/images/imgSlide/img-2.jpg";
import user2 from "@assets/images/imgSlide/img-3.jpg";
import user3 from "@assets/images/imgSlide/img-3.jpg";
import user4 from "@assets/images/imgSlide/img-3.jpg";
import { useOutletContext } from "react-router-dom";


const WarpContent = styled.div`
    margin: 90px 30px 30px 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    max-width: 100%;
`;

const LeftContent = styled.div<{ isToolbarOpen: boolean }>`
    max-width: ${({ isToolbarOpen }) => (isToolbarOpen ? "934px" : "1124px")};
    margin-right: 12px;
    transition: width 0.3s ease-in-out;
`;

const Title = styled.div`
    p {
        width: 132.8px;
        height: 23.1375px;
        margin: 0px 0px 20px;
        display: block;
        box-sizing: border-box;
        font-size: 18px;
        font-family: Roboto, sans-serif;
        font-weight: 500;
        text-align: left;
        line-height: 23.1429px;
        color:#333333;
    }
`;

const ListCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 11px;
    row-gap: 21px;
`;

const RightContent = styled.div<{ isToolbarOpen: boolean }>`
    width: ${({ isToolbarOpen }) => (isToolbarOpen ? "294px" : "353px")};
    transition: width 0.3s ease-in-out;
`;

const AllLiveStreams: React.FC = () => {

    const isToolbarOpen: boolean = useOutletContext();

    const courseCardWidth = isToolbarOpen ? "100%" : "100%";
    const courseSmallCardWidth = isToolbarOpen ? "185px" : "230px";

    const customStyle = {
        card: {
            transition: "all 0.3s ease",
        } as React.CSSProperties,
        smallCard: {
            transition: "all 0.3s ease",
        } as React.CSSProperties,
    };

    const names = [
        "John Doe",
        "Jassica",
        "Edututs+",
        "Ridhima",
        "Zoena",
        "Albert Dua",
        "Amripal",
        "Joginder Singh",
        "Jimmy",
        "Albert Dua",
        "Amripal",
        "Joginder Singh",
    ];

    const images = [user, user1, user2, user3, user4, user, user1, user2, user3, user, user1, user2];

    return (
        <WarpContent>
            <LeftContent isToolbarOpen={isToolbarOpen}>
                <Title>
                    <p>All Live Streams</p>
                </Title>
                <ListCard>
                    {names.map((name, index) => (
                        <CardComponent key={index} image={images[index % images.length]} name={name} customStyle={customStyle} courseCardWidth={courseCardWidth} courseSmallCardWidth={courseSmallCardWidth}/>
                    ))}
                </ListCard>
            </LeftContent>
            <RightContent isToolbarOpen={isToolbarOpen}>
                <LiveS />
            </RightContent>
        </WarpContent>
    )
}

export default AllLiveStreams;
