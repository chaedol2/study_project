import { useEffect } from "react";

const CleanUp = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(
        "(CleanUp)첫마운트 최초 1번 실행 => 인터벌 콜백함수로 1초마다 실행"
      );
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("(CleanUp)마운트가 끝날 떄 한번 실행 => 인터벌 끄기 실행");
    };
  }, []);

  return (
    <div>
      <span>마운트 시작 최초한번 실행</span>
    </div>
  );
};

export default CleanUp;
