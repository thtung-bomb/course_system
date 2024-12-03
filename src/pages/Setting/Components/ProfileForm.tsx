import React, { useState } from 'react';
import {
    ProfileFormContainer,
    Heading,
    SubHeading,
    FormGroup,
    Input,
    Textarea,
    CharacterCount,
    Hint,
    SmallText,
    Hr1
} from '../Style/StyledComponents';

const ProfileForm: React.FC = () => {
  const [firstName, setFirstName] = useState('Joginder');
  const [lastName, setLastName] = useState('Singh');
  const [headline, setHeadline] = useState('I am a Web Designer');
  const [description, setDescription] = useState('');

  return (
    <ProfileFormContainer>
      <Heading>Your Cursus Account</Heading>
      <p>This is your public presence on Cursus. You need an account to upload your paid courses, comment on courses, purchased by students, or earning.</p>
      <Heading>Basic Profile</Heading>
      <SubHeading><a>Add information about yourself</a></SubHeading>
      <FormGroup>
        <Input
          type="text"
          className='ip1'
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          className='ip2'
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          className='ip3'
          placeholder="Professional Headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
        <CharacterCount className='count'>{headline.length}</CharacterCount>
      </FormGroup>
      <Hint><a>Add a professional headline like, "Engineer at Cursus" or "Architect."</a>"</Hint>
      <FormGroup>
        <Textarea
          placeholder="Write a little description about you..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Textarea>
      </FormGroup>
      <SmallText><a>Links and coupon codes are not permitted in this section.</a></SmallText>
   
     <Hr1/>
    </ProfileFormContainer>
  );
};

export default ProfileForm;
