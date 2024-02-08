import React from "react";
import "./button.css";

const Button = (props) => {
  const { variant = "norm", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
