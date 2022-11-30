import React from "react";
import ClearButton from "./ClearButton";
import TodoItem from "./TodoItem";

const TodoList = ({
  dataList,
  isEdit,
  handleClickEditIcon,
  handleClickDeleteIcon,
  isExistData,
  handleClickRemoveAllButton,
}) => {
  const showContainer = isExistData ? "show-container" : "";

  return (
    <div className={["grocery-container", `${showContainer}`].join(" ")}>
      <div className="grocery-list">
        {dataList.map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            isEdit={isEdit}
            handleClickEditIcon={handleClickEditIcon}
            handleClickDeleteIcon={handleClickDeleteIcon}
          />
        ))}
      </div>

      {/* <!-- button --> */}
      <ClearButton handleClickRemoveAllButton={handleClickRemoveAllButton} />
    </div>
  );
};

export default React.memo(TodoList);
