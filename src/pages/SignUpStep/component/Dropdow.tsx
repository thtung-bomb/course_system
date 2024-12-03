import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';

interface DropdownContentProps {
    isOpen: boolean;
  }

  interface DropdownItemProps {
    isSelected: boolean;
  }

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  outline: none;
  width: 100%;
  transition: 0.3s;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  color: #08d1d1;
  padding: 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  width: 100%;
  height: 40px;
  display: flex;

  &:hover {
    background-color: #fff;
    
  }
`;

const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width: 100%;
  max-height: 260px;
  overflow: auto;
  a {
    
    padding: 12px 16px;
    text-decoration: none;
    display: flex;

    &:hover {
      background-color: rgba(0, 0, 0, 0.125);
    }
  }
`;

const DropdownItem = styled.a<DropdownItemProps>`
  color: ${(props) => (props.isSelected ? 'red' : 'black')};
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Select Category');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
const handleSelect = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();    
    setSelected(event.currentTarget.textContent || 'select category');
        setIsOpen(false);
  };

  const items = [
    'Select Category',
    'Development',
    'Business',
    'Finance & Accounting',
    'IT & Software',
    'Office Productivity',
    'Personal Development',
    'Design',
    'Marketing',
    'Lifestyle',
    'Photography',
    'Health & Fitness',
    'Music',
    'Teaching & Academics',
  ];

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>{selected}</DropdownButton>
      <DropdownContent isOpen={isOpen}>
      {items.map((item, index) => (
          <DropdownItem
            key={index}
            href={`#action${index}`}
            onClick={handleSelect}
            isSelected={item === selected}
          >
            {item}
          </DropdownItem>
        ))}</DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
