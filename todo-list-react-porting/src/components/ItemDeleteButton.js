import React from "react";

const ItemDeleteButton = ({ handleClickDeleteIcon }) => {
  return (
    <button
      onClick={handleClickDeleteIcon}
      type="button"
      className="delete-btn"
    >
      <i className="fas fa-trash"></i>
    </button>
  );
};

export default React.memo(ItemDeleteButton);
