import React from "react";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import styled from "styled-components";
import Input from "@components/Input";
import {
  Tittle,
  ContentsContainer,
  ContainerTogether,
  ContentPage,
} from "./Styled/Custom";

const Price = () => {
  return (
    <div>
      <ContainerTogether>
        <Tittle>
          <RiMoneyDollarBoxLine className="icon"/>
          Price
        </Tittle>
        <ContentPage>
          <ContentsContainer></ContentsContainer>
        </ContentPage>
      </ContainerTogether>
    </div>
  );
};

export default Price;
