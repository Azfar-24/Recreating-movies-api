import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div
      className="header"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      MoviezZ
    </div>
  );
};
