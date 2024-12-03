import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  width: 100%;
`;

const SubHeader = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
  padding-left: 170px;
  margin-top: 59px;
`;

const BreadcrumbsContainer = styled.div`
  display: flex;
  font-size: 16px;
`;

const ShoppingCartText = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 30px;
  padding-bottom: 20px;
  width: 100%;
`;

const Breadcrumb = styled.div`
  display: inline-block;
  padding-top: 10px;
  font-size: 14px;
  margin-right: 4px;
  color: #666;

  &:not(:last-child):after {
    content: "/" !important;
    margin-left: 4px;
    color: #666;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    color: #333;
  }
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 60px 20px 120px;
  box-sizing: border-box;
  margin: 40px 0px;
`;

const CartItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #efefef;
  box-sizing: border-box;
  background-color: #fff;
  padding: 10px;
`;

const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
  color: #999;
  font-size: 20px;

  &:hover {
    color: #333;
  }
`;

const ItemImage = styled.img`
  width: 38%;
  height: auto;
  margin-right: 20px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  gap: 24px;
  margin-bottom: 80px;
`;

const ItemTitle = styled.h2`
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: -10px;
`;

const RedHr = styled.hr`
  border: 0;
  height: 2px;
  background-color: #ed2a26;
  margin: 10px 0;
  width: 16%;
  align-self: flex-start;
`;

const ItemSubtitle = styled.p`
  font-size: 14px;
  color: #666;

  .text:hover {
    color: #333;
  }

  b {
    margin-top: 13px;
    font-weight: 600;
    color: #333;
  }

  b:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ItemPrice = styled.b`
  font-size: 20px;
  color: #333;
  margin-left: auto;
  font-weight: 600;
`;

const PriceDetails = styled.div`
  width: 90%;
  border: 1px solid #efefef;
  box-sizing: border-box;
  background-color: #fff;
  padding: 30px;

  span {
    color: #666;
  }
`;

const Total = styled.div`
  margin-bottom: 20px;

  h1 {
    font-weight: 600;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: #333;
    line-height: 26px;
  }
`;

const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px 0px;

  b {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }
`;

const ItemHr = styled.hr`
  border: 0;
  height: 1px;
  margin: 0px;
  background-color: #e6e9eb;
`;

const Coupon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CouponInput = styled.input`
  flex: 1;
  padding: 10px;
  width: 80%;
  outline: none;
  border-radius: 4px;
  border: 1px solid #ddd;
  &::placeholder {
    color: #ced4da;
    font-weight: 400;
  }

  &:focus-visible::placeholder {
    color: #adb5bd;
  }
  &:focus-visible {
    border: 1px solid #333;
  }
`;

const ApplyButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border-radius: 1px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: #333;
  }
`;

const Text = styled.div`
  font-size: 14px;
  line-height: 26px;
  color: #686f7a;
  margin-top: 12px;
`;

const ColLeft = styled.div`
  flex: 0 0 auto;
  width: 66%;
  margin-left: 40px;
  padding-right: 20px;
`;

const ColRight = styled.div`
  flex: 0 0 auto;
  width: 33%;
`;

const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";

  const capitalizeWords = (str: string): string => {
    return str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char: string) => char.toUpperCase());
  };

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      const crumbText = capitalizeWords(crumb);

      return (
        <Breadcrumb key={index}>
          <BreadcrumbLink to={currentLink} style={{ color: "#666" }}>
            {crumbText}
          </BreadcrumbLink>
        </Breadcrumb>
      );
    });

  return (
    <BreadcrumbsContainer>
      <Breadcrumb>
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
      </Breadcrumb>
      {crumbs}
    </BreadcrumbsContainer>
  );
};

const ShoppingCart = () => {
  return (
    <ShoppingCartContainer>
      <SubHeader>
        <BreadCrumbs />
        <ShoppingCartText>Shopping Cart</ShoppingCartText>
      </SubHeader>
      <CartContainer>
        <ColLeft>
          <CartItem>
            <CloseIcon />
            <ItemImage
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg"
              alt="Course"
            />
            <ItemDetails>
              <ItemTitle>The Web Developer Bootcamp</ItemTitle>
              <ItemSubtitle>
                <p className="text">Web Development | Python</p>
              </ItemSubtitle>
              <ItemSubtitle>
                By <b>John Doe</b>
              </ItemSubtitle>
            </ItemDetails>
            <ItemPrice>$10</ItemPrice>
          </CartItem>
        </ColLeft>
        <ColRight>
          <PriceDetails>
            <Total>
              <h1>Total</h1>
            </Total>
            <RedHr />
            <TotalItem>
              <b>Original Price</b>
              <span>$15</span>
            </TotalItem>
            <ItemHr />
            <TotalItem>
              <span>Discount Price</span>
              <span>$5</span>
            </TotalItem>
            <ItemHr />
            <TotalItem>
              <b>Total</b>
              <b>$10</b>
            </TotalItem>
            <ItemHr />
            <Text>Learn now is applied.</Text>
            <Coupon>
              <CouponInput placeholder="Enter Coupon Code" />
              <ApplyButton>Apply</ApplyButton>
            </Coupon>
            <CheckoutButton>Checkout Now</CheckoutButton>
          </PriceDetails>
        </ColRight>
      </CartContainer>
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
