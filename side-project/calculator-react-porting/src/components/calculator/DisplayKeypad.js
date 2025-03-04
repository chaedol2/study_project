import React, { useContext } from "react";
import { CalcDispatchContext } from "../../App";

const DisplayKeypad = () => {
  const { handleKeypadClick } = useContext(CalcDispatchContext);
  return (
    <section className="keypad-buttons">
      <button
        onClick={handleKeypadClick}
        type="button"
        className="function-button"
        id="clear"
        value="clear"
      >
        C
      </button>
      <button
        onClick={handleKeypadClick}
        className="function-button"
        id="erase"
        value="erase"
      >
        <i className="fas fa-backspace"></i>
      </button>
      <button onClick={handleKeypadClick} className="operator-button" value="/">
        /
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="7">
        7
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="8">
        8
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="9">
        9
      </button>
      <button onClick={handleKeypadClick} className="operator-button" value="*">
        x
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="4">
        4
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="5">
        5
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="6">
        6
      </button>
      <button onClick={handleKeypadClick} className="operator-button" value="-">
        -
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="1">
        1
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="2">
        2
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="3">
        3
      </button>
      <button onClick={handleKeypadClick} className="operator-button" value="+">
        +
      </button>
      <button
        onClick={handleKeypadClick}
        className={"function-button"}
        id="history"
        value="history"
      >
        <i className="fas fa-history"></i>
      </button>
      <button onClick={handleKeypadClick} className="number-button" value="0">
        0
      </button>
      <button onClick={handleKeypadClick} className="number-button" value=".">
        .
      </button>
      <button
        onClick={handleKeypadClick}
        className="function-button"
        id="equal_button"
        value="equal_button"
      >
        =
      </button>
    </section>
  );
};

export default DisplayKeypad;
