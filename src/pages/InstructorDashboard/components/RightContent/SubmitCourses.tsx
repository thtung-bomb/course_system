import React from 'react'
import styled from "styled-components";
import { timeAgo } from "@utils/convertUnit.ts";

const WrapContent = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 100%;
`;

const Title = styled.div`
    width: 100%;
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
    &:first-child {
        border-bottom: 1px dashed #efefef;
    }
`;

const ContentA = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #333;
    line-height: 26px;
    text-decoration: none;
`;

const Status = styled.span<{ status: string }>`
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
    background: ${({ status }) => (status === "Pending" ? "#ed2a26" : status === "Completed" ? "#04AA6D" : "#ccc")};
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
`;

const SubmitC = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-top: 14px;
    margin-bottom: 20px;
    color: #686f7a;
    font-style: italic;
`;

const TimeAgo = styled.span`
    margin-left: 10px;
`;

const Delete = styled.a`
    font-size: 14px;
    font-weight: 400;
    color: #333;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const SubmitCourses: React.FC = () => {

    const values = [
        {
            title: "The Complete JavaScript Course 2020: Build Real Projects!",
            status: "Pending",
            time: "2024-07-03",
        },
        {
            title: "The Complete JavaScript Course 2020: Build Real Projects!",
            status: "Completed",
            time: "2024-07-03",
        },
    ];

    return (
        <WrapContent>
            <Title>
                <TitleH4>
                    Submit Courses
                </TitleH4>
            </Title>
            <Body>
                <BodyContent>
                    {values.map((value, index) => (
                        <Content key={index}>
                            <ContentA>
                                {value.title}
                                <Status status={value.status}>{value.status}</Status>
                            </ContentA>
                            <SubmitC>
                                Submitted
                                <TimeAgo>{timeAgo(value.time)}</TimeAgo>
                            </SubmitC>
                            <Delete>
                                Delete
                            </Delete>
                        </Content>
                    ))}
                </BodyContent>
            </Body>
        </WrapContent>
    )
}

export default SubmitCourses;
