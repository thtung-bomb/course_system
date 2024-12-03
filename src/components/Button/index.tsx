import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  buttonText: string;
  buttonStyle?: string; // Tùy chọn truyền vào buttonStyle
  isDisabled?: boolean; // optional disabled state
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  buttonText,
  buttonStyle = "primary",
  isDisabled = false,
}) => {
  const classes =
    `wrapper ${buttonStyle} ${isDisabled ? "disabled" : ""}`.trim();

  return (
    <button className={classes} onClick={onClick} disabled={isDisabled}>
      {buttonText}
    </button>
  );
};

export default Button;
