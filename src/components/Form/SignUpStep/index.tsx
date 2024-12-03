import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import background from "@assets/images/sign.svg"
import InstructorSU from './component/InstructorSU';
const index = () => {

  const SUShome = styled.div`
  background: #f7f7f7 !important;
  position: relative;
  width: 100%;
  display: flex !important;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    background: url(${background}) no-repeat center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;
    background-size: cover;
    opacity: 0.04;
  }
`;


  return (
    <SUShome>
    
        <InstructorSU />
    
    </SUShome>
  )
}

export default index
