import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
import { FaDollarSign } from "react-icons/fa6";

const FeatureData = [
  {
    title:
      "Sales earnings this month (April), after edututs+ fees, & before taxes:",
    price: 1146.78,
  },
  {
    title: "Your balance:",
    price: 1146.78,
  },
  {
    title: "Total value of your sales, before taxes:",
    price: 95895.54,
  },
];
const TableLeftData = [
  {
    country: "United States",
    price: 48,
  },
  {
    country: "Bulgaria",
    price: 35,
  },
  {
    country: "Dominica",
    price: 25,
  },
  {
    country: "Italy",
    price: 18,
  },
  {
    country: "Korea, Republic of",
    price: 18,
  },
  {
    country: "Malaysia",
    price: 10,
  },
  {
    country: "Netherlands",
    price: 8,
  },
  {
    country: "Thailand",
    price: 5,
  },
];

const TableRightData = [
  {
    date: "1, Wednesday",
    count: 3,
    price: 120.5,
  },
  {
    date: "2, Thursday",
    count: 2,
    price: 84.0,
  },
  {
    date: "4, Saturday",
    count: 4,
    price: 150.5,
  },
  {
    date: "5, Sunday",
    count: 3,
    price: 102.24,
  },
  {
    date: "6, Monday",
    count: 2,
    price: 80.5,
  },
  {
    date: "7, Tuesday",
    count: 3,
    price: 70.5,
  },
  {
    date: "8, Wednesday",
    count: 3,
    price: 130.00123,
  },
  {
    date: "9, Thursday",
    count: 3,
    price: 95.5023,
  },
  {
    date: "10, Friday",
    count: 4,
    price: 152.5011,
  },
  {
    date: "11, Saturday",
    count: 3,
    price: 100.4,
  },
  {
    date: "12, Sunday",
    count: 2,
    price: 60.14,
  },
  {
    date: "1, Wednesday",
    count: 3,
    price: 120.5,
  },
];
const Container = styled.div`
  padding: 100px 30px 40px 30px;
`;
const Title = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 5px;
`;
const FeatureContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 21px;
`;
const Feature = styled.div`
  display: block;
  text-align: center;
  width: 100%;
  background-color: #333;
  padding: 30px;
  color: #ffffff;
  height: 160px;
  border-radius: 3px;
`;
const FeatureText = styled.p`
  font-size: 14px;
  line-height: 26px;
`;
const FeatureNumber = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`;
const TableContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 13px;
  display: flex;
  justify-content: flex-end;
  gap: 21px;
`;
const TableRight = styled.div`
  display: block;
  width: 68.5%;
`;
const TableLeft = styled.div`
  display: block;
  width: 33.33%;
  h2 {
    background-color: #ffffff;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    padding: 16.8px 28px;
    border: 0.666667px solid #efefef;
    color: #333;
  }
`;
const HeadRight = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 30px;
  width: 100%;
`;
const Content = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border: 0.666667px solid #efefef;
`;
const TableLeftItem = styled.div`
  float: left;
  background-color: #ffffff;
  width: 100%;
  border: 0.666667px solid #efefef;
  border-radius: 3px;
  padding: 10px 20px;
`;
const Left = styled.div`
  float: left;
  font-size: 14px;
  font-weight: 500;
  color: #686f7a;
  font-family: "Roboto", sans-serif;
`;
const Right = styled.div`
  float: right;
  font-size: 14px;
  font-weight: 500;
  color: #686f7a;
  font-family: "Roboto", sans-serif;
`;
const HeadRightDropdown = styled(DropdownButton)`
  #headrightdropdown {
    width: 168px;
    text-align: left;
    height: 35px;
    background-color: #ffffff;
    padding: 10px 20px;
    color: #333;
    border: 0.666667px solid #efefef;
    border-radius: 3px;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    line-height: 14px;
  }
  #headrightdropdown:focus {
    border-top: 0.666667px solid red;
    border-left: 0.666667px solid red;
    border-right: 0.666667px solid red;
  }
  .dropdown-toggle::after {
    float: right;
    margin-top: 5px;
  }
  .dropdown-item {
    background-color: #ffffff;
    padding: 10px 20px;
    color: #333;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    text-align: left;
    line-height: 14px;
  }
  .dropdown-item:hover {
    background-color: #f7f7f7;
  }
  .dropdown-menu {
    border-bottom: 1px solid rgb(150 200 218);
    border-right: 1px solid rgb(150 200 218);
    border-left: 1px solid rgb(150 200 218);
    border-top: none;
    border-radius: 2px;
    padding: 0;
    width: 100%;
    margin-top: -4px;
  }
`;
const DateList = styled.div`
  display: flex;
  padding: 9px 15px;
  justify-content: center;
  gap: 10px;
  a {
    color: #4183c4;
    text-decoration: none;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
  a:hover {
    color: gray;
  }
  p {
    color: #333;
    cursor: default;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
  }
`;
const ContentHead = styled.div`
  border: 0.666667px solid #efefef;
  display: table-row;

  span {
    display: table-cell;
    padding: 7px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-align: left;
    line-height: 20px;
    background-color: #ffecec;
    color: #333333;
  }
`;
const ContentBody = styled.div`
  display: table-row;
  border: 0.666667px solid #efefef;
`;

