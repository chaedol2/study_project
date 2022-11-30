import React, { useContext } from "react";
import { CalcStateContext } from "../../App";

const DisplayView = () => {
  const { currentNum, answerNum } = useContext(CalcStateContext);

  return (
    <section className="display-area">
      <div className="answer-screen">{answerNum}</div>
      <div className="current-input">{currentNum}</div>
    </section>
  );
};

export default React.memo(DisplayView);
