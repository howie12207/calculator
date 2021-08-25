import React from "react";

import { toThousand } from "./operating";

const DisplayBar = ({ displayValue }) => {
  return (
    <div className="bg-darkBlue-900 rounded-md">
      <p className="p-4 my-4 text-xl text-right text-white">
        {toThousand(displayValue)}
      </p>
    </div>
  );
};

export default DisplayBar;
