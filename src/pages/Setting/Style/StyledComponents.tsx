import styled from 'styled-components';

export const SettingsToolbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    
    font-size: 20px;
    font-weight: 500;
    color: #333;
    background-color:#f8f9fa;
`;


export const SettingsTitle = styled.div`
    display: center;
    align-items: center;
    font-size: x-large;
    margin-bottom: 40px;
    color: #333;
    font-weight: 550;
    padding-top: 40px;
    padding-left: 60px;

`;


export const SettingsTabs = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding-left: 50px;
    ;
`;

export const TabButton = styled.button<{ active: boolean }>`
    background: none;
    border: none;
    font-weight: 600;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 13.5px;
    color: ${props => (props.active ? '#fff' : '#555')};
    background-color: ${props => (props.active ? '#ff0000' : 'transparent')};
    border-radius: ${props => (props.active ? '3px' : 'none')};
    transition: background-color 0.3s, color 0.3s;

  
`;

export const TabContent = styled.span`
    margin-top: 0px;
    h2 {
        padding-bottom: 10px;
        padding-left: 50px;
        font-size: 16px;
        font-weight: 550;
    }
    p {
        padding-bottom: 20px;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 0;
        color: #686f7a;

    }
   

    a {
        padding-bottom: 20px;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 0;
        color: #686f7a;
        padding-left: 50px;
    }
   
`;

export const OtherContent = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ProfileFormContainer = styled.div`
    color: #333;
    font-size: 16px;
    margin: 0 auto 40px auto;
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
`;

export const FormGroup = styled.div`
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    margin-right: 200px;
    position: relative;
    width: 100%;
`;

export const Input = styled.input`
    display: flex !important;
    width : 100%;

    padding: 11.8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background-color: #fff;
    
    &.ip1{
        width: 29%;
        margin-right: 10px;
        float: inline-start;
        
    }
    &.ip2{
        width: 28.5%;
        
    }
    &.ip3 {
        width: 58%;
        position: relative; 
        padding-right: 40px; 
    }

`;

export const Textarea = styled.textarea`
    width: 58%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background-color: white;
    resize: none;
    height: 80px;
`;

export const CharacterCount = styled.span`
    font-size: 16px;
    color: #686f7a;
    background-color: #dedfe0;
    position: absolute;
    right: 785px;
    top: 50%;
    transform: translateY(-50%);
    padding: 7px 0px 5px 5px;
    height: 30px;
    width: 30px;
    border-radius: 30%;
`;


export const Hint = styled.p`
    font-size: 12px;
    color: #999;
    margin-top: -10px;
    margin-bottom: 20px;
    position: relative;
    right: 50px;
`;

export const SmallText = styled.p`
    font-size: 10px;
    color: #999;
    margin-top: 10px;
    margin-bottom: 20px;
    position: relative;
    padding-right: 100px;
    bottom: 15px;
     color: #e5e5e5;
     height: 30px;
     right: 50px;
`;

export const Hr1 = styled.hr`
   right: 370px;
   border: 1px solid #f7ecec !important;
   width: 59%;
   position: relative;
   padding-right: 0px;
`

export const ProfileLinksFormContainer = styled.div`
    color: #333;
    font-size: 16px;
    
    padding-left: 30px ;
    width: 59%;
    
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InputPrefix = styled.span`
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    
    padding: 13px;
    font-size: 13px;
    color: #777;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    font-weight: bolder;
`;

export const InputHint = styled.div`
    font-size: 12px;
    color: #999;
    margin-top: 5px;
    position: relative;

`;

export const SaveButton = styled.button`

    background-color: #ff0000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin: 20px auto 0;

    &:hover {
        background-color: #333;
    }
`;

