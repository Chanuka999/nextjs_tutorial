"use client";
import React from "react";

const Button = () => {
  const handleClick = () => {
    alert("hello");
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Button;
