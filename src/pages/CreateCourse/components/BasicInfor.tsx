import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import styled from "styled-components";
import Input from "@components/Input";
import {
  Tittle,
  ContentsContainer,
  ContainerTogether,
  ContentPage,
} from "./Styled/Custom";

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 14px;

  input {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
    height: 38px;
    font-size: 14px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    border-radius: 1px;
    background: rgb(250, 249, 249) !important;
    color: #333;
    border: 1px solid rgb(241, 238, 238);

    &:focus {
      border-color: #333;
      outline: none !important;
    }
    &:focus::placeholder {
      font-weight: 500;
      color: #333;
    }
  }
`;
const BasicInfor = () => {
  return (
    <ContainerTogether>
      <Tittle>
        <IoIosInformationCircleOutline className="icon"/>
        Basic Information
      </Tittle>

      <ContentPage>
        <ContentsContainer>
          <InputWrapper>
            <Input></Input>
          </InputWrapper>
        </ContentsContainer>
      </ContentPage>
    </ContainerTogether>
  );
};

export default BasicInfor;
