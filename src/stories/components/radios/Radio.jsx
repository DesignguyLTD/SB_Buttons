import React from "react";
import "./radio.css";

const Radio = (props) => {
  const { variant = "radio", children, ...rest } = props;

  return (
    <label>
      <input
        {...rest}
        type="radio"
        className={`radio ${variant}`}
        value={children}
      />
    </label>
  );
};

export default Radio;
