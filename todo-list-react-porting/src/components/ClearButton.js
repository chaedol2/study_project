import React from "react";

const ClearButton = ({ handleClickRemoveAllButton }) => {
  return (
    <button
      onClick={handleClickRemoveAllButton}
      type="button"
      className="clear-btn"
    >
      clear items
    </button>
  );
};

export default React.memo(ClearButton);
