import React from 'react'
import styled from "styled-components";
import { BiArrowToBottom } from "react-icons/bi";
import { BiArrowFromBottom } from "react-icons/bi";
import { formatNumber } from "@utils/convertUnit.ts";

const WrapContent = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 100%;
    /* padding: 10px; */
`;

const Title = styled.div`
    width: 100%;
    margin-top: 10px;
    padding-top: 5px;
`;

const TitleH4 = styled.h4`
    font-size: 18px;
    font-weight: 500;
    color: #333;
    text-align: left;
    margin-bottom: 24px;
`;

const Body = styled.div`
    width: 100%;
`;

const BodyContent = styled.div`
    background: white;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #efefef;
    transition: all .2s ease-in-out;
`;

const Content = styled.div`
    padding: 10px 5px;
    width: 100%;
    position: relative;
`;

const ContentH6 = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #686f7a;
`;

const ContentH3 = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: #333;
    margin-top: 15px;
    padding-bottom: 20px;
    border-bottom: 1px solid #efefef;
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

const Enroll = styled.div`
    width: 100%;
    padding-top: 17px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 400;
    color: #686f7a;
    text-align: left;
`;

const PerHour = styled.div`
    margin-left: 5px;
    padding-top: 1px;
    font-size: 12px;
    color: #333;
    font-weight: 500;
`;

const Right = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #686f7a;
    text-align: left;
`;

const Percent = styled.span`
    color: #ed2a26;
    font-weight: 500;
`;

const IconArrowToBottom = styled(BiArrowToBottom)`
    width: 17px;
    height: 20px;
    margin: 0 2px;
`;

const IconArrowFromBottom = styled(BiArrowFromBottom)`
    width: 17px;
    height: 20px;
    margin: 0 2px;
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

const ProfileAnalytics: React.FC = () => {

    const value = [
        {
            subscribers: "856",
            view: "17000",
            perView: 75,
            purchased: "1",
            perPurchased: 100,
            enroll: "50",
            perEnroll: 70,
        },
    ];

    const data = value[0];

    return (
        <WrapContent>
            <Title>
                <TitleH4>
                    Profile Analytics
                </TitleH4>
            </Title>
            <Body>
                <BodyContent>
                    <Content>
                        <ContentH6>Current subscribers</ContentH6>
                        <ContentH3>{data.subscribers}</ContentH3>
                        <View>
                            <Left>View</Left>
                            <Right>
                                {formatNumber(data.view)}
                                <Percent>
                                    <IconArrowToBottom />
                                    {data.perView}%
                                </Percent>
                            </Right>
                        </View>
                        <Purchased>
                            <Left>
                                Purchased
                                <PerHour>
                                    (per hour)
                                </PerHour>
                            </Left>
                            <Right>
                                {formatNumber(data.purchased)}
                                <Percent>
                                    <IconArrowFromBottom />
                                    {data.perPurchased}%
                                </Percent>
                            </Right>
                        </Purchased>
                        <Enroll>
                            <Left>
                                Enroll
                                <PerHour>
                                    (per hour)
                                </PerHour>
                            </Left>
                            <Right>
                                {formatNumber(data.enroll)}
                                <Percent>
                                    <IconArrowFromBottom />
                                    {data.perEnroll}%
                                </Percent>
                            </Right>
                        </Enroll>
                        <AllLink>
                            <Link>go to course analytics</Link>
                        </AllLink>
                    </Content>
                </BodyContent>
            </Body>
        </WrapContent>
    )
}

export default ProfileAnalytics;
