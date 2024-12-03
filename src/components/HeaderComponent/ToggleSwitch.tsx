import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SwitchProps {
  isActive: boolean;
}

const Switch = styled.div<SwitchProps>`
  position: relative;
  width: 40px; 
  height: 20px; 
  background-color:#e8e8e8;
  border-radius: 20px; 
  cursor: pointer;
  transition: background-color 0.4s;
`;

const Slider = styled.div<SwitchProps>`
  position: absolute;
  height: 22px;  
  width: 22px;   
  background-color:#a9a9a9;
  border-radius: 50%;
  top: -1px; 
  left: ${props => (props.isActive ? '22px' : '2px')};
  transition: left 0.4s;
`;

const ToggleSwitch: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <SwitchContainer>
      <Switch isActive={isActive} onClick={toggleSwitch}>
        <Slider isActive={isActive} />
      </Switch>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
