import DisplayKeypad from "./DisplayKeypad";
import DisplayView from "./DisplayView";

const Calculator = () => {
  return (
    <div className="display">
      <DisplayView />
      <DisplayKeypad />
    </div>
  );
};

export default Calculator;
