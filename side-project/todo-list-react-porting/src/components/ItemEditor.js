import React from "react";

const ItemEditor = ({
  handleSubmit,
  contentInput,
  handleChangeState,
  isEdit,
}) => {
  return (
    <form className="grocery-form" onSubmit={handleSubmit}>
      <p className="alert"></p>
      <h3>grocery bud</h3>
      <div className="form-control">
        <input
          ref={contentInput}
          name="content"
          onChange={handleChangeState}
          type="text"
          id="grocery"
          placeholder="e.g. eggs"
        />
        {!isEdit ? (
          <button type="submit" className="submit-btn">
            submit
          </button>
        ) : (
          <button type="submit" className="submit-btn">
            edit
          </button>
        )}
      </div>
    </form>
  );
};

export default React.memo(ItemEditor);
