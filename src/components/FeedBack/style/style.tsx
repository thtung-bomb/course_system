import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 100px;
  width: 1483px;
  height: 549px;
  margin-left: 30px;
`;

export const FullScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const TitleFeedback = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  font-family: inherit;
  color: #333;
`;

export const FeedbackIcon = styled.div`
  margin-right: 8px;
  font-size: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin: 0 0 20px;
  margin-top: 10px;
  font-weight: 600;
`;
export const FormControlEmail = styled.input`
  width: 48%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #fff;
  outline: none;
  color: #c7c7c7;

  &:focus {
    border: 1px solid #000;
    color: #000;
    &::placeholder {
      color: #979797;
    }
  }

  &::placeholder {
    color: #c7c7c7;
  }
`;

export const FormControlDescription = styled.textarea`
  margin-top: 10px;
  height: 131px;
  width: 48%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #fff;
  outline: none;
  color: #c7c7c7;

  &:focus {
    border: 1px solid #000;
    color: #000;
    &::placeholder {
      color: #979797;
    }
  }

  &::placeholder {
    color: #c7c7c7;
  }
`;

export const UploadContainer = styled.div`
  border: 2px dashed #ccc;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  position: relative;
  background-color: ${({ active }) => (active ? "#fafafa" : "#ffffff")};
  width: 48%;
  border: none;
  height: 120px;
  &:hover {
    border-color: #aaa;
  }
`;

export const UploadIcon = styled.div`
  font-size: 40px;
  margin-bottom: 8px;
  color: #777;
`;

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const UploadText = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #888;
  h2 {
    color: #333;
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 600;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: red;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const UploadedFiles = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const UploadedFile = styled.div`
  position: relative;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

export const UploadedImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
`;

export const UploadedFileText = styled.span`
  font-size: 14px;
  color: #555;
`;

export const DeleteIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  font-size: 18px;
  color: red;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ErrorMessageEmail = styled(ErrorMessage)`
  width: 46%;
`;
