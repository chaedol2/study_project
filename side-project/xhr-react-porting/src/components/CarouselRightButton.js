import { useContext } from "react";
import { DispatchContext, StateContext } from "../App";

const CarouselRightButton = () => {
  const { rightButton } = useContext(StateContext);
  const { handleRightButtonClick } = useContext(DispatchContext);

  return (
    <button
      onClick={handleRightButtonClick}
      ref={rightButton}
      className="right-button"
    >
      {">"}
    </button>
  );
};

export default CarouselRightButton;
