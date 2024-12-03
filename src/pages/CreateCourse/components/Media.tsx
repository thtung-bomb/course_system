import React from "react";
import { FaRegImage } from "react-icons/fa";
import styled from "styled-components";
import Input from "@components/Input";
import {
  Tittle,
  ContentsContainer,
  ContainerTogether,
  ContentPage,
} from "./Styled/Custom";

const Media = () => {
  return (
    <div>
      <ContainerTogether>
        <Tittle>
          <FaRegImage className="icon"/>
          Media
        </Tittle>
        <ContentPage>
          <ContentsContainer></ContentsContainer>
        </ContentPage>
      </ContainerTogether>
    </div>
  );
};

export default Media;
