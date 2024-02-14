import React from "react";
import { useState } from "react";
import "./button.css";
import { TbReload } from "react-icons/tb";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Button = (props) => {
  const [clickedStatus, setClickedStatus] = useState("not-clicked");

  const { variant, disabled, children, ...rest } = props;

  const handleClick = () => {
    if (disabled) return;
    if (clickedStatus === "clicked" || clickedStatus === "loading") {
      setClickedStatus("not-clicked");
    } else {
      setClickedStatus("clicked");
      setTimeout(() => {
        setClickedStatus("loading");
      }, 3000);
    }
  };

  return (
    <button
      className={`button ${
        clickedStatus === "not-clicked"
          ? "inactive"
          : clickedStatus === "clicked"
          ? "active"
          : "loading"
      } ${variant} ${disabled ? "disable" : ""}`}
      {...rest}
      onClick={handleClick}
    >
      {children}
      {clickedStatus === "loading" ? (
        <TbReload className="icon" />
      ) : (
        <LiaGreaterThanSolid className="icon" /> 
      )}
    </button>
  );
};

export default Button;
