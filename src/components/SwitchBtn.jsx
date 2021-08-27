import React from "react";
import clsx from "clsx";

const SwitchBtn = ({ theme, changeTheme }) => {
  const toggleAry = [
    {
      id: "1",
      cClass: "bg-magenta-500",
    },
    {
      id: "2",
      cClass: "bg-magenta-900",
    },
    {
      id: "3",
      cClass: "bg-cyan-500",
    },
  ];
  const Toggle = ({ id, cClass }) => {
    return (
      <div
        className={clsx(
          "w-3 h-3 bg-magenta-500 rounded-full relative cursor-pointer",
          cClass,
          "opacity-0",
          theme === id && "opacity-100",
        )}
      >
        <input
          type="radio"
          name="theme"
          id={id}
          className="absolute opacity-0"
          onChange={() => {
            changeTheme(id);
          }}
        />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-x-2">
      <div></div>
      <div className="flex justify-evenly">
        <label htmlFor="1">1</label>
        <label htmlFor="2">2</label>
        <label htmlFor="3">3</label>
      </div>
      <div>THEME</div>
      <div className="w-full min-h-full flex justify-evenly items-center bg-darkBlue-800 rounded-xl">
        {toggleAry.map((item) => {
          return <Toggle id={item.id} cClass={item.cClass} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default SwitchBtn;
