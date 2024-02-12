import React from "react";
import { useState } from 'react'
import "./radio.css";

const Radio = (props) => {

  const [isClicked, setIsClicked] = useState(null);
  const { variant = "radio", children, ...rest } = props;

  const toggleVisibility = () => {
    setIsClicked(!isClicked);
  };
  // 
  return (
    <div onClick={toggleVisibility} {...rest}>
      <div className="radio">
      {isClicked && <div className="radio clicked" />}
      </div>
    </div>
  );
};

export default Radio;
