import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/hooks";
import { TestResult } from "@features/testResult/testResultSlice";
import styled from "styled-components";
import { testResultAction } from "@features/testResult/testResultSlice";

const Container = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const QuestionText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const OptionsContainer = styled.div`
  margin-top: 10px;
`;

const OptionLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  background-color: #ed2a26;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;

  &:hover {
    background-color: #c70000;
  }
`;

const Question = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Sample questions and options with correct answers
  const questions = [
    {
      id: 1,
      question:
        "What is the name of the first page you encounter after logging into your web page?",
      options: [
        "Dashboard",
        "Security question page",
        "WP upgrade option",
        "WPAdmin",
      ],
      correctAnswer: "Dashboard",
    },
    {
      id: 2,
      question: "What is WordPress?",
      options: [
        "Content Management System (CMS)",
        "E-commerce platform",
        "Blogging platform",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      id: 3,
      question: "How can you get involved with WordPress?",
      options: [
        "Attend Word Camp",
        "Edit the Codex (documentation)",
        "Help in the Forums",
        "All of these",
      ],
      correctAnswer: "All of these",
    },
    {
      id: 4,
      question: "What ways to use WordPress?",
      options: [
        "Arcade",
        "Blog",
        "Content Management System (CMS)",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      id: 5,
      question: "What case we cannot recommend WordPress to our client?",
      options: [
        "If client is working on non-CMS base project",
        "If site wants complex or innovative e-commerce",
        "In case of enterprise intranet solution",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      id: 6,
      question: "Which relational database does WordPress use?",
      options: ["MySQL", "Oracle", "PostgresSQL", "MS SQLServer"],
      correctAnswer: "MySQL",
    },
    {
      id: 7,
      question:
        "What are the rules that you have to follow for WordPress plugin development?",
      options: [
        "Create a unique name",
        "Create the plugin’s folder",
        "Create a sub-folder for PHP files, translations, and assets",
        "All of these",
      ],
      correctAnswer: "All of these",
    },
    {
      id: 8,
      question:
        "What are the steps you can take if your WordPress file is hacked?",
      options: [
        "Install security plugins like WP security",
        "Re-install the latest version of WordPress",
        "Change password and user-ids for all your users",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      id: 9,
      question: "What is a WordPress taxonomy?",
      options: ["Category", "Tag", "Link Category", "Post Formats"],
      correctAnswer: "Category",
    },
    {
      id: 10,
      question:
        "In WordPress, what is the user role with the highest privilege level?",
      options: ["Administrator", "Author", "Editor", "Contributor"],
      correctAnswer: "Administrator",
    },
    {
      id: 11,
      question: "What are rules to follow in WordPress plugin development?",
      options: [
        "Find a unique name",
        "Setup a prefix (related to your brand)",
        "Create the plugin’s folder",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      id: 12,
      question: "What is Gravatar?",
      options: ["A Plugin", "Globally Recognized Image or Photo", "CMS"],
      correctAnswer: "Globally Recognized Image or Photo",
    },
    {
      id: 13,
      question: "Types of post format available in Wordpress.",
      options: ["10", "11", "9", "6"],
      correctAnswer: "10",
    },
    {
      id: 14,
      question: "How many number of tables in wordpress database available?",
      options: ["18", "9", "6", "12"],
      correctAnswer: "12",
    },
    {
      id: 15,
      question: "How many free plug self hosted that work on wordpress only?",
      options: ["2,000", "10,000", "30,000"],
      correctAnswer: "30,000",
    },
    {
      id: 16,
      question: "Is Multilingual sites are allowed in Wordpress?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
    },
    {
      id: 17,
      question: "What is name of configuration file in WordPress ?",
      options: ["header.php", "wp-settings.php", "wp-config.php", "page.php"],
      correctAnswer: "wp-config.php",
    },
    {
      id: 18,
      question: "What is a permalink?",
      options: [
        "A popular WordPress Plugin",
        "The numeric IP address of your WordPress site",
        "The complete URL of your WordPress site",
        "Part of your WordPress URL which you set",
      ],
      correctAnswer: "Part of your WordPress URL which you set",
    },
    {
      id: 19,
      question: "How many templates can one theme contain?",
      options: ["One", "Max Ten", "Max 20", "Unlimited"],
      correctAnswer: "Unlimited",
    },
    {
      id: 20,
      question: "In which programming language WordPress is written?",
      options: ["Java", "Node", "Php", "Javascript"],
      correctAnswer: "Php",
    },
  ];
  const handleCheckboxChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  // Submit handler
  const handleSubmit = () => {
    let question = 0;
    let falseNumber = 0;
    let trueNumber = 0;

    questions.forEach(({ id, correctAnswer }) => {
      if (answers[id] === correctAnswer) {
        trueNumber++;
      } else {
        falseNumber++;
      }
    });
    const results: TestResult = { question, falseNumber, trueNumber };
    dispatch(
      testResultAction.selectTestResult({
        results,
        onSuccess: () => {
          navigate("/test-result");
        },
        onFailure: () => {
          console.error("Failed to select test result.");
        },
      }),
    );
  };

  return (
    <Container>
      {questions.map(({ id, question, options }) => (
        <QuestionContainer key={id}>
          <QuestionText>
            {id}. {question}
          </QuestionText>
          <OptionsContainer>
            {options.map((option, index) => (
              <OptionLabel key={index}>
                <CheckboxInput
                  type="radio"
                  checked={answers[id] === option}
                  onChange={() => handleCheckboxChange(id, option)}
                />
                {option}
              </OptionLabel>
            ))}
          </OptionsContainer>
        </QuestionContainer>
      ))}
      <SubmitButton onClick={handleSubmit}>Submit Answers</SubmitButton>
    </Container>
  );
};

export default Question;
