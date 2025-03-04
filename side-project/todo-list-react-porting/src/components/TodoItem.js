import React, { useContext, useRef, useState } from "react";
import { TodoDispatchContext } from "../App";
import ItemDeleteButton from "./ItemDeleteButton";
import ItemEditButton from "./ItemEditButton";

const TodoItem = ({
  id,
  content,
  handleClickEditIcon,
  handleClickDeleteIcon,
}) => {
  return (
    <article id={id} className="grocery-item">
      <p className="title">{content}</p>
      <div className="btn-container">
        <ItemEditButton handleClickEditIcon={handleClickEditIcon} />
        <ItemDeleteButton handleClickDeleteIcon={handleClickDeleteIcon} />
      </div>
    </article>
  );
};

export default React.memo(TodoItem);
