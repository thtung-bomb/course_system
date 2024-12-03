import styled from 'styled-components';

export const CloseAccountFormContainer = styled.div`
    color: #333;
    font-size: 16px;
    margin: 0 auto 40px auto;
    padding: 0;
    width: 100%;
    padding-left: 30px;
`;

export const Heading = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #1d1d1d;
    position: relative;
    right: 50px;
    padding-top: 20px;
`;

export const SubHeading = styled.p`
    position: relative;
    right: 50px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 20px;
    line-height: 26px;
    padding-left: 50px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    position: relative;
    width: 100%;
    align-items: flex-start;
`;

export const Input = styled.input`
    display: flex;
    width: 27%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background-color: #fff;
    margin-bottom: 10px;
`;

export const InputHint = styled.div`
    font-size: 12px;
    color: #686f7a;
    margin-top: -10px;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
`;

export const SaveButton = styled.button`
    background-color: #ff0000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;

    &:hover {
        background-color: #333;
    }
`;

export const StyledWarning = styled.span`
    margin-top: 0px;
    padding-top: px;
    padding-bottom: 100px;
    font-size: 14px;
    font-weight: bolder;
    margin-bottom: 0;
    color: #686f7a;
`;

export const StyledContext = styled.span`
    font-size: 14.5px;
    color: #686f7a;
`;
