import React from "react";
import { useState } from 'react'
import "./radio.css";

const Radio = (props) => {

  const [isClicked, setIsClicked] = useState(null);
  const { variant, disabled, error, children, ...rest } = props;

  const toggleVisibility = () => {
    if (disabled) return;
    if (error) return;
    setIsClicked(!isClicked);
  };
  // 
  return (
    <div onClick={toggleVisibility} {...rest}>
      <div className={`radio ${disabled ? "disable" : ""} ${error ? "signal" : ""}`}>
      {(isClicked || disabled)&& <div className="radio clicked" />}
      </div>
    </div>
  );
};

export default Radio;
