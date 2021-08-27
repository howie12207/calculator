import React from "react";
import clsx from "clsx";

import SwitchBtn from "./SwitchBtn";

const Header = ({ theme, changeTheme }) => {
  return (
    <header
      className={clsx(
        "flex items-center justify-between  w-full",
        theme !== "2" && "text-white",
      )}
    >
      <h1 className="font-black text-3xl">calc</h1>
      <SwitchBtn theme={theme} changeTheme={changeTheme} />
    </header>
  );
};

export default Header;
