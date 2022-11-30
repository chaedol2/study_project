import { useEffect, useState } from "react";
import CleanUp from "./CleanUp";

const UseEffect = () => {
  ////////////////////////////////////////UseEffect 예제
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 첫 마운팅 + 랜더링마다 매번 실행됨 - 랜더링 이후
  useEffect(() => {
    console.log("(useEffect)첫 마운트 및 랜더링 마다 실행");
  });

  // 첫 마운팅 + name이 변경될때마다 실행됨
  useEffect(() => {
    console.log("(useEffect)첫 마운트 및 count의 변화");
  }, [count]);

  // 첫 마운팅 + name이 변경될때마다 실행됨
  useEffect(() => {
    console.log("(useEffect)첫 마운트 및 name의 변화");
  }, [name]);

  // 첫 마운팅 시 한번만 실행됨
  useEffect(() => {
    console.log("(useEffect)첫 마운팅 만 실행");
  }, []);

  ////////////////////////////////////////CleanUp 예제
  const [showTimer, setShowTimer] = useState(false);
  return (
    <>
      <span>useEffect 예제</span>
      <div>
        <button onClick={handleCountUpdate}>Update</button>
        <span>count: {count}</span>
        <input type="text" value={name} onChange={handleInputChange} />
        <span>name: {name}</span>
      </div>

      <span>CleanUp 예제</span>
      <div>
        {showTimer && <CleanUp />}
        <button onClick={() => setShowTimer(!showTimer)}>
          Toogle CleanUP Example
        </button>
      </div>
    </>
  );
};

export default UseEffect;
