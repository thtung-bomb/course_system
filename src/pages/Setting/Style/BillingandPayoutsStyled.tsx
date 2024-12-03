import styled from "styled-components";

export const BiliingAddressContainer = styled.div`
  color: #333;
  font-size: 16px;
  margin: 0 auto 40px auto;
  width: 100%;
  padding-left: 30px;

  .text {
    font-size: 15px;
  }

  .text1 {
    font-size: 14px;
    padding-left: 50px;
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #1d1d1d;
  position: relative;
  right: 50px;
  padding-top: 20px;
`;

export const SubHeading = styled.p`
  position: relative;
  right: 50px;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 20px;
  line-height: 26px;
`;

export const FormGroup = styled.div`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
  margin-right: 200px;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  display: flex !important;
  width: 21%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;

  &.ip1 {
    width: 28%;
    margin-left: o;
    margin-right: 10px;
    float: inline-start;
  }
  &.ip2 {
    width: 27.5%;
  }
  &.ip3 {
    width: 56.1%;
    position: relative;
    padding-right: 40px;
  }
  &.ip4 {
    width: 56.1%;
    position: relative;
    padding-right: 40px;
  }
  &.ip5 {
    width: 56.1%;
    position: relative;
    padding-right: 40px;
  }
  &.ip6 {
    width: 56.1%;
    position: relative;
    padding-right: 40px;
  }
  &.ip7 {
    width: 56.1%;
    position: relative;
    padding-right: 40px;
  }
  &.ip8 {
    width: 56.1%;
    position: relative;
    padding-right: 40px;
  }
  &.ip9 {
    width: 56.1%;
    position: relative;
    padding-right: 40px;
  }
`;

export const Textarea = styled.textarea`
  width: 97%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  resize: none;
  height: 80px;
`;

export const CharacterCount = styled.span`
  font-size: 14px;
  color: #686f7a;
  background-color: #dedfe0;
  position: absolute;

  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 5px 0px 10px;
  height: 25px;
  width: 20px;
  border-radius: 5%;
`;

export const Hint = styled.p`
  font-size: 12px;
  color: #999;
  margin-top: -10px;
  margin-bottom: 20px;
  position: relative;
  right: 50px;
`;

export const SmallText = styled.p`
  font-size: 10px;
  color: #999;
  margin-top: 10px;
  margin-bottom: 20px;
  position: relative;
  padding-right: 100px;
  bottom: 15px;
  color: #e5e5e5;
  height: 30px;
  right: 50px;
`;

export const Hr1 = styled.hr`
  border: 1px solid #f7ecec !important;
  width: 90%;
  position: relative;
  right: 100px;
  margin-top: 50px;
`;
export const Select = styled.select<{ isSelected: boolean }>`
  display: flex;
  width: 56.1%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
  color: ${(props) => (props.isSelected ? "rgb(0, 178, 169)" : "#000")};
  position: relative;
  overflow: hidden;

  &:after {
    content: "▼";
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    background-color: ${(props) =>
      props.isSelected ? "rgb(0, 178, 169)" : "transparent"};
    color: ${(props) => (props.isSelected ? "rgb(0, 178, 169)" : "#000")};
    pointer-events: none;
  }

  option {
    color: #333;
  }

  option:checked {
    color: red;
  }

  option:hover {
    background-color: rgb(0, 178, 169);
  }
`;

export const ExclusiveSalesContainer = styled.div`
  color: #333;
  font-size: 16px;
  margin: 0 auto 40px auto;
  width: 100%;

  padding-left: 30px;

  .text {
    font-size: 15px;
  }

  .text3 {
    font-size: 14px;
  }
`;

export const BillingPercentages = styled.div`
  margin-top: 20px;
`;

export const BillingPercentagesProgressBar = styled.div`
  width: 60%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const ProgressBarLabels = styled.ul`
  list-style: none;
  padding: 0;
  margin: -15px;
  display: flex;

  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

export const ProgressBarLabelItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  left: 10px;
`;

export const ProgressBarLabel = styled.div`
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  margin: 5px 0;
  position: relative;
  z-index: 1;
  color: ${(props) => (props.className === "zero-level" ? "#20c997" : "#333")};
`;

export const Profit = styled.span`
  font-size: 14px;
  margin-bottom: 0px;
  display: flex;

  &:not(:last-child)::after {
    content: "|";
    color: #e9ecef;
    position: absolute;
    bottom: 20%;
    transform: translateX(50%);
    top: 30px;
    left: 15px;
    right: 100px;
  }
`;

export const Percent = styled.span`
  font-size: 14px;
  color: ${(props) => (props.className === "zero-level" ? "#20c997" : "#666")};
  margin-top: 18px;
  display: flex;
  float: left;
  font-weight: 550;
`;

export const FormatCurrency = styled.strong`
  font-size: 14px;
  color: inherit;
  margin-bottom: 15px;
  font-weight: 550;
  margin-right: 50px;
`;

export const NonExclusiveSalesContainer = styled.div`
  color: #333;
  font-size: 16px;
  margin: 0 auto 40px auto;
  width: 100%;
  padding-left: 30px;

  .text {
    font-size: 15px;
  }

  .text4 {
    font-size: 13.6px;
    text-align: left;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const Option = styled.label`
  background-color: #fff;
  padding: 15px 20px;
  margin-bottom: 30px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  width: 20%;
  border-radius: 3px;
  display: inline-block;
  border: 1px solid #ddd;

  input {
    margin-right: 10px;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    box-shadow: -0.083333333in 0.5pc 1.125pc 1px rgba(25, 42, 70, 0.13);
    transition: all 0.4s ease-in-out;
  }

  &.selected {
    input:checked {
      accent-color: #ff0000;
    }
  }
`;

export const WithdrawalMethodContainer = styled.div`
  padding: 0px;
  margin-top: 10px;
  border-radius: 3px;
  overflow: hidden;
`;

export const Form = styled.div`
  max-height: 0;
  opacity: 0;
  transition:
    max-height 0.8s ease-in-out,
    opacity 0.5s ease-in-out;
  overflow: hidden;

  &.expanded {
    max-height: 1000px;
    opacity: 1;
  }

  padding-left: 15px;
  padding-right: 15px;
  margin-left: -15px;

  h3 {
    font-size: 16px;
    font-weight: 550;
  }

  p {
    font-size: 14px;
    font-weight: 550;
    color: #333;
    margin-top: 20px;
  }

  b {
    font-size: 14px;
    color: #686f7a;
    margin-top: 20px;
    font-weight: 400;
  }

  b a {
    color: #4183c4;
    text-decoration: none;
    padding-left: 0px;
  }
`;

export const StyledInput = styled.input`
  display: flex !important;
  width: 21%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
  margin-top: 20px;

  &.address {
    margin-bottom: 20px;
  }
`;

export const StyledSelect = styled.select`
  width: 22.1%;
  padding: 8px;
  box-sizing: border-box;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FromOption = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const SaveButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin: 20px auto 0;

  &:hover {
    background-color: #333;
  }
`;
