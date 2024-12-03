import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const UploadButton = styled.label`
    background-color: red;
    color: #fff;
    padding: 8px 12px;
    border-radius: 2px;
    cursor: pointer;
    width: 126px;
    height: 36px;
    display: grid;
    font-size: 14px;
    align-items: center;
    justify-items: center;
  `;

    const UploadInput = styled.input`
    width: 414px;
    height: 38px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 2px;
    font-size: 16px;
    cursor: pointer;
    color:#777777;
  `;

    const UploadContainer = styled.label`
    display: flex;
    align-items: center;
  `;

    return (
        <UploadContainer>
            <UploadInput
                type="text"
                placeholder={file ? file.name : 'No choose'}
                readOnly
            />

            <UploadButton htmlFor="file-input">Upload File</UploadButton>
            <input
                id="file-input"
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </UploadContainer>
    );
};

export default FileUpload;