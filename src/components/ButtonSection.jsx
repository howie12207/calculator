import React from "react";
import clsx from "clsx";

import Btn from "./Btn";

const ButtonSection = ({ clickHandle, theme }) => {
  return (
    <div
      className={clsx(
        "w-full grid grid-cols-4 place-items-center gap-4",
        "rounded-md p-4",
        theme === "1" && "bg-darkBlue-800",
        theme === "2" && "bg-gray-300",
        theme === "3" && "bg-violet-800",
      )}
    >
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        7
      </Btn>
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        8
      </Btn>
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        9
      </Btn>
      <Btn type="cmd" clickHandle={clickHandle} theme={theme}>
        DEL
      </Btn>
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        4
      </Btn>
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        5
      </Btn>
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        6
      </Btn>
      <Btn type="operator" clickHandle={clickHandle} theme={theme}>
        +
      </Btn>
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        1
      </Btn>
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        2
      </Btn>
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        3
      </Btn>
      <Btn type="operator" clickHandle={clickHandle} theme={theme}>
        -
      </Btn>
      <Btn type="operator" clickHandle={clickHandle} theme={theme}>
        .
      </Btn>
      <Btn type="number" clickHandle={clickHandle} theme={theme}>
        0
      </Btn>
      <Btn type="operator" clickHandle={clickHandle} theme={theme}>
        /
      </Btn>
      <Btn type="operator" clickHandle={clickHandle} theme={theme}>
        x
      </Btn>
      <Btn type="cmd" clickHandle={clickHandle} theme={theme}>
        RESET
      </Btn>
      <Btn type="cmd" clickHandle={clickHandle} theme={theme}>
        =
      </Btn>
    </div>
  );
};

export default ButtonSection;
