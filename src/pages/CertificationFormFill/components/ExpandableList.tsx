import React, { useState } from "react";
import styled from "styled-components";

interface DataItem {
  id: number;
  title: string;
}

interface ExpandableListProps {
  title: string;
  dataList: DataItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const ToggleButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  padding: 15px 0px;
  border: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  border-bottom: 1px solid #efefef;
`;

const CheckboxList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const CheckboxItem = styled.li``;

const CheckboxInput = styled.input`
  display: none;
  padding-right: 28px;

  &:checked + label::before {
    background-color: red;
    border-color: red;
  }

  &:checked + label::after {
    opacity: 1;
  }
`;

const CustomLabel = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 14px;
  color: #000;
  opacity: 0.87;
  user-select: none;
  &::before {
    content: "";
    position: absolute;
    left: 1px;
    top: 50%;
    transform: translateY(-50%);
    width: 19px;
    height: 19px;
    border: 1px solid #ccc;
    border-radius: 50%; /* Use border-radius: 50% for radio buttons */
    background-color: #fff;
    transition: all 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-color: red;
    border: 3px solid white;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

const ExpandableList: React.FC<ExpandableListProps> = ({
  title,
  dataList,
  isOpen,
  onToggle,
}) => {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.id);
  };
  return (
    <div>
      <ToggleButton onClick={onToggle}>
        <p>{title} </p>
        {isOpen ? "-" : "+"}
      </ToggleButton>
      {isOpen && (
        <CheckboxList>
          {dataList.map((dataItem) => (
            <CheckboxItem key={dataItem.id}>
              <CheckboxInput
                type="radio"
                id={dataItem.title}
                name="radioGroup"
                checked={selectedRadio === dataItem.title}
                onChange={handleChange}
              />
              <CustomLabel htmlFor={dataItem.title}>
                {dataItem.title}
              </CustomLabel>
            </CheckboxItem>
          ))}
        </CheckboxList>
      )}
    </div>
  );
};

export default ExpandableList;
