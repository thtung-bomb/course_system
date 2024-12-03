import React, { useState } from "react";

import { GoReport } from "react-icons/go";
import { IoMdCloudUpload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  Container,
  FullScreen,
  TitleFeedback,
  FeedbackIcon,
  FormGroup,
  Label,
  FormControlEmail,
  FormControlDescription,
  UploadContainer,
  UploadIcon,
  FileInput,
  UploadText,
  SubmitButton,
  UploadedFiles,
  UploadedFile,
  UploadedImage,
  UploadedFileText,
  DeleteIcon,
  ErrorMessage,
  ErrorMessageEmail,
} from "./style/style.tsx";

interface FeedbackData {
  email: string;
  description: string;
  screenshots: File[];
}

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [screenshots, setScreenshots] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateFileSize = (file: File): boolean => {
    const fileSizeMB = file.size / (1024 * 1024);
    return fileSizeMB <= 5;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEmailError("");

    if (!email) {
      setEmailError("Please Enter Your Email first.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      return;
    }

    const feedbackData: FeedbackData = {
      email,
      description,
      screenshots,
    };
    console.log(feedbackData);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setDragActive(false);
  };

  const handleFileUpload = (files: FileList) => {
    const validFiles: File[] = [];
    const invalidFiles: File[] = [];

    Array.from(files).forEach((file) => {
      if (validateFileSize(file)) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file);
      }
    });

    if (screenshots.length + validFiles.length > 5) {
      setError("You can only upload up to 5 files.");
      return;
    }

    if (invalidFiles.length > 0) {
      setError("Each file must be smaller than 5MB.");
    } else {
      setError("");
    }

    setScreenshots([...screenshots, ...validFiles]);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragActive(false);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      handleFileUpload(event.dataTransfer.files);
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      handleFileUpload(event.target.files);
    }
  };

  const handleDeleteFile = (index: number) => {
    setScreenshots(screenshots.filter((_, i) => i !== index));
  };

  return (
    <FullScreen>
      <Container>
        <TitleFeedback>
          <FeedbackIcon>
            <GoReport />
          </FeedbackIcon>
          Send Feedback
        </TitleFeedback>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControlEmail
              type="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
            {emailError && <ErrorMessageEmail>{emailError}</ErrorMessageEmail>}
          </FormGroup>
          <FormGroup>
            <FormControlDescription
              id="description"
              placeholder="Describe your issue or share your ideas"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></FormControlDescription>
          </FormGroup>
          <FormGroup>
            <Label>Add Screenshots</Label>
            <UploadContainer
              active={dragActive}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <FileInput
                type="file"
                id="file-upload"
                multiple
                onChange={handleFileInputChange}
                accept="image/*"
              />
              <UploadIcon>
                <IoMdCloudUpload />
              </UploadIcon>
              {dragActive ? (
                <UploadText>Drop the files here...</UploadText>
              ) : (
                <UploadText>
                  <h2>Select screenshot to upload</h2>
                  or drag and drop screenshots
                </UploadText>
              )}
            </UploadContainer>
          </FormGroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <UploadedFiles>
            {screenshots.map((file, index) => (
              <UploadedFile key={index}>
                {file.type.startsWith("image/") && (
                  <UploadedImage
                    src={URL.createObjectURL(file)}
                    alt={`screenshot-${index}`}
                  />
                )}
                <UploadedFileText>{file.name}</UploadedFileText>
                <DeleteIcon onClick={() => handleDeleteFile(index)}>
                  <IoClose />
                </DeleteIcon>
              </UploadedFile>
            ))}
          </UploadedFiles>
          <SubmitButton type="submit">Send Feedback</SubmitButton>
        </form>
      </Container>
    </FullScreen>
  );
};

export default Index;
