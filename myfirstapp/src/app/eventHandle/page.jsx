"use client";
import React, { useState } from "react";

const page = () => {
  const [inputvalue, setInputvalue] = useState("");
  const handleClick = (p1) => {
    alert(p1);
  };
  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };
  return (
    <div>
      <h1>Event handler</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={() => handleClick("hello")}>Click here</button>
      <p style={{ color: "white" }}>Value is: {inputvalue}</p>

      {inputvalue == "chanuka" && (
        <div>
          <h1>manage account</h1>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magnam
            ad iure perspiciatis ipsa quas sed, tempora natus ullam
          </p>
        </div>
      )}
    </div>
  );
};

export default page;
