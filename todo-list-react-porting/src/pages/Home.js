import { useCallback, useContext, useRef, useState } from "react";
import { TodoStateContext, TodoDispatchContext } from "../App";
import ItemEditor from "../components/ItemEditor";
import TodoList from "../components/TodoList";

const Home = () => {
  const dataList = useContext(TodoStateContext);
  const { onCreate, onEdit, onRemove, onRemoveAll } =
    useContext(TodoDispatchContext);

  const contentInput = useRef();

  const [contentText, setContentText] = useState({ content: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [targetId, setTargetId] = useState(0);

  const handleChangeState = useCallback((e) => {
    setContentText({
      ...contentText,
      [e.target.name]: e.target.value,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = contentText.content.length;
    if (value && !isEdit) {
      contentInput.current.focus();
      onCreate(contentText.content);
      setContentText({ content: "" });
      displayAlert("item added to the List", "success");
    } else if (value >= 0 && isEdit) {
      contentInput.current.focus();
      onEdit(parseInt(targetId), contentInput.current.value);
      setContentText({ content: "" });
      setIsEdit(false);
      displayAlert("value changed", "success");
    } else {
      displayAlert("please enter value", "danger");
    }
    contentInput.current.value = "";
  };

  const handleClickEditIcon = useCallback((e) => {
    setIsEdit(true);

    // id, content 값 가져오기
    const targetId = e.currentTarget.parentElement.parentElement.id;
    const targetContent =
      e.currentTarget.parentElement.previousSibling.textContent;

    // input에 content값 넣기
    contentInput.current.value = targetContent;

    // 버튼 edit으로 변경
    if (isEdit) {
      contentInput.current.nextElementSibling.textContent = "Edit";
    }
    setTargetId(targetId);
  }, []);

  const handleClickDeleteIcon = useCallback((e) => {
    const targetId = e.currentTarget.parentElement.parentElement.id;
    onRemove(parseInt(targetId));

    setIsEdit(false);
    contentInput.current.value = "";

    displayAlert("item removed", "danger");
  }, []);

  const handleClickRemoveAllButton = useCallback(() => {
    onRemoveAll();
    displayAlert("empty list", "danger");
  }, []);

  // ALERT
  const displayAlert = useCallback((text, action) => {
    const alert =
      contentInput.current.parentElement.previousSibling.previousElementSibling;
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(() => {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`);
    }, 1000);
  }, []);

  return (
    <section className="section-center">
      {/* <!-- form --> */}
      <ItemEditor
        handleSubmit={handleSubmit}
        contentInput={contentInput}
        handleChangeState={handleChangeState}
        isEdit={isEdit}
      />
      {/* <!-- list --> */}
      <TodoList
        dataList={dataList}
        isEdit={isEdit}
        handleClickEditIcon={handleClickEditIcon}
        handleClickDeleteIcon={handleClickDeleteIcon}
        isExistData={dataList.length === 0 ? false : true}
        handleClickRemoveAllButton={handleClickRemoveAllButton}
      />
    </section>
  );
};

Home.defaultProps = {
  diaryList: [],
};

export default Home;
