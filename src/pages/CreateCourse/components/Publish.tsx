import React from "react";
import { FiUpload } from "react-icons/fi";
import styled from "styled-components";
import Input from "@components/Input";
import {
  Tittle,
  ContentsContainer,
  ContainerTogether,
  ContentPage,
} from "./Styled/Custom";

const Publish = () => {
  return (
    <>
      <ContainerTogether>
        <Tittle>
          <FiUpload className="icon" />
          Submit
        </Tittle>
        <ContentPage>
          <ContentsContainer></ContentsContainer>
        </ContentPage>
      </ContainerTogether>
    </>
  );
};

export default Publish;
