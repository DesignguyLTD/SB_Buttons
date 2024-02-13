import React from "react";
import { useState } from 'react'
import "./checkbox.css";
import {FaCheck} from "react-icons/fa";


const Checkbox = (props) => {
  const { variant = "checkbox", children, ...rest } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    //setIsError(!isError);
    //setIsDisabled(!isDisabled);

  };

  return (
    <div onClick={handleCheckboxChange} {...rest}>
      <div className={`checkbox ${isChecked ? 'checked' : ''} ${isError ? 'error' : ''} ${isDisabled ? 'disabled' : ''}`}>
      {(isChecked || isError || isDisabled) &&  <FaCheck />}
      <div />
      </div>
    </div>
  );
};

export default Checkbox;
