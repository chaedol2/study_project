import React from "react";
import HistoryItemDeleteButton from "./HistoryItemDeleteButton";

const HistoryItem = ({ id, historyResult }) => {
  return (
    <article id={id} className="history-item">
      <p className="history-formula">{historyResult}</p>
      <HistoryItemDeleteButton />
    </article>
  );
};

export default React.memo(HistoryItem);
