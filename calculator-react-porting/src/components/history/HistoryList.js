import React from "react";
import HistoryItem from "./HistoryItem";

const HistoryList = ({ historyList }) => {
  return (
    <div className="history-list">
      {historyList.map((it) => (
        <HistoryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

export default React.memo(HistoryList);
