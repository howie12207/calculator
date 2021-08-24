import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import DisplayBar from "./components/DisplayBar";
import ButtonSection from "./components/ButtonSection";

import { plus, minus, times, divide } from "./components/operating";
import keyCodeData from "./components/keyCodeData";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [lastClick, setLastClick] = useState("");
  const [lastValue, setLastValue] = useState("");
  const [operator, setOperator] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const calculate = () => {
    const operate = {
      "+": plus(lastValue, displayValue),
      "-": minus(lastValue, displayValue),
      x: times(lastValue, displayValue),
      "/": divide(lastValue, displayValue),
    };
    const result = operate[operator];
    setDisplayValue(String(result));
  };

  const clickHandle = (value) => {
    const nan = ["DEL", "RESET", "=", "+", "-", "x", "/", "."];
    const operatorMark = ["+", "-", "x", "/"];

    if (!nan.includes(value)) {
      // 按下數字時
      const dValue =
        displayValue === "0" || operatorMark.includes(lastClick)
          ? value
          : displayValue + value;
      setDisplayValue(dValue);
    } else if (operatorMark.includes(value)) {
      // 按下 + - x / 時
      setOperator(value);
      setLastValue(displayValue);
    } else if (value === ".") {
      // 按下 . 時
      const dValue = displayValue.includes(".")
        ? displayValue
        : displayValue + ".";
      setDisplayValue(dValue);
    } else if (value === "=") {
      // 按下 = 時
      operatorMark.includes(operator) && (calculate(), setOperator(""));
    } else if (value === "DEL") {
      // 按下 DEL 時
      const dValue =
        displayValue.length === 1 ? "0" : displayValue.slice(0, -1);
      setDisplayValue(dValue);
    } else if (value === "RESET") {
      setDisplayValue("0");
      setLastValue("");
      setOperator("");
    }
    setLastClick(value);
  };

  const handleKeyDown = (e) => {
    const value = keyCodeData(e.keyCode);
    value && clickHandle(value);
  };

  return (
    <>
      <Header />
      <DisplayBar displayValue={displayValue} />
      <ButtonSection clickHandle={clickHandle} />
    </>
  );
}

export default App;
