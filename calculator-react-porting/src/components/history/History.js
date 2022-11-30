import React, { useContext } from "react";
import { CalcStateContext } from "../../App";
import HistoryClearButton from "./HistoryClearButton";
import HistoryList from "./HistoryList";

const History = () => {
  const { historyList } = useContext(CalcStateContext);

  const showContainer = historyList.length === 0 ? "" : "show-container";

  return (
    <div className={["history", `${showContainer}`].join(" ")}>
      <section className="history-area">
        <div className="history-screen">
          {/* <!-- History List --> */}
          <HistoryList historyList={historyList} />
          {/* <!-- History Clear Button --> */}
          <HistoryClearButton />
        </div>
      </section>
    </div>
  );
};

History.defaultProps = {
  historyList: [],
};

export default React.memo(History);
