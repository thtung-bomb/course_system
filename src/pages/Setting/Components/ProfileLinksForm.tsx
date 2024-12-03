import React from 'react';
import {
    ProfileLinksFormContainer,
    Heading,
    FormGroup,
    InputGroup,
    InputPrefix,
    Input,
    InputHint,
    SaveButton
} from '../Style/StyledComponents';

const ProfileLinksForm: React.FC = () => {
  return (
    <ProfileLinksFormContainer>
      <Heading>Profile Links</Heading>
      <FormGroup>
        <InputGroup>
          <InputPrefix>https://</InputPrefix>
          <Input type="text" placeholder="Website URL" value="gambolthemes.net" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputPrefix>http://facebook.com/</InputPrefix>
          <Input type="text" placeholder="Facebook Profile" />
        </InputGroup>
        <InputHint>Add your Facebook username (e.g. johndoe).</InputHint>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputPrefix>http://twitter.com/</InputPrefix>
          <Input type="text" placeholder="Twitter Profile" />
        </InputGroup>
        <InputHint >Add your Twitter username (e.g. johndoe).</InputHint>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputPrefix>http://www.linkedin.com/</InputPrefix>
          <Input type="text" placeholder="Linkedin Profile" />
        </InputGroup>
        <InputHint>Input your LinkedIn resource id (e.g. in/johndoe).</InputHint>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputPrefix>http://www.youtube.com/</InputPrefix>
          <Input type="text" placeholder="Youtube Profile" />
        </InputGroup>
        <InputHint>Input your Youtube username (e.g. johndoe).</InputHint>
      </FormGroup>
      <SaveButton>Save Changes</SaveButton>
    </ProfileLinksFormContainer>
  );
};

export default ProfileLinksForm;
