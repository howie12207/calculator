import React from "react";
import clsx from "clsx";

const Btn = ({ children, type }) => {
  return (
    <span
      className={clsx(
        "w-12 h-12 leading-48 rounded-md",
        "text-2xl text-darkBlue-400 text-center font-black",
        "bg-grayishOrange-400",
        "shadow-inner",
        type === "cmd" && "text-white bg-darkBlue-500 text-xs",
        children === "RESET" && "col-span-2 w-full",
        children === "=" && "col-span-2 w-full bg-darkRed-500",
      )}
    >
      {children}
    </span>
  );
};

export default Btn;
