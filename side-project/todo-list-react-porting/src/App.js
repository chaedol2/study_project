import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "REMOVEALL": {
      newState = [];
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("list", JSON.stringify(newState));
  return newState;
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(1);

  useEffect(() => {
    const localData = localStorage.getItem("list");
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: "INIT", data: diaryList });
      }
    }
  }, []);

  // CREATE
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        content,
      },
    });
    dataId.current += 1;
  }, []);

  // EDIT
  const onEdit = useCallback((targetId, content) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        content,
      },
    });
  }, []);

  // REMOVE
  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  // REMOVE ALL
  const onRemoveAll = useCallback(() => {
    dispatch({ type: "REMOVEALL" });
  }, []);

  const memorizedDispatches = useMemo(() => {
    return { onCreate, onEdit, onRemove, onRemoveAll };
  });

  return (
    <TodoStateContext.Provider value={data}>
      <TodoDispatchContext.Provider value={memorizedDispatches}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default App;
