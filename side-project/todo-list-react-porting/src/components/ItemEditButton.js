import React from "react";

const ItemEditButton = ({ handleClickEditIcon }) => {
  return (
    <button onClick={handleClickEditIcon} type="button" className="edit-btn">
      <i className="fas fa-edit"></i>
    </button>
  );
};

export default React.memo(ItemEditButton);
