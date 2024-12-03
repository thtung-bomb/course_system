import React from "react";

import styled from "styled-components";
const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputSpace = styled.input`
  outline: none;
`;

const InputSpaceError = styled.input`
  outline: 2px solid red;
  border: none;
`;

const ErrorContentInput = styled.span`
  font-size: 12px;
  color: red;
`;
interface InputProps {
  placeholder: string;
  type: string;
  messageError: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  [key: string]: any; // Allow for any additional props
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  messageError,
  ...rest
}) => {
  return (
    <WrapInput>
      {messageError ? (
        <InputSpaceError type={type} placeholder={placeholder} {...rest} />
      ) : (
        <InputSpace type={type} placeholder={placeholder} {...rest} />
      )}
      {messageError && <ErrorContentInput>{messageError}</ErrorContentInput>}
    </WrapInput>
  );
};

export default Input;
