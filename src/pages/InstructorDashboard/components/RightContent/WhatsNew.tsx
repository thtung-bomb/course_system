import React from 'react';
import styled from "styled-components";

const WrapContent = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 100%;
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

const Link = styled.a`
    display: block;
    padding: 15px 10px;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    text-align: left;
    border-bottom: 1px dashed #efefef;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    &:first-child {
        padding-top: 0px;
    }
    &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
    }
`;

const WhatsNew: React.FC = () => {

    const links = [
        {
            content: "Improved performance oh Studio Dashboard"
        },
        {
            content: "See more Dashboard updates"
        },
        {
            content: "See issues-at-glance for Live"
        },
    ];

    return (
        <WrapContent>
            <Title>
                <TitleH4>
                    What's new in Cursus
                </TitleH4>
            </Title>
            <Body>
                <BodyContent>
                    <Content >
                        {links.map((value, index) => (
                            <Link key={index}>{value.content}</Link>
                        ))}
                    </Content>
                </BodyContent>
            </Body>
        </WrapContent>
    )
}

export default WhatsNew;
