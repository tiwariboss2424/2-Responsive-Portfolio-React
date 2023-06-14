import React, { createContext, useState } from "react";
const bg = document.body;
const logo = document.querySelector(".n-toggle");

const ChangeBg = createContext();

const AppProvider = ({ children }) => {
  const [toggleBg, setToggleBg] = useState("dark");
  const ToggleBg = () => {
    if (toggleBg === "dark") {
      setToggleBg("light");
      bg.style.background = "black";
      logo.style.color = "white";
    } else {
      setToggleBg("dark");
      bg.style.background = "white";
      logo.style.color = "black";
    }
  };

  return (
    <>
      <ChangeBg.Provider value={ToggleBg}>{children}</ChangeBg.Provider>
    </>
  );
};
export { AppProvider, ChangeBg };
