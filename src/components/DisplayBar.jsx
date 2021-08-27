import React from "react";
import clsx from "clsx";

import { toThousand } from "./operating";

const DisplayBar = ({ displayValue, theme }) => {
  return (
    <div
      className={clsx(
        "rounded-md w-full",
        theme === "1" && "bg-darkBlue-800",
        theme === "2" && "bg-white",
        theme === "3" && "bg-violet-800",
      )}
    >
      <p
        className={clsx(
          "p-4 my-4 text-xl text-right",
          theme !== "2" && "text-white",
        )}
      >
        {toThousand(displayValue)}
      </p>
    </div>
  );
};

export default DisplayBar;
