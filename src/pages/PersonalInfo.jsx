// import { Input } from "@mui/material";
import * as React from "react";
import { useState } from "react";

const PersonalInfo = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => setInputValue(event.target.value);

  return (
    <div>
      <h2>
        Hello world
      </h2>
    </div>
  );
};

export default PersonalInfo;
