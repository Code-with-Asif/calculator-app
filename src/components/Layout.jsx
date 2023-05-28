import React from "react";
import "./Layout.css";

const Layout = () => {
  const handleClick = () => {};
  return (
    <div className="frame">
      <div className="calculator">
        <br />{" "}
        <div className="keys">
          <input
            type="button"
            value="C"
            className="button clear"
            onClick={handleClick}
          />
          <input
            type="button"
            value="DEL"
            className="button-clear"
            onClick={handleClick}
          />
          <input
            type="button"
            value="%"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="/"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="7"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="8"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="9"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="*"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="4"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="5"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="6"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="-"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="1"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="2"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="3"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="+"
            className="button-operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value="0"
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="."
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value="="
            className="button-operator"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;