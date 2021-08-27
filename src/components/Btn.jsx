import React from "react";
import clsx from "clsx";

const Btn = ({ children, type, clickHandle, theme }) => {
  const clickHandl = (value) => {
    clickHandle(value);
  };

  return (
    <button
      className={clsx(
        "w-full h-16 rounded-md",
        "text-2xl text-darkBlue-400 text-center font-black",
        "bg-grayishOrange-400",
        type === "cmd" && "text-white text-xs",
        "shadow-inner",
        "hover:opacity-80 focus:ring-2 focus:ring-darkRed-900 transition-all",
        children === "RESET" && "col-span-2 w-full",
        theme === "1" && type === "cmd" && "bg-darkBlue-500",
        theme === "2" && type === "cmd" && "bg-green-600",
        theme === "3" && "text-white bg-violet-700",
        theme === "3" &&
          (children === "RESET" || children === "DEL") &&
          "bg-violet-600",
        children === "=" && "col-span-2 w-full bg-darkRed-500",
        theme === "3" && children === "=" && "bg-green-400 text-black",
      )}
      onClick={() => clickHandl(children)}
    >
      {children}
    </button>
  );
};

export default Btn;
