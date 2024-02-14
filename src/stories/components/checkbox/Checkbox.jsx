import React from "react";
import { useState } from "react";
import "./checkbox.css";
import { FaCheck } from "react-icons/fa";

const Checkbox = (props) => {
  const { variant = "checkbox", disabled, error, children, ...rest } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCheckboxChange = () => {
    if (disabled) return;
    if (error) return;
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={handleCheckboxChange} {...rest}>
      <div
        className={`checkbox ${isChecked ? "checked" : ""} ${
          disabled ? "disable" : ""
        } ${error ? "signal" : ""}`}
      >
        {(isChecked || isError || isDisabled) && <FaCheck />}
        <div />
      </div>
    </div>
  );
};

export default Checkbox;
