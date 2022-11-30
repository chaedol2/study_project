import { useContext } from "react";
import { CalcDispatchContext } from "../../App";

const HistoryClearButton = () => {
  const { handleCliCkClearHistoryItem } = useContext(CalcDispatchContext);
  return (
    <button
      onClick={handleCliCkClearHistoryItem}
      type="button"
      className="history-clear-button"
    >
      clear history
    </button>
  );
};

export default HistoryClearButton;