const ContentDate = styled.div`
  display: table-cell;
  padding: 14px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 20px;
  background: #ffffff;
  color: #000000;
`;
const ContentCount = styled.div`
  display: table-cell;
  padding: 14px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 20px;
  background: #ffffff;
  color: #000000;
`;
const ContentPrice = styled.div`
  display: table-cell;
  padding: 14px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 20px;
  background: #ffffff;
  color: #000000;
`;
const Total = styled.div`
  border: 0.666667px solid #efefef;
  display: table-row;
  span {
    display: table-cell;
    padding: 14px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    line-height: 20px;
    color: #ffffff;
    background-color: #333333;
  }
`;
const FaDollarSignStyle = styled(FaDollarSign)`
  font-size: 16px;
  margin-right: 10px;
`;
////////////////////////////////////////////////////////////////////////////////////////////////////////
const Earning = () => {
  const [selectedItem, setSelectedItem] = useState("Items Sales");

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };
  const totalCount = TableRightData.reduce(
    (sum, tbrdata) => sum + tbrdata.count,
    0,
  );
  const totalPrice = TableRightData.reduce(
    (sum, tbrdata) => sum + tbrdata.price,
    0,
  ).toFixed(2);
  return (
    <div>
      <Container>
        <Title>
          <FaDollarSignStyle />
          Earning
        </Title>

        <FeatureContainer>
          {FeatureData.map((item) => {
            const priceCustomize = item.price.toFixed(2);
            return (
              <Feature>
                <FeatureText>{item.title}</FeatureText>
                <FeatureNumber>${priceCustomize}</FeatureNumber>
              </Feature>
            );
          })}
        </FeatureContainer>

        <TableContainer>
          <TableLeft>
            <h2>Your Top Countries</h2>
            {TableLeftData.map((tbldata) => {
              return (
                <TableLeftItem>
                  <Left>{tbldata.country}</Left>
                  <Right>${tbldata.price}</Right>
                </TableLeftItem>
              );
            })}
          </TableLeft>

          <TableRight>
            <HeadRight>
              <HeadRightDropdown
                id="headrightdropdown"
                title={selectedItem}
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="Total Sales">
                  Total Sales
                </Dropdown.Item>
                <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
              </HeadRightDropdown>
              <DateList>
                <a href="#">AllTime</a>/<a href="#">2020</a>/<p>April</p>
              </DateList>
            </HeadRight>
            <Content>
              <ContentHead>
                <span>Date</span>
                <span>Item Sales Count</span>
                <span>Earning</span>
              </ContentHead>
              {TableRightData.map((tbrdata) => {
                const priceCustomize2 = tbrdata.price.toFixed(2);
                return (
                  <ContentBody>
                    <ContentDate>{tbrdata.date}</ContentDate>
                    <ContentCount>{tbrdata.count}</ContentCount>
                    <ContentPrice>${priceCustomize2}</ContentPrice>
                  </ContentBody>
                );
              })}
              <Total>
                <span>Total</span>
                <span>{totalCount}</span>
                <span>${totalPrice}</span>
              </Total>
            </Content>
          </TableRight>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Earning;
