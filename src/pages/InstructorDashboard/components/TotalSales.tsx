import React from 'react';
import styled from "styled-components";
import ach from '@assets/images/imgInstructorDashboard/achievement.svg';

const Card = styled.div`
    background: #fff;
    margin-top: 30px;
    float: left;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #efefef;
    padding: 20px;
`;

const CardDash = styled.div`
    display: block;
`;

const CardDashLeft = styled.div`
    float: left;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-align: left;
    gap: 15px;
`;

const CardDashLeftH5 = styled.h5`
    font-size: 16px;
`;

const CardDashLeftH2 = styled.h2`
    font-size: 24px;
`;

const CardDashLeftSpan = styled.span<{ hidden: boolean }>`
    width: max-content;
    font-size: 12px;
    padding: 6px 10px;
    text-align: center;
    border-radius: 3px;
    background: #ffc136;
    color: white;
    display: ${props => (props.hidden ? 'none' : 'block')};
`;

const CardDashRight = styled.div`
    float: right;
    padding: 15px 0;
`;

const Img = styled.img`
    width: 70px;
`;

interface DashboardCardProps {
    title: string;
    price: number;
    new?: number;
}

const DashboardCardTotalSales: React.FC<DashboardCardProps> = ({ title, price, new: newCount }) => {
    return (
        <Card>
            <CardDash>
                <CardDashLeft>
                    <CardDashLeftH5>
                        {title}
                    </CardDashLeftH5>
                    <CardDashLeftH2>
                        ${price}
                    </CardDashLeftH2>
                    <CardDashLeftSpan hidden={!newCount}>
                        New ${newCount}
                    </CardDashLeftSpan>
                </CardDashLeft>
                <CardDashRight>
                    <Img src={ach} />
                </CardDashRight>
            </CardDash>
        </Card>
    );
};

export default DashboardCardTotalSales;
