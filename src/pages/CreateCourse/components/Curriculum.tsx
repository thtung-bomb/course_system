import React from "react";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import styled from "styled-components";
import Input from "@components/Input";
import {
  Tittle,
  ContentsContainer,
  ContainerTogether,
  ContentPage,
} from "./Styled/Custom";

const Curriculum = () => {
  return (
    <ContainerTogether>
      <Tittle>
        <MdOutlineCollectionsBookmark className="icon"/>
        Curriculum
      </Tittle>
      <ContentPage>
        <ContentsContainer></ContentsContainer>
      </ContentPage>
    </ContainerTogether>
  );
};

export default Curriculum;
