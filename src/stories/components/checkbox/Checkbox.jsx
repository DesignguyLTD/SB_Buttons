import React from "react";
import { useState } from 'react'
import "./checkbox.css";
import { FaCheck } from "react-icons/fa";


const Checkbox = (props) => {
  const { variant = "checkbox", children, ...rest } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={handleCheckboxChange} {...rest}>
      <div className="checkbox">
      {isChecked &&  <img src={<FaCheck style={{ width: '10px', height: '10px' }} />} className="checkbox checked" />}
      <div />
      </div>
    </div>
  );
};

export default Checkbox;
