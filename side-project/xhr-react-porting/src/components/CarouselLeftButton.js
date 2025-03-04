import { useContext, useEffect } from "react";
import { DispatchContext, StateContext } from "../App";

const CarouselLeftButton = () => {
  const { dataList, leftButton } = useContext(StateContext);
  const { handleLeftButtonClick } = useContext(DispatchContext);

  useEffect(() => {
    if (leftButton) {
      leftButton.current.disabled = true;
    }
  }, [dataList]);

  return (
    <button
      onClick={handleLeftButtonClick}
      ref={leftButton}
      className="left-button"
    >
      {"<"}
    </button>
  );
};

export default CarouselLeftButton;
