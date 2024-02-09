import React from "react";
import { useState } from "react";
import "./button.css";
import { TbReload } from "react-icons/tb";
import { FaGreaterThan } from "react-icons/fa";

const Button = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const { variant = "norm", children, ...rest } = props;

  return (
    <button className={`button ${variant}`} {...rest} onClick={handleClick}>
      {children}
      {isClicked ? (
        <TbReload className="icon" />
      ) : (
        <FaGreaterThan className="icon" />
      )}
    </button>
  );
};

export default Button;
