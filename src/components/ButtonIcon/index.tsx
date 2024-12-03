import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import "./Icon.css";

interface IconProps {
  icon: IconType;
  size?: string;
  color?: string;
  className?: string; // Optional class name for custom styling
}

const Icon: React.FC<IconProps & IconBaseProps> = ({ 
  icon: IconComponent, 
  size = "1em", 
  color = "black", 
  className = "", 
  ...props 
}) => {
  return (
    <IconComponent 
      size={size} 
      color={color} 
      className={`icon ${className}`} 
      {...props} 
    />
  );
};

export default Icon;
