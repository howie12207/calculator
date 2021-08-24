import React from "react";
import clsx from "clsx";

import Btn from "./Btn";

const ButtonSection = ({ clickHandle }) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-4 place-items-center gap-4",
        "rounded-md p-4",
        "bg-darkBlue-800",
      )}
    >
      <Btn type="number" clickHandle={clickHandle}>
        7
      </Btn>
      <Btn type="number" clickHandle={clickHandle}>
        8
      </Btn>
      <Btn type="number" clickHandle={clickHandle}>
        9
      </Btn>
      <Btn type="cmd" clickHandle={clickHandle}>
        DEL
      </Btn>
      <Btn type="number" clickHandle={clickHandle}>
        4
      </Btn>
      <Btn type="number" clickHandle={clickHandle}>
        5
      </Btn>
      <Btn type="number" clickHandle={clickHandle}>
        6
      </Btn>
      <Btn type="operator" clickHandle={clickHandle}>
        +
      </Btn>
      <Btn type="number" clickHandle={clickHandle}>
        1
      </Btn>
      <Btn type="number" clickHandle={clickHandle}>
        2
      </Btn>
      <Btn type="number" clickHandle={clickHandle}>
        3
      </Btn>
      <Btn type="operator" clickHandle={clickHandle}>
        -
      </Btn>
      <Btn type="operator" clickHandle={clickHandle}>
        .
      </Btn>
      <Btn type="number" clickHandle={clickHandle}>
        0
      </Btn>
      <Btn type="operator" clickHandle={clickHandle}>
        /
      </Btn>
      <Btn type="operator" clickHandle={clickHandle}>
        x
      </Btn>
      <Btn type="cmd" clickHandle={clickHandle}>
        RESET
      </Btn>
      <Btn type="cmd" clickHandle={clickHandle}>
        =
      </Btn>
    </div>
  );
};

export default ButtonSection;
