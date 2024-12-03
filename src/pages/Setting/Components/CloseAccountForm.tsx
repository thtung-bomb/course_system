import React, { useState } from 'react';
import {
    CloseAccountFormContainer,
    Heading,
    SubHeading,
    FormGroup,
    Input,
    SaveButton,
    StyledWarning,
    StyledContext,
    InputHint,
} from '../Style/CloseAccountStyledComponents'; 

const CloseAccountForm: React.FC = () => {
  const [password, setPassword] = useState('');

  return (
    <CloseAccountFormContainer>
      <Heading>Close account</Heading>
      <SubHeading>
        <StyledWarning>Warning:</StyledWarning>
        <StyledContext>If you close your account, you will be unsubscribed from all your 5 courses, and will lose access forever.</StyledContext>
      </SubHeading>
      <FormGroup>
        <Input
          type="password"
          className='ip1'
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <InputHint>Are you sure you want to close your account?</InputHint>
        <SaveButton>Close Account</SaveButton>
      </FormGroup>
    </CloseAccountFormContainer>
  );
};

export default CloseAccountForm;
