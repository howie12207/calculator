import React from "react";
import clsx from "clsx";

const Btn = ({ children, type, clickHandle }) => {
  const clickHandl = (value) => {
    clickHandle(value);
  };

  return (
    <button
      className={clsx(
        "w-full h-16 rounded-md",
        "text-2xl text-darkBlue-400 text-center font-black",
        "bg-grayishOrange-400",
        "shadow-inner",
        type === "cmd" && "text-white bg-darkBlue-500 text-xs",
        children === "RESET" && "col-span-2 w-full",
        children === "=" && "col-span-2 w-full bg-darkRed-500",

        "hover:opacity-80 focus:ring-2 focus:ring-darkRed-900 transition-all",
      )}
      onClick={() => clickHandl(children)}
    >
      {children}
    </button>
  );
};

export default Btn;
