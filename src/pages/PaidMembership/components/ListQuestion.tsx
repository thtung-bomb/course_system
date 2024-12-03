import React, { useState } from 'react';
import { GoCheck } from 'react-icons/go';
import styled from 'styled-components';

interface ExpandableListProps {
    title: string;
    dataList: { id: number; title: string }[];
    isOpen: boolean;
    onToggle: () => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
            border-bottom: 1px solid #efefef;
padding-bottom: 14px;
    margin-top: 18px;
`;

const Icon = styled.div`
    margin-right: 14px;
    margin-left: 8px;
    color: red;
`;

const ToggleButton = styled.div`
       display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  max-height: 200px;
  font-size: 14px;
  color: #686f7a;
  padding-bottom: 20px;
  padding-top: 18px;
`;

const CheckboxItem = styled.div`
    display: flex;
    align-items: center;
`;

const CheckboxInput = styled.input`
    display: none;
`;

const DataItem = styled.div`
    // flex-grow: 1;
`;
const ContentFirst = styled.div`
display: flex;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    align-items: center;
    height: 34px;
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
        <Container>
            <ContentFirst>
                <ToggleButton onClick={onToggle}>
                    <p>{title} </p>
                    {isOpen ? "-" : "+"}
                </ToggleButton>
            </ContentFirst>
            <Content>
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
                                <DataItem>{dataItem.title}</DataItem>
                            </CheckboxItem>
                        ))}
                    </CheckboxList>
                )}
            </Content>
        </Container>
    );
};

export default ExpandableList;