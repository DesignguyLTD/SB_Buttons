import React from "react";
import "./checkbox.css";

const Checkbox = (props) => {
  const { variant = "checkbox", children, ...rest } = props;

  return (
    <label>
      <input
        {...rest}
        type="checkbox"
        className={`checkbox ${variant}`}
        value={children}
      />
    </label>
  );
};

export default Checkbox;
