import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

export const CalcStateContext = React.createContext();
export const CalcDispatchContext = React.createContext();

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.historyList;
    }
    case "CREATE": {
      newState = [action.historyList, ...state];
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
  localStorage.setItem("historyList", JSON.stringify(newState));
  return newState;
};

const App = () => {
  const [historyList, dispatch] = useReducer(reducer, []);

  const historyId = useRef(1);

  const operatorList = ["+", "-", "/", "*"];
  const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  const [answerNum, setAnswerNum] = useState("");
  const [currentNum, setCurrentNum] = useState("");
  const [isOperator, setIsOperator] = useState(false);
  const [previousNum, setPreviousNum] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("historyList");
    if (localData) {
      const historyList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (historyList.length >= 1) {
        historyId.current = parseInt(historyList[0].id) + 1;
        dispatch({ type: "INIT", historyList: historyList });
      }
    }
  }, []);

  const handleKeypadKeydown = useCallback(
    (e) => {
      let targetValue = e.key;
      let keyList = numberList.concat(operatorList);

      switch (targetValue) {
        case "Enter":
          // previousNum과 currentNum 값이 존재하는 경우 실행
          if (previousNum && currentNum) {
            calculate();
          }
          break;
        case "Backspace":
          if (currentNum) {
            eraseDisplay();
          }
          break;
        case "Escape":
          clearDisplay();
          break;
        case keyList.filter((it) => it === targetValue)[0]:
          eventCalculator(targetValue);
          break;
        default:
          break;
      }
    },
    [previousNum, currentNum]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeypadKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeypadKeydown);
    };
  }, [handleKeypadKeydown]);

  const handleKeypadClick = useCallback(
    (e) => {
      let targetValue = e.target.value;
      let keyList = numberList.concat(operatorList);

      switch (targetValue) {
        case "clear":
          clearDisplay();
          break;
        case "erase":
          if (currentNum) {
            eraseDisplay();
          }
          break;
        case "history":
          historyDisplay(e);
          break;
        case "equal_button":
          if (previousNum && currentNum) {
            calculate();
          }
          break;
        case keyList.filter((it) => it === targetValue)[0]:
          eventCalculator(targetValue);
          break;
        default:
          break;
      }
    },
    [previousNum, currentNum]
  );

  const eventCalculator = (targetValue) => {
    if (numberList.includes(targetValue)) {
      calculateTargetNumber(targetValue);
    }

    if (operatorList.includes(targetValue)) {
      calculateTargetOperator(targetValue);
    }
  };

  const calculateTargetNumber = (targetValue) => {
    let pointCnt = countPointCnt(currentNum);
    let numberValue = targetValue;

    if (pointCnt !== 1 || numberValue !== ".") {
      if (currentNum) {
        setCurrentNum(currentNum + numberValue);
      } else {
        setCurrentNum(currentNum + numberValue);
        if (numberValue === ".") {
          setCurrentNum("0.");
        }
      }
    }
  };

  const calculateTargetOperator = (targetValue) => {
    let operatorValue = targetValue;
    if (currentNum && !isOperator) {
      //set previousNum and currentOperator
      setOperatorValue(operatorValue);
      setOperatorView(operatorValue);
    } else if (currentNum && isOperator) {
      let localResultValue;

      if (previousNum && currentNum) {
        localResultValue = calculate();
      }

      //set previousNum and currentOperator
      setPreviousNum(localResultValue);
      setCurrentOperator(operatorValue);

      //set view
      setAnswerNum(localResultValue + operatorValue);

      //set isOperator = true, currentNum clear
      setIsOperator(true);
      setCurrentNum("");
    }
  };

  const setOperatorValue = (operatorValue) => {
    setPreviousNum(currentNum);

    setCurrentOperator(operatorValue);
  };

  const setOperatorView = (operatorValue) => {
    //set view
    setAnswerNum(currentNum + operatorValue);
    setCurrentNum("");

    //set isOperator = true, currentNum clear
    setIsOperator(true);
    setCurrentNum("");
  };

  const calculate = () => {
    //점으로 끝나는 수가 currentNum에서 들어올 경우 점 삭제
    if (currentNum.slice(-1) === ".") {
      setCurrentNum(currentNum.slice(0, -1));
    }

    let localResultValue = calculateOperator(currentOperator);

    // save arrayHistoryList

    let localHistoryResult =
      previousNum + currentOperator + currentNum + "=" + localResultValue;

    //history item 만들기
    createHistoryItem(localHistoryResult);

    // setDefault
    setPreviousNum("");
    setCurrentNum("");
    setCurrentOperator("");
    setIsOperator(false);

    // currentNum reset result
    setCurrentNum(localResultValue);

    // set result view
    setAnswerNum("");

    return localResultValue;
  };

  const handleCliCkDeleteHistoryItem = (e) => {
    const targetId = e.currentTarget.parentElement.id;
    removeHistoryItem(parseInt(targetId));
  };

  const handleCliCkClearHistoryItem = () => {
    removeAllHistoryItem();
  };

  // History CREATE
  const createHistoryItem = useCallback((historyResult) => {
    dispatch({
      type: "CREATE",
      historyList: {
        id: historyId.current,
        historyResult,
      },
    });
    historyId.current += 1;
  }, []);

  // History REMOVE
  const removeHistoryItem = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  // History REMOVE ALL
  const removeAllHistoryItem = useCallback(() => {
    dispatch({ type: "REMOVEALL" });
  }, []);

  // Click History Display
  const historyDisplay = (e) => {
    const history = e.target.parentElement.parentElement.nextElementSibling;
    history.classList.toggle("show-container");
  };

  // Clear Function
  const clearDisplay = () => {
    // setDefault
    setPreviousNum("");
    setCurrentNum("");
    setCurrentOperator("");
    setIsOperator(false);
    setAnswerNum("");
  };

  // Erase Function
  const eraseDisplay = () => {
    setCurrentNum(currentNum.slice(0, -1));
  };

  const countPointCnt = (string) => {
    let search = ".";
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== search) continue;
      count++;
    }
    return count;
  };

  // Operator
  const calculateOperator = (operatorValue) => {
    const decimalPoint = 2;
    let localResultValue;
    let localPreviousNum;

    switch (operatorValue) {
      case "+":
        localResultValue = parseFloat(previousNum) + parseFloat(currentNum);
        break;
      case "-":
        localResultValue = parseFloat(previousNum) - parseFloat(currentNum);
        break;
      case "*":
        localResultValue = parseFloat(previousNum) * parseFloat(currentNum);
        break;
      case "/":
        localResultValue = parseFloat(previousNum) / parseFloat(currentNum);
        break;
      default:
      //do nothing
    }

    // 소수점 검사
    if (
      countPointCnt(previousNum) === 1 ||
      countPointCnt(currentNum) === 1 ||
      countPointCnt(localResultValue.toString()) === 1
    ) {
      localResultValue = parseFloat(localResultValue).toFixed(decimalPoint);
      localPreviousNum = parseFloat(previousNum).toFixed(decimalPoint);
      setPreviousNum(localPreviousNum);
      setCurrentNum(localResultValue);
      setAnswerNum("");
    }
    // view
    return localResultValue;
  };

  return (
    <CalcStateContext.Provider value={{ currentNum, answerNum, historyList }}>
      <CalcDispatchContext.Provider
        value={{
          handleKeypadClick,
          handleCliCkDeleteHistoryItem,
          handleCliCkClearHistoryItem,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CalcDispatchContext.Provider>
    </CalcStateContext.Provider>
  );
};

export default App;
