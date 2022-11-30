import React, { useContext } from "react";
import { CalcDispatchContext } from "../../App";

const HistoryItemDeleteButton = () => {
  const { handleCliCkDeleteHistoryItem } = useContext(CalcDispatchContext);
  return (
    <button
      onClick={handleCliCkDeleteHistoryItem}
      type="button"
      className="delete-history-button"
    >
      <i className="fas fa-trash"></i>
    </button>
  );
};

export default HistoryItemDeleteButton;
