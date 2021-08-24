import React from "react";

const DisplayBar = ({ displayValue }) => {
  return (
    <div className="bg-darkBlue-900 rounded-md">
      <p className="p-4 my-4 text-xl text-right text-white">{displayValue}</p>
    </div>
  );
};

export default DisplayBar;
